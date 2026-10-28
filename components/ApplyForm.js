"use client";

import { useEffect, useRef, useState } from "react";
import { constraints, models, revenues, site } from "@/lib/content";

const EMPTY = {
  name: "",
  email: "",
  business: "",
  website: "",
  model: "",
  revenue: "",
  constraint: "",
  context: "",
  company_website_confirm: "",
};

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Add a valid email.";
  }
  if (!fields.business.trim()) errors.business = "Add the business name.";
  if (!fields.model) errors.model = "Choose what you run.";
  if (!fields.revenue) errors.revenue = "Choose a revenue band.";
  if (!fields.constraint) errors.constraint = "Choose the constraint.";
  return errors;
}

function compose(fields) {
  return [
    "Backend Breakdown Call",
    "",
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Business: ${fields.business.trim()}`,
    `Website: ${fields.website.trim() || "—"}`,
    `Model: ${fields.model}`,
    `Revenue: ${fields.revenue}`,
    `Constraint: ${fields.constraint}`,
    "",
    fields.context.trim() || "No additional context.",
  ].join("\n");
}

export default function ApplyForm() {
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    if (fields.company_website_confirm) {
      setDraft("hidden");
      return;
    }
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const text = compose(fields);
    setDraft(text);
    setCopied(false);
    const subject = `Backend Breakdown Call — ${fields.name.trim()}`;
    window.location.href = `mailto:${site.inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (draft) {
    return (
      <div className="form-card form-success">
        <p className="form-kicker">Backend Breakdown Call</p>
        <h3>{draft === "hidden" ? "Application noted." : "Send the draft to book the call."}</h3>
        {draft === "hidden" ? null : (
          <>
            <p className="form-dek">
              Your email app should open with this application. Send it to request times for a Backend Breakdown Call. If a draft didn’t open, copy the text below.
            </p>
            <pre>{draft}</pre>
            <button className="btn btn-full" type="button" onClick={copy}>
              {copied ? "Copied" : "Copy application"}
            </button>
            <button
              className="text-button"
              type="button"
              onClick={() => {
                setDraft("");
                setCopied(false);
              }}
            >
              Edit application
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <p className="form-kicker">Backend Breakdown Call</p>
      <h3>Apply to work with us</h3>
      <p className="form-dek">
        Tell us where the backend is constraining the front end. You’ll get value on the call whether we work together or not.
      </p>
      <div className="hp" aria-hidden="true" inert>
        <label>
          Company website confirm
          <input
            name="company_website_confirm"
            tabIndex={-1}
            autoComplete="off"
            value={fields.company_website_confirm}
            onChange={update}
          />
        </label>
      </div>
      <div className="form-grid">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field id="business" label="Business" error={errors.business}>
          <input
            id="business"
            name="business"
            autoComplete="organization"
            value={fields.business}
            onChange={update}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "business-error" : undefined}
          />
        </Field>
        <Field id="website" label="Website" error={errors.website}>
          <input
            id="website"
            name="website"
            autoComplete="url"
            placeholder="Optional"
            value={fields.website}
            onChange={update}
          />
        </Field>
        <Field id="model" label="What you run" error={errors.model}>
          <Choice
            id="model"
            name="model"
            value={fields.model}
            options={models}
            invalid={Boolean(errors.model)}
            describedBy={errors.model ? "model-error" : undefined}
            onChange={update}
          />
        </Field>
        <Field id="revenue" label="Revenue" error={errors.revenue}>
          <Choice
            id="revenue"
            name="revenue"
            value={fields.revenue}
            options={revenues}
            invalid={Boolean(errors.revenue)}
            describedBy={errors.revenue ? "revenue-error" : undefined}
            onChange={update}
          />
        </Field>
        <Field id="constraint" label="The constraint" error={errors.constraint} wide>
          <Choice
            id="constraint"
            name="constraint"
            value={fields.constraint}
            options={constraints}
            invalid={Boolean(errors.constraint)}
            describedBy={errors.constraint ? "constraint-error" : undefined}
            onChange={update}
          />
        </Field>
        <Field id="context" label="What the backend looks like today" wide>
          <textarea
            id="context"
            name="context"
            rows={4}
            maxLength={600}
            value={fields.context}
            onChange={update}
          />
        </Field>
      </div>
      <button className="btn btn-full" type="submit">
        Book a Backend Breakdown Call
      </button>
    </form>
  );
}

function Choice({ id, name, value, options, invalid, describedBy, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = `${id}-list`;

  useEffect(() => {
    if (!open) return undefined;
    function close(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next) {
    onChange({ target: { name, value: next } });
    setOpen(false);
  }

  return (
    <div className="choice" ref={rootRef}>
      <button
        id={id}
        type="button"
        className={value ? "choice-button" : "choice-button is-empty"}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{value || "Select"}</span>
        <i aria-hidden="true" />
      </button>
      {open ? (
        <ul className="choice-menu" id={listId} role="listbox">
          {options.map((option) => (
            <li key={option} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Field({ id, label, error, wide, children }) {
  return (
    <div className={wide ? "field field-wide has-error-slot" : "field"} data-error={error ? "true" : "false"}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className="form-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
