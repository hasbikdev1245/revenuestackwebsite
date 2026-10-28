import { records } from "@/lib/content";

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">05 — The record</p>
          <div className="editorial-body">
            <h2>Who’s behind this.</h2>
            <div className="prose">
              <p>This isn’t theory borrowed from a course. It’s built from inside 7 and 8 figure businesses.</p>
              <p>
                Three 8 figure clients across a real estate coaching offer, an agency coaching offer, and a health business opportunity plus marketing offer. Multiple 7 figure agencies and info businesses in the $200K to $400K per month range. Every one of them had the same shape: cracked front end, missing backend.
              </p>
              <p>
                The playbook that came out of those installs is what gets deployed in your business, sequenced for your specific bottleneck instead of copied blindly.
              </p>
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
            <p className="dossier-note">
              Plus multiple 7 figure agencies and info businesses in the $200K to $400K per month range.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
