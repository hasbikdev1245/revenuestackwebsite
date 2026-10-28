export default function Quote({ lead, rest }) {
  return (
    <section className="quote-block" aria-label="Statement">
      <blockquote>
        <p>{lead}</p>
        <p className="quote-rest">{rest}</p>
      </blockquote>
    </section>
  );
}
