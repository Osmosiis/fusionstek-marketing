"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const demoRequestSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  title: z.string().min(2, "Title is required"),
  notes: z.string().max(2000).optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

type DemoRequestFormData = z.infer<typeof demoRequestSchema>;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function DemoRequestForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      notes: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: DemoRequestFormData) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const message = [
        `Role: ${data.title}`,
        data.notes?.trim() ? data.notes.trim() : "Requested a demo.",
      ].join("\n\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 md:p-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[var(--primary)]" strokeWidth={1.5} />
          </div>
          <h3 className="font-sentient text-2xl md:text-3xl font-extralight mb-4">
            Request Received
          </h3>
          <p className="text-[var(--neutral-400)] mb-8">
            Thanks for your interest. We’ll be in touch shortly to schedule a time that works for you.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
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
        <input
          type="text"
          {...form.register("honeypot")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />

        <div>
          <Label htmlFor="demo-name">Name *</Label>
          <Input
            id="demo-name"
            {...form.register("name")}
            placeholder="Your name"
            disabled={status !== "idle"}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="demo-email">Work email *</Label>
          <Input
            id="demo-email"
            type="email"
            {...form.register("email")}
            placeholder="you@company.com"
            disabled={status !== "idle"}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="demo-company">Company *</Label>
          <Input
            id="demo-company"
            {...form.register("company")}
            placeholder="Company name"
            disabled={status !== "idle"}
          />
          {form.formState.errors.company && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.company.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="demo-title">Job title *</Label>
          <Input
            id="demo-title"
            {...form.register("title")}
            placeholder="e.g. CISO, Security Lead"
            disabled={status !== "idle"}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="demo-notes">Notes <span className="text-foreground/40 text-xs">(optional)</span></Label>
          <Textarea
            id="demo-notes"
            {...form.register("notes")}
            rows={3}
            placeholder="What would you like to see in the demo? Any preferred times or timezone?"
            disabled={status !== "idle"}
          />
        </div>

        {status === "error" && (
          <Alert variant="destructive">
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>
              {errorMessage ?? "Something went wrong. Please try again."}
            </AlertDescription>
          </Alert>
        )}

        <button
          type="submit"
          disabled={status !== "idle" || !form.formState.isValid}
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
          {status === "idle" && "Request a Demo"}
          {status === "submitting" && (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          )}
        </button>
      </form>
    </div>
  );
}
