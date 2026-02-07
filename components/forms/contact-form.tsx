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

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  message: z.string().min(10, "Please include a short message"),
  honeypot: z.string().max(0, "Invalid submission"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "An error occurred. Please try again.");
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
            Message Received
          </h3>
          <p className="text-[var(--neutral-400)] mb-8">
            Thanks for reaching out. We will respond shortly.
          </p>
          <button
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
            Send Another Message
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

        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" {...form.register("name")} disabled={status !== "idle"} />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...form.register("email")} disabled={status !== "idle"} />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="company">Company *</Label>
          <Input id="company" {...form.register("company")} disabled={status !== "idle"} />
          {form.formState.errors.company && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.company.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" rows={4} {...form.register("message")} disabled={status !== "idle"} />
          {form.formState.errors.message && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        {status === "error" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {errorMessage || "An error occurred. Please try again."}
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
          {status === "idle" && "Send Message"}
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
