import { briefRows } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner hero-animate">
        <p className="hero-kicker">Backend growth partner</p>
        <h1>
          You’re already good at acquiring clients.{" "}
          <span>We make sure you keep, monetize, and scale them without you.</span>
        </h1>
        <p className="lede">
          You’ve cracked paid traffic. Your closers close. The backend is now a constraint. Founder may be stuck in fulfillment, without a sustainable backend system to sustain the front end growth.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#apply">
            Apply to work with us
          </a>
        </div>
        <p className="trust-sentence">
          Trusted by 7 and 8 figure operators across info businesses and agencies in telehealth, real estate, AI marketing and more.
        </p>
        <figure className="brief" aria-label="The six backend gaps">
          <div className="brief-top">
            <span>Backend breakdown</span>
            <span>06 gaps</span>
          </div>
          <ol className="brief-rows">
            {briefRows.map((row, index) => (
              <li key={row}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{row}</span>
              </li>
            ))}
          </ol>
          <div className="brief-foot">
            <div>
              <span>Front end</span>
              <strong>Solved</strong>
            </div>
            <div>
              <span>Constraint</span>
              <strong>The backend</strong>
            </div>
          </div>
        </figure>
        <p className="status-line">
          <span className="status-dot" aria-hidden="true" />
          For 7 and 8 figure info and agency businesses
        </p>
      </div>
    </section>
  );
}
