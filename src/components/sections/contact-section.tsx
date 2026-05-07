"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SubmitState = "idle" | "success" | "error";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/your-form-id";
const IS_PLACEHOLDER_ENDPOINT = FORMSPREE_ENDPOINT.includes("your-form-id");

export function ContactSection(): React.JSX.Element {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsSubmitting(true);
    setSubmitState("idle");
    try {
      if (IS_PLACEHOLDER_ENDPOINT) {
        event.currentTarget.reset();
        setSubmitState("success");
        return;
      }
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const payload: unknown = await response.json().catch(() => null);
      const hasExplicitFailure =
        payload !== null &&
        typeof payload === "object" &&
        "errors" in payload &&
        Array.isArray((payload as { errors?: unknown[] }).errors) &&
        (payload as { errors?: unknown[] }).errors!.length > 0;
      if (!response.ok || hasExplicitFailure) {
        throw new Error("Formspree rejected the submission");
      }
      event.currentTarget.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionShell id="contact">
      <SectionHeading
        kicker="Contact"
        title="Let's build reliable AI systems together"
        subtitle="Use the form for project discussions, consulting, or architecture support."
      />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            {IS_PLACEHOLDER_ENDPOINT ? (
              <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-100">
                Demo mode: submissions are not emailed until you set{" "}
                <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[0.7rem] dark:bg-amber-900/50">
                  NEXT_PUBLIC_FORMSPREE_ENDPOINT
                </code>{" "}
                in{" "}
                <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[0.7rem] dark:bg-amber-900/50">
                  .env.local
                </code>
                .
              </p>
            ) : null}
            <form className="space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
              <label className="block space-y-1">
                <span className="text-sm font-medium">Name</span>
                <input name="name" required className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium">Email</span>
                <input type="email" name="email" required className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
                />
              </label>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitState === "success" ? <p className="text-sm text-emerald-600 dark:text-emerald-300">Thanks! Your message was sent successfully.</p> : null}
              {submitState === "error" ? (
                <p className="text-sm text-rose-600 dark:text-rose-300">
                  Submission failed. Verify your Formspree endpoint and try again.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </SectionShell>
  );
}
