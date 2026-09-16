"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { business } from "@/lib/site-config";
import { CheckIcon, MailIcon, PhoneIcon } from "./icons";

type ContactMethod = "email" | "phone";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  details: string;
  contactMethod: ContactMethod;
  companyWebsite: string; // honeypot
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  details: "",
  contactMethod: "email",
  companyWebsite: "",
};

const fieldLabels: Partial<Record<keyof FormState, string>> = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  location: "Town or ZIP code",
  details: "What would you like cleaned?",
};

type SubmitStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status.kind === "error" && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [status]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validateField(key: keyof FormState, state: FormState): string | undefined {
    switch (key) {
      case "fullName":
        return state.fullName.trim().length < 2
          ? "Please enter your full name."
          : undefined;
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())
          ? "Please enter a valid email address."
          : undefined;
      case "location":
        return state.location.trim().length < 2
          ? "Please enter your town or ZIP code."
          : undefined;
      case "details":
        return state.details.trim().length < 5
          ? "Please tell us a bit about what you need cleaned."
          : undefined;
      case "phone":
        return state.contactMethod === "phone" && state.phone.trim().length < 7
          ? "Please add a phone number, or choose email instead."
          : undefined;
      default:
        return undefined;
    }
  }

  function validateClient(): Partial<Record<keyof FormState, string>> {
    const next: Partial<Record<keyof FormState, string>> = {};
    (["fullName", "email", "location", "details", "phone"] as const).forEach((key) => {
      const message = validateField(key, form);
      if (message) next[key] = message;
    });
    return next;
  }

  function handleBlur(key: keyof FormState) {
    const message = validateField(key, form);
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[key] = message;
      else delete next[key];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const clientErrors = validateClient();
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      setStatus({
        kind: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setStatus({ kind: "success" });
        setForm(initialState);
        setErrors({});
        return;
      }

      if (data?.reason === "invalid" && data.errors) {
        setErrors(data.errors);
        setStatus({
          kind: "error",
          message: "Please fix the highlighted fields and try again.",
        });
        return;
      }

      setStatus({
        kind: "error",
        message:
          data?.message ??
          `Something went wrong. Please call ${business.phone} or email ${business.email} directly.`,
      });
    } catch {
      setStatus({
        kind: "error",
        message: `We couldn't reach our server. Please call ${business.phone} or email ${business.email} directly.`,
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="flex h-full flex-col justify-center rounded-lg border border-haze-dark/60 bg-mist p-8 text-center sm:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-haze-light text-coral">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl text-charcoal">
          Thanks &mdash; your request is on its way.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-charcoal-soft">
          We&rsquo;ve received your information and will be in touch soon. If
          it&rsquo;s urgent, feel free to call {business.phone} in the
          meantime.
        </p>
      </div>
    );
  }

  const fieldClass = (hasError: boolean) =>
    `focus-ring w-full rounded border bg-mist px-4 py-3 text-base text-charcoal placeholder:text-charcoal-soft/50 ${
      hasError ? "border-red-700" : "border-haze-dark/70"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="h-full rounded-lg border border-haze-dark/60 bg-mist p-6 sm:p-10"
    >
      {status.kind === "error" && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="quote-form-error-title"
          className="focus-ring mb-6 rounded border border-red-700/40 bg-red-50 px-4 py-3 text-sm text-red-900"
        >
          <p id="quote-form-error-title">{status.message}</p>
          {Object.keys(errors).length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {Object.entries(errors).map(([key, message]) => (
                <li key={key}>
                  <a href={`#${key}`} className="underline hover:no-underline">
                    {fieldLabels[key as keyof FormState] ?? key}
                  </a>
                  : {message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Honeypot field: hidden from sighted users and screen reader users,
          left open for bots that fill every field. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={(e) => update("companyWebsite", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="block text-sm font-medium text-charcoal">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.fullName))}`}
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-sm text-red-800">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.email))}`}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-800">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
            Phone <span className="font-normal text-charcoal-soft">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.phone))}`}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-800">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="location" className="block text-sm font-medium text-charcoal">
            Town or ZIP code
          </label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="postal-code"
            required
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.location))}`}
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            onBlur={() => handleBlur("location")}
          />
          {errors.location && (
            <p id="location-error" className="mt-1.5 text-sm text-red-800">
              {errors.location}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className="block text-sm font-medium text-charcoal">
            What would you like cleaned?
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            required
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? "details-error" : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.details))}`}
            value={form.details}
            onChange={(e) => update("details", e.target.value)}
            onBlur={() => handleBlur("details")}
          />
          {errors.details && (
            <p id="details-error" className="mt-1.5 text-sm text-red-800">
              {errors.details}
            </p>
          )}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="block text-sm font-medium text-charcoal">
            Preferred contact method
          </legend>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <label className="flex items-center gap-2 text-base text-charcoal">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={form.contactMethod === "email"}
                onChange={() => update("contactMethod", "email")}
                className="focus-ring h-4 w-4 accent-coral"
              />
              <MailIcon className="h-4 w-4 text-slate" />
              Email
            </label>
            <label className="flex items-center gap-2 text-base text-charcoal">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={form.contactMethod === "phone"}
                onChange={() => update("contactMethod", "phone")}
                className="focus-ring h-4 w-4 accent-coral"
              />
              <PhoneIcon className="h-4 w-4 text-slate" />
              Phone
            </label>
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="focus-ring mt-8 inline-flex w-full items-center justify-center rounded bg-coral px-7 py-3.5 text-base font-medium text-mist transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_10px_24px_rgba(166,69,38,0.3)] active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70 disabled:shadow-none sm:w-auto"
      >
        {status.kind === "submitting" ? "Sending…" : "Request My Free Quote"}
      </button>
    </form>
  );
}
