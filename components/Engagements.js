import { offers } from "@/lib/content";

export default function Engagements() {
  return (
    <section className="section" id="engagements">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">04 — Engagements</p>
          <div className="editorial-body">
            <h2>Two ways in.</h2>
          </div>
        </div>
        <div className="offer-grid wide-block">
          {offers.map((offer) => (
            <article key={offer.name} className={offer.light ? "offer is-light" : "offer"}>
              <p className="offer-kicker">{offer.kicker}</p>
              <h3>{offer.name}</h3>
              <p className="offer-price">
                {offer.price}
                <span>{offer.unit}</span>
              </p>
              <p className="offer-deck">{offer.deck}</p>
              <ol>
                {offer.points.map((point, index) => (
                  <li key={point}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {point}
                  </li>
                ))}
              </ol>
              <a className="btn" href="#apply">
                Apply to work with us
              </a>
            </article>
          ))}
        </div>
        <aside className="alignment">
          <p>Alignment</p>
          <p>
            On the DFY tier, our incentives are structurally aligned. We win when your collected backend revenue wins. Most consultants can’t say that. We can, because we priced it that way on purpose.
          </p>
        </aside>
      </div>
    </section>
  );
}
