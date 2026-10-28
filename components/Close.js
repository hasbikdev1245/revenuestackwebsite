import ApplyForm from "@/components/ApplyForm";

export default function Close() {
  return (
    <section className="section close" id="apply">
      <div className="wrap">
        <p className="eyebrow">08 — The call</p>
        <h2 className="close-title">
          You already paid to acquire every customer you’ll ever get. The only question is what each one becomes.
        </h2>
        <div className="close-grid">
          <div className="prose">
            <p>
              If the backend gaps on this page read like a list of your current problems, the next step is a Backend Breakdown Call. We’ll map your backend, name the bottleneck, and sequence the fix. You’ll get value on that call whether we end up working together or not.
            </p>
          </div>
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
