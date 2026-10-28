import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Proof from "@/components/Proof";
import CareerForm from "@/components/CareerForm";

export const metadata = {
  title: "Careers — RevenueStack",
  description:
    "Join RevenueStack. We install the backend for 7 and 8 figure info and agency businesses that already cracked the front end.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main" className="careers">
        <section className="careers-hero">
          <p className="hero-kicker">We’re hiring</p>
          <h1>Help us build the team behind the backend.</h1>
          <p className="lede">
            Join the people installing client success, setting, and closing inside 7 and 8 figure info and agency businesses.
          </p>
          <div className="vsl" aria-label="Video coming soon">
            <span>Video coming soon</span>
          </div>
          <div className="careers-form">
            <CareerForm />
          </div>
        </section>
        <section className="section careers-about">
          <div className="wrap">
            <div className="editorial">
              <p className="eyebrow">The business</p>
              <div className="editorial-body">
                <h2>We install the backend the front end already earned.</h2>
                <div className="prose">
                  <p>
                    RevenueStack is a backend growth partner for info and agency businesses that already cracked paid traffic and closing. The constraint has moved to what happens after the sale.
                  </p>
                  <p>
                    We build the client success department, the product ladder, the handoff from sales, the data, and the SOPs inside the business. Then we hand over the keys. The work is done with operators at 7 and 8 figures, not with people still trying to get the front end to work.
                  </p>
                  <p>
                    The roles on this page sit inside that install: client success, setting, and closing. You are not fixing marketing. The front end is already solved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Proof />
      </main>
      <Footer />
    </>
  );
}
