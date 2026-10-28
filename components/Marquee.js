import { industries } from "@/lib/content";

export default function Marquee() {
  return (
    <section className="industries" aria-label="Industries">
      <div className="marquee-viewport">
        <div className="marquee-track">
          <IndustrySet />
          <IndustrySet hidden />
        </div>
      </div>
    </section>
  );
}

function IndustrySet({ hidden = false }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      <ul>
        {industries.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul aria-hidden="true">
        {[...industries, ...industries].map((name, index) => (
          <li key={`${name}-${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
