"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPANY_SIZES = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-500", label: "201–500" },
  { value: "500+", label: "500+" },
] as const;

const demoRequestSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  companySize: z.string().min(1, "Company size is required"),
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
      companySize: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: DemoRequestFormData) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/waiting-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          companySize: data.companySize,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
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
            You're on the list
          </h3>
          <p className="text-[var(--neutral-400)] mb-8">
            Thank you for joining the waiting list. Check your email for a confirmation—we'll contact you as soon as we go live.</p>
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
            Add another
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
          <Label htmlFor="demo-company-size">Company size *</Label>
          <Select
            onValueChange={(v) => form.setValue("companySize", v, { shouldValidate: true })}
            value={form.watch("companySize")}
            disabled={status !== "idle"}
          >
            <SelectTrigger id="demo-company-size" className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {COMPANY_SIZES.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label} employees
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.companySize && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.companySize.message}</p>
          )}
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
          {status === "idle" && "Join the waiting list"}
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
