import { records } from "@/lib/content";

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">03 — The record</p>
          <div className="editorial-body">
            <h2>Who’s behind this.</h2>
            <div className="prose">
              <p>Built inside 7 and 8 figure businesses with the same shape: cracked front end, missing backend.</p>
            </div>
            <dl className="stats">
              <div className="stat">
                <dt>Eight-figure clients</dt>
                <dd>03</dd>
              </div>
              <div className="stat">
                <dt>Per month, on the 7-figure book</dt>
                <dd>$200–400k</dd>
              </div>
            </dl>
            <ol className="dossier">
              {records.map((record, index) => (
                <li key={record.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{record.name}</span>
                  <span>{record.scale}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
