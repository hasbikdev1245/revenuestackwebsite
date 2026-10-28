import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">03 — Sequence</p>
          <div className="editorial-body">
            <h2>How the install works.</h2>
            <div className="prose">
              <p>
                It starts with a Backend Breakdown Call. From there, the work runs in a fixed sequence. Every step ships with SOPs, so what we build stays built after we’re gone.
              </p>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
