"use client";

import { useState } from "react";
import { Choice } from "@/components/ApplyForm";
import { careerRoles, site } from "@/lib/content";

const EMPTY = {
  name: "",
  email: "",
  role: "",
  note: "",
  link: "",
  company_website_confirm: "",
};

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Add a valid email.";
  }
  if (!fields.role) errors.role = "Choose a role.";
  return errors;
}

function compose(fields) {
  return [
    "Career application",
    "",
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Role: ${fields.role}`,
    `Link: ${fields.link.trim() || "—"}`,
    "",
    fields.note.trim() || "No additional note.",
  ].join("\n");
}

export default function CareerForm() {
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
    const subject = `Career application — ${fields.name.trim()}`;
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
        <p className="form-kicker">Application</p>
        <h3>{draft === "hidden" ? "Application noted." : "Send the draft to apply."}</h3>
        {draft === "hidden" ? null : (
          <>
            <p className="form-dek">
              Your email app should open with this application. Send it to apply. If a draft didn’t open, copy the text below.
            </p>
            <pre>{draft}</pre>
            <button className="btn btn-full" type="button" onClick={copy}>
              {copied ? "Copied" : "Copy application"}
            </button>
            <button className="text-button" type="button" onClick={() => { setDraft(""); setCopied(false); }}>
              Edit application
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <p className="form-kicker">Apply for a role</p>
      <h3>Tell us where you fit.</h3>
      <p className="form-dek">
        Client success, setting, and closing. Send a short application and we’ll reply if there’s a fit.
      </p>
      <div className="hp" aria-hidden="true">
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
        <div className="field" data-error={errors.name ? "true" : "false"}>
          <label htmlFor="career-name">Name</label>
          <input
            id="career-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "career-name-error" : undefined}
          />
          {errors.name ? <p className="form-error" id="career-name-error">{errors.name}</p> : null}
        </div>
        <div className="field" data-error={errors.email ? "true" : "false"}>
          <label htmlFor="career-email">Email</label>
          <input
            id="career-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "career-email-error" : undefined}
          />
          {errors.email ? <p className="form-error" id="career-email-error">{errors.email}</p> : null}
        </div>
        <div className="field field-wide" data-error={errors.role ? "true" : "false"}>
          <label htmlFor="career-role">Role</label>
          <Choice
            id="career-role"
            name="role"
            value={fields.role}
            options={careerRoles}
            invalid={Boolean(errors.role)}
            describedBy={errors.role ? "career-role-error" : undefined}
            onChange={update}
          />
          {errors.role ? <p className="form-error" id="career-role-error">{errors.role}</p> : null}
        </div>
        <div className="field field-wide">
          <label htmlFor="career-link">Link to your work</label>
          <input
            id="career-link"
            name="link"
            autoComplete="url"
            placeholder="Optional"
            value={fields.link}
            onChange={update}
          />
        </div>
        <div className="field field-wide">
          <label htmlFor="career-note">Why this role</label>
          <textarea
            id="career-note"
            name="note"
            rows={4}
            maxLength={600}
            value={fields.note}
            onChange={update}
          />
        </div>
      </div>
      <button className="btn btn-full" type="submit">
        Submit application
      </button>
    </form>
  );
}
