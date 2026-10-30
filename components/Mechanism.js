import { installs } from "@/lib/content";

const lines = [
  "A real team runs fulfillment instead of you.",
  "A ladder from the first purchase to the next, so LTV compounds.",
  "Referrals, reviews, and affiliates that turn results into distribution.",
  "The client moves from closer to client success without dropping off.",
  "Dashboards for what’s collected, owed, refunded, and where each client stands.",
  "Every backend process written down and tied to the sales team.",
];

export default function Mechanism() {
  return (
    <section className="section" id="install">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">02 — The install</p>
          <div className="editorial-body">
            <h2>We install the backend your front end deserves.</h2>
            <div className="prose">
              <p>We build the department, the systems, and the data inside your business, then hand you the keys.</p>
            </div>
            <ol className="tile-grid">
              {installs.map((item, index) => (
                <li key={item.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{lines[index]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
