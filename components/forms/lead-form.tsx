"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Card } from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Domain validation regex (FQDN-style, no URLs)
const DOMAIN_REGEX = /^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

const domainSchema = z
  .string()
  .min(1, "At least one domain is required")
  .refine(
    (val) => {
      const domains = parseDomains(val);
      if (domains.length === 0) return false;
      if (domains.length > 5) return false;
      return domains.every((d) => {
        if (d.length > 253) return false;
        return DOMAIN_REGEX.test(d);
      });
    },
    {
      message: "Invalid domain format or exceeds limits (max 5 domains, 253 chars each)",
    }
  );

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid company email is required"),
  title: z.string().min(2, "Title is required"),
  company: z.string().min(2, "Company is required"),
  goals: z.array(z.string()).optional(),
  constraints: z.array(z.string()).optional(),
  timeline: z.enum(["24h_report", "48h_report", "72h_report", "no_preference"]).default("24h_report"),
  scope_notes: z.string().optional(),
  domains: domainSchema,
  notes: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must have authorization to assess this domain",
  }),
  honeypot: z.string().max(0, "Invalid submission"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface SubmissionState {
  status: "idle" | "submitting" | "success" | "error" | "rate_limited";
  demoRequestId?: string;
  errorMessage?: string;
}

const DEMO_GOALS = [
  { value: "external_assurance_baseline", label: "External assurance baseline" },
  { value: "verify_findings_evidence", label: "Verified findings and evidence" },
  { value: "waf_cdn_posture", label: "WAF/CDN posture validation" },
  { value: "api_exposure", label: "API exposure verification" },
  { value: "drift_snapshot", label: "Snapshot for drift tracking" },
];

const DEMO_CONSTRAINTS = [
  { value: "no_bruteforce", label: "No brute force" },
  { value: "no_auth_testing", label: "No auth testing" },
  { value: "no_exploit_chaining", label: "No exploit chaining" },
  { value: "low_rate_only", label: "Low rate only" },
];

const TIMELINE_LABELS: Record<string, string> = {
  "24h_report": "24-hour baseline report",
  "48h_report": "48-hour baseline report",
  "72h_report": "72-hour baseline report",
  "no_preference": "No preference",
};

function parseDomains(input: string): string[] {
  return input
    .split(/[,\n]/)
    .map((d) => d.trim().toLowerCase())
    .filter((d) => d.length > 0)
    .filter((d, i, arr) => arr.indexOf(d) === i); // dedupe
}

export function LeadForm() {
  const [token, setToken] = useState<string | null>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: "idle" });
  const [scanStartTime, setScanStartTime] = useState<number | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      company: "",
      goals: [],
      constraints: [],
      timeline: "24h_report",
      scope_notes: "",
      domains: "",
      notes: "",
      consent: false,
      honeypot: "",
    },
  });

  // Fetch token on mount
  useEffect(() => {
    fetchToken();
  }, []);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [pollingInterval]);

  async function fetchToken() {
    try {
      const res = await fetch("/api/intake/token");
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
      }
    } catch (error) {
      console.error("Failed to fetch token:", error);
    }
  }


  async function pollStatus(demoRequestId: string, pollToken: string): Promise<string> {
    const res = await fetch(`/api/intake/status?demo_request_id=${demoRequestId}`, {
      headers: {
        Authorization: `Bearer ${pollToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Status check failed");
    }

    const data = await res.json();
    return data.status;
  }

  async function onSubmit(data: LeadFormData) {
    if (!token) {
      form.setError("domains", {
        type: "manual",
        message: "Session expired. Please refresh the page.",
      });
      return;
    }

    const domains = parseDomains(data.domains);
    const emailDomain = data.email.split("@")[1]?.toLowerCase() || "";
    if (!emailDomain || !domains.some((domain) => emailDomain === domain || emailDomain.endsWith(`.${domain}`))) {
      form.setError("email", {
        type: "manual",
        message: "Email must use the company domain (match one of the submitted domains).",
      });
      return;
    }

    try {
      // Step 1: Submit metadata
      setSubmissionState({ status: "submitting" });

      const goals = data.goals?.length ? `Requested focus: ${data.goals.join(", ")}` : "";
      const constraints = data.constraints?.length ? `Constraints: ${data.constraints.join(", ")}` : "";
      const timeline = data.timeline ? `Timeline: ${TIMELINE_LABELS[data.timeline] || data.timeline}` : "";
      const title = data.title?.trim() ? `Title: ${data.title.trim()}` : "";
      const scopeNotes = data.scope_notes?.trim() ? `Scope notes: ${data.scope_notes.trim()}` : "";
      const additionalNotes = data.notes?.trim() ? `Additional notes: ${data.notes.trim()}` : "";
      const combinedNotes = [title, goals, constraints, timeline, scopeNotes, additionalNotes]
        .filter(Boolean)
        .join("\n");

      const submitRes = await fetch("/api/intake/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          title: data.title,
          company: data.company,
          domains,
          notes: combinedNotes,
          consent: data.consent,
          honeypot: data.honeypot,
          token,
        }),
      });

      if (!submitRes.ok) {
        const errorData = await submitRes.json().catch(() => ({}));
        if (submitRes.status === 429) {
          setSubmissionState({ status: "rate_limited" });
          // Analytics event
          if (typeof window !== "undefined" && (window as any).analytics) {
            (window as any).analytics.track("rate_limited");
          }
          return;
        }
        throw new Error(errorData.message || "Submission failed");
      }

      const submitData = await submitRes.json();
      const demoRequestId = submitData.demo_request_id;
      const status = submitData.status;

      // Analytics event
      if (typeof window !== "undefined" && (window as any).analytics) {
        (window as any).analytics.track("demo_request_submitted");
      }

      // Step 3: Handle scan status
      if (status === "completed" || status === "success") {
        setSubmissionState({
          status: "success",
          demoRequestId,
        });
        if (typeof window !== "undefined" && (window as any).analytics) {
          (window as any).analytics.track("demo_request_success");
        }
      } else if (status === "scanning" || status === "pending") {
        setSubmissionState({ status: "submitting", demoRequestId });
        setScanStartTime(Date.now());

        // Poll for up to 2 minutes
        const pollInterval = setInterval(async () => {
          const elapsed = Date.now() - (scanStartTime || Date.now());
          if (elapsed > 120000) {
            clearInterval(pollInterval);
            setPollingInterval(null);
            return;
          }

          try {
            const newStatus = await pollStatus(demoRequestId, token);
            if (newStatus === "completed" || newStatus === "success") {
              clearInterval(pollInterval);
              setPollingInterval(null);
              setSubmissionState({
                status: "success",
                demoRequestId,
              });
              if (typeof window !== "undefined" && (window as any).analytics) {
                (window as any).analytics.track("demo_request_success");
              }
            }
          } catch (error) {
            console.error("Polling error:", error);
          }
        }, 5000);

        setPollingInterval(pollInterval);

        // Fallback: if 15s elapsed and still scanning, show processing message
        setTimeout(() => {
          if (submissionState.status === "scanning") {
            // Status already updated by polling or will be
          }
        }, 15000);
      } else {
        setSubmissionState({
          status: "success",
          demoRequestId,
        });
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmissionState({
        status: "error",
        errorMessage: error.message || "An error occurred. Please try again.",
      });
      if (typeof window !== "undefined" && (window as any).analytics) {
        (window as any).analytics.track("demo_request_error");
      }
    }
  }

  if (submissionState.status === "success") {
    return (
      <div className="p-8 md:p-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[var(--primary)]" strokeWidth={1.5} />
          </div>
          <h3 className="font-sentient text-2xl md:text-3xl font-extralight mb-4">Request Submitted Successfully</h3>
          <p className="text-[var(--neutral-400)] mb-8">
            Your demo request has been received. Results will be emailed within 24 hours.
          </p>
          {submissionState.demoRequestId && (
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 mb-8">
              <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-2">Reference ID</p>
              <p className="font-mono text-lg text-[var(--primary)]">{submissionState.demoRequestId}</p>
            </div>
          )}
          <button
            onClick={() => {
              setSubmissionState({ status: "idle" });
              form.reset();
            }}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3",
              "text-xs font-mono uppercase tracking-wider",
              "bg-transparent text-[var(--foreground)]",
              "border border-[var(--border-hover)] rounded-sm",
              "transition-all duration-300",
              "hover:border-[var(--primary)] hover:text-[var(--primary)]"
            )}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot */}
        <input
          type="text"
          {...form.register("honeypot")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...form.register("name")}
            disabled={submissionState.status !== "idle"}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Company Email *</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            disabled={submissionState.status !== "idle"}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            {...form.register("title")}
            disabled={submissionState.status !== "idle"}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.title.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            {...form.register("company")}
            disabled={submissionState.status !== "idle"}
          />
          {form.formState.errors.company && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.company.message}</p>
          )}
        </div>

        {/* Demo Goals */}
        <div>
          <Label>What should we test? <span className="text-foreground/40 text-xs">(optional)</span></Label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DEMO_GOALS.map((goal) => (
              <label key={goal.value} className="flex items-start gap-3 text-sm">
                <Checkbox
                  checked={form.watch("goals")?.includes(goal.value)}
                  onCheckedChange={(checked) => {
                    const current = form.getValues("goals") || [];
                    const next = checked
                      ? [...current, goal.value]
                      : current.filter((v) => v !== goal.value);
                    form.setValue("goals", next);
                  }}
                  disabled={submissionState.status !== "idle"}
                />
                <span className="text-[var(--neutral-300)]">{goal.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div>
          <Label>Constraints <span className="text-foreground/40 text-xs">(optional)</span></Label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DEMO_CONSTRAINTS.map((constraint) => (
              <label key={constraint.value} className="flex items-start gap-3 text-sm">
                <Checkbox
                  checked={form.watch("constraints")?.includes(constraint.value)}
                  onCheckedChange={(checked) => {
                    const current = form.getValues("constraints") || [];
                    const next = checked
                      ? [...current, constraint.value]
                      : current.filter((v) => v !== constraint.value);
                    form.setValue("constraints", next);
                  }}
                  disabled={submissionState.status !== "idle"}
                />
                <span className="text-[var(--neutral-300)]">{constraint.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <Label htmlFor="timeline">Timeline <span className="text-foreground/40 text-xs">(optional)</span></Label>
          <select
            id="timeline"
            {...form.register("timeline")}
            disabled={submissionState.status !== "idle"}
            className={cn(
              "mt-2 w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm",
              "text-[var(--neutral-300)] focus:border-[var(--border-hover)]"
            )}
          >
            <option value="24h_report">24-hour baseline report</option>
            <option value="48h_report">48-hour baseline report</option>
            <option value="72h_report">72-hour baseline report</option>
            <option value="no_preference">No preference</option>
          </select>
        </div>

        {/* Scope Notes */}
        <div>
          <Label htmlFor="scope_notes">Scope Notes <span className="text-foreground/40 text-xs">(optional)</span></Label>
          <Textarea
            id="scope_notes"
            {...form.register("scope_notes")}
            rows={3}
            placeholder="Any scope details or constraints you want us to honor"
            disabled={submissionState.status !== "idle"}
          />
        </div>

        {/* Domains */}
        <div>
          <Label htmlFor="domains">
            Domains * <span className="text-foreground/40 text-xs">(comma or newline separated, max 5)</span>
          </Label>
          <Textarea
            id="domains"
            {...form.register("domains")}
            placeholder="example.com&#10;another-domain.com"
            rows={4}
            disabled={submissionState.status !== "idle"}
          />
          {form.formState.errors.domains && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.domains.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="notes">Additional Notes (optional)</Label>
          <Textarea
            id="notes"
            {...form.register("notes")}
            rows={3}
            disabled={submissionState.status !== "idle"}
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={form.watch("consent")}
            onCheckedChange={(checked) => form.setValue("consent", checked === true)}
            disabled={submissionState.status !== "idle"}
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
            I have authorization to assess this domain. *
          </Label>
        </div>
        {form.formState.errors.consent && (
          <p className="text-sm text-destructive">{form.formState.errors.consent.message}</p>
        )}

        {/* Error State */}
        {submissionState.status === "error" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {submissionState.errorMessage || "An error occurred. Please try again."}
            </AlertDescription>
          </Alert>
        )}

        {/* Rate Limited */}
        {submissionState.status === "rate_limited" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Too many requests. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            submissionState.status !== "idle" ||
            !form.formState.isValid ||
            !token
          }
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 px-6 py-4",
            "text-xs font-mono uppercase tracking-wider",
            "bg-[var(--primary)] text-black",
            "border border-[var(--primary)] rounded-sm",
            "transition-all duration-300",
            "hover:bg-[var(--primary-hover)] hover:shadow-[0_0_30px_-5px_var(--primary)]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          )}
        >
          {submissionState.status === "idle" && "Submit Request"}
          {submissionState.status === "submitting" && (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          )}
        </button>
      </form>
    </div>
  );
}
