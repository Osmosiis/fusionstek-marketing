"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Card } from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { Loader2, Upload, X, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";
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
      if (domains.length > 25) return false;
      return domains.every((d) => {
        if (d.length > 253) return false;
        return DOMAIN_REGEX.test(d);
      });
    },
    {
      message: "Invalid domain format or exceeds limits (max 25 domains, 253 chars each)",
    }
  );

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  domains: domainSchema,
  notes: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must have authorization to assess this domain",
  }),
  honeypot: z.string().max(0, "Invalid submission"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface FileWithPreview extends File {
  id: string;
}

interface SubmissionState {
  status: "idle" | "uploading" | "submitting" | "scanning" | "success" | "error" | "rate_limited";
  demoRequestId?: string;
  droppedFiles?: string[];
  errorMessage?: string;
}

function parseDomains(input: string): string[] {
  return input
    .split(/[,\n]/)
    .map((d) => d.trim().toLowerCase())
    .filter((d) => d.length > 0)
    .filter((d, i, arr) => arr.indexOf(d) === i); // dedupe
}

export function LeadForm() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: "idle" });
  const [scanStartTime, setScanStartTime] = useState<number | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
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

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles: FileWithPreview[] = [];

    selectedFiles.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        form.setError("domains", {
          type: "manual",
          message: `File ${file.name} exceeds 10MB limit`,
        });
        return;
      }
      validFiles.push({
        ...file,
        id: `${Date.now()}-${Math.random()}`,
      });
    });

    const newFiles = [...files, ...validFiles].slice(0, 3);
    setFiles(newFiles);
  }

  function removeFile(id: string) {
    setFiles(files.filter((f) => f.id !== id));
  }

  async function uploadFiles(uploadToken: string): Promise<{ uploadIds: string[]; droppedFiles: string[] }> {
    if (files.length === 0) {
      return { uploadIds: [], droppedFiles: [] };
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("token", uploadToken);

    const intakeGatewayUrl = process.env.NEXT_PUBLIC_INTAKE_GATEWAY_URL;
    if (!intakeGatewayUrl) {
      throw new Error("Intake Gateway URL not configured");
    }

    const res = await fetch(`${intakeGatewayUrl}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "Upload failed" }));
      throw new Error(error.message || "Upload failed");
    }

    const data = await res.json();
    return {
      uploadIds: data.uploadIds || [],
      droppedFiles: data.droppedFiles || [],
    };
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

    setSubmissionState({ status: "uploading" });

    try {
      // Step 1: Upload files
      let uploadIds: string[] = [];
      let droppedFiles: string[] = [];

      if (files.length > 0) {
        try {
          const uploadResult = await uploadFiles(token);
          uploadIds = uploadResult.uploadIds;
          droppedFiles = uploadResult.droppedFiles;
        } catch (error) {
          console.error("File upload error:", error);
          // Continue without files if upload fails
        }
      }

      // Step 2: Submit metadata
      setSubmissionState({ status: "submitting" });

      const domains = parseDomains(data.domains);

      const submitRes = await fetch("/api/intake/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          domains,
          notes: data.notes || "",
          uploadIds,
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
          droppedFiles,
        });
        if (typeof window !== "undefined" && (window as any).analytics) {
          (window as any).analytics.track("demo_request_success");
        }
      } else if (status === "scanning" || status === "pending") {
        setSubmissionState({ status: "scanning", demoRequestId, droppedFiles });
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
                droppedFiles,
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
          droppedFiles,
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
            Your demo request has been received. Results will be emailed to you shortly.
          </p>
          {submissionState.demoRequestId && (
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 mb-8">
              <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-2">Reference ID</p>
              <p className="font-mono text-lg text-[var(--primary)]">{submissionState.demoRequestId}</p>
            </div>
          )}
          {submissionState.droppedFiles && submissionState.droppedFiles.length > 0 && (
            <Alert variant="destructive" className="mb-8 text-left">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <p className="font-semibold mb-2">Some files were removed:</p>
                <ul className="list-disc list-inside space-y-1">
                  {submissionState.droppedFiles.map((filename, i) => (
                    <li key={i} className="text-sm">
                      {filename}
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-2">These files did not meet security requirements.</p>
              </AlertDescription>
            </Alert>
          )}
          <button
            onClick={() => {
              setSubmissionState({ status: "idle" });
              form.reset();
              setFiles([]);
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
          <Label htmlFor="email">Email *</Label>
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

        {/* Domains */}
        <div>
          <Label htmlFor="domains">
            Domains * <span className="text-foreground/40 text-xs">(comma or newline separated, max 25)</span>
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

        {/* Files */}
        <div>
          <Label>
            Files <span className="text-foreground/40 text-xs">(optional, max 3 files, 10MB each)</span>
          </Label>
          <div className="mt-2">
            <Input
              type="file"
              multiple
              onChange={handleFileSelect}
              disabled={submissionState.status !== "idle" || files.length >= 3}
              className="cursor-pointer"
            />
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-background border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Upload className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                      <span className="text-sm truncate">{file.name}</span>
                      <span className="text-xs text-foreground/40">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                      disabled={submissionState.status !== "idle"}
                      className="ml-2 bg-transparent border-foreground/20 text-foreground hover:bg-foreground/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
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
          {(submissionState.status === "uploading" ||
            submissionState.status === "submitting") && (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          )}
          {submissionState.status === "scanning" && (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Scanning files...
            </>
          )}
        </button>

        {submissionState.status === "scanning" && submissionState.demoRequestId && (
          <div className="text-center">
            <p className="text-sm text-[var(--neutral-400)]">
              Your files are being scanned. This may take a few moments.
            </p>
            <p className="text-xs text-[var(--neutral-500)] mt-2">
              Reference ID: {submissionState.demoRequestId}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
