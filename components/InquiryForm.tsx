"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { budgets, contact, projectTypes, timelines } from "@/lib/content";
import {
  emptyInquiry,
  validateInquiry,
  type InquiryErrors,
  type InquiryFields,
} from "@/lib/contact/schema";
import { cn } from "@/lib/cn";

const fieldClass =
  "mt-2 w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-mute/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function InquiryForm() {
  const formId = useId();
  const [values, setValues] = useState<InquiryFields>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  function update<K extends keyof InquiryFields>(key: K, value: InquiryFields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { errors: nextErrors, isSpam } = validateInquiry(values);

    if (isSpam) {
      setStatus("success");
      setMessage(contact.success);
      setValues(emptyInquiry());
      return;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
        errors?: InquiryErrors;
      } | null;

      if (response.status === 503) {
        setStatus("error");
        setMessage(contact.unavailable);
        return;
      }

      if (!response.ok) {
        setErrors(payload?.errors ?? {});
        setStatus("error");
        setMessage(payload?.error ?? contact.error);
        return;
      }

      setErrors({});
      setValues(emptyInquiry());
      setStatus("success");
      setMessage(contact.success);
    } catch {
      setStatus("error");
      setMessage(contact.error);
    }
  }

  return (
    <form
      id="inquiry"
      className="relative scroll-mt-28 space-y-5"
      onSubmit={onSubmit}
      noValidate
    >
      <Field
        id={`${formId}-name`}
        label="Name"
        required
        error={errors.name}
      >
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          className={fieldClass}
        />
      </Field>

      <Field
        id={`${formId}-email`}
        label="Email"
        required
        error={errors.email}
      >
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          className={fieldClass}
        />
      </Field>

      <Field
        id={`${formId}-company`}
        label="Company / Organization"
        error={errors.company}
      >
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field
        id={`${formId}-help`}
        label="What do you need help with?"
        required
        error={errors.help}
      >
        <textarea
          id={`${formId}-help`}
          name="help"
          required
          rows={5}
          maxLength={4000}
          value={values.help}
          onChange={(event) => update("help", event.target.value)}
          aria-invalid={errors.help ? true : undefined}
          className={cn(fieldClass, "min-h-32 resize-y")}
        />
      </Field>

      <Field
        id={`${formId}-technology`}
        label="What technology are you currently using?"
        error={errors.technology}
      >
        <input
          id={`${formId}-technology`}
          name="technology"
          type="text"
          maxLength={200}
          value={values.technology}
          onChange={(event) => update("technology", event.target.value)}
          className={fieldClass}
        />
      </Field>

      <div className="grid min-w-0 gap-5 md:grid-cols-3">
        <Field
          id={`${formId}-type`}
          label="Project type"
          error={errors.projectType}
        >
          <select
            id={`${formId}-type`}
            name="projectType"
            value={values.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-timeline`}
          label="Expected timeline"
          error={errors.timeline}
        >
          <select
            id={`${formId}-timeline`}
            name="timeline"
            value={values.timeline}
            onChange={(event) => update("timeline", event.target.value)}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {timelines.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-budget`}
          label="Estimated budget"
          error={errors.budget}
        >
          <select
            id={`${formId}-budget`}
            name="budget"
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      {message ? (
        <p
          role="status"
          className={cn(
            "rounded-lg border px-4 py-3 text-sm leading-relaxed",
            status === "success"
              ? "border-accent/40 bg-canvas text-ink"
              : "border-[#f87171]/40 bg-canvas text-[#fecaca]",
          )}
        >
          {message}
        </p>
      ) : null}

      <SubmitButton disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : contact.submitLabel}
      </SubmitButton>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-2 text-xs text-mute">Optional</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-sm text-[#fecaca]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
