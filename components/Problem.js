import { gaps } from "@/lib/content";

export default function Problem() {
  return (
    <section className="section" id="setup">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">01 — The gap</p>
          <div className="editorial-body">
            <h2>You solved the hardest problem in business. The one underneath it is eating your margin.</h2>
            <div className="prose">
              <p>
                Your ads work, your funnel works, your sales team closes. At 7 and 8 figures, the backend is the ceiling.
              </p>
            </div>
            <ol className="tile-grid">
              {gaps.map((gap, index) => (
                <li key={gap.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{gap.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
