import { industries } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-panel">
        <div className="hero-copy hero-animate">
          <p className="hero-kicker">Backend growth partner</p>
          <h1>
            You’re already good at acquiring clients.{" "}
            <span>We make sure you keep, monetize, and scale them without you.</span>
          </h1>
          <p className="lede">
            You’ve cracked paid traffic. Your closers close. The backend is now the constraint.
          </p>
          <div className="hero-actions">
            <a className="btn btn-with-arrow" href="#fit">
              Apply to work with us
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img className="hero-shape" src="/hero-shape.png" alt="" />
      </div>
      <div className="hero-rail" aria-label="Industries">
        <ul>
          {industries.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
