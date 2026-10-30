import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Quote from "@/components/Quote";
import Mechanism from "@/components/Mechanism";
import Proof from "@/components/Proof";
import Fit from "@/components/Fit";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { quotes } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Problem />
        <Quote lead={quotes[0].lead} rest={quotes[0].rest} />
        <Mechanism />
        <Proof />
        <Fit />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
