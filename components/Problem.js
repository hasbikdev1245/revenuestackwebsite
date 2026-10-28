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
                Getting customers profitably at scale is the hardest problem in business. You solved it. Your ads work, your funnel works, your sales team closes. Most operators never get there. You did.
              </p>
              <p>
                But here’s what nobody tells you about cracking the front end: it exposes the backend. Every customer you acquire flows straight into a part of the business that was never intentionally designed, never staffed, and never systemized.
              </p>
              <p>And at 7 and 8 figures, that gap stops being an inconvenience and starts being the ceiling.</p>
            </div>
            <p className="interjection">Sound familiar?</p>
            <ol className="ledger">
              {gaps.map((gap, index) => (
                <li key={gap.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{gap.title}</h3>
                    <p>{gap.body}</p>
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
