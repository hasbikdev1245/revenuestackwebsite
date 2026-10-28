import { installs } from "@/lib/content";

export default function Mechanism() {
  return (
    <section className="section" id="install">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">02 — The install</p>
          <div className="editorial-body">
            <h2>We install the backend your front end deserves.</h2>
            <div className="prose">
              <p>
                We are a backend growth partner. Not consultants who audit and disappear. We build the department, the systems, and the data layer inside your business, then hand you the keys.
              </p>
              <p>Here’s what gets installed:</p>
            </div>
            <ol className="ledger">
              {installs.map((item, index) => (
                <li key={item.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
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
