import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Quote from "@/components/Quote";
import Mechanism from "@/components/Mechanism";
import Process from "@/components/Process";
import Engagements from "@/components/Engagements";
import Proof from "@/components/Proof";
import Fit from "@/components/Fit";
import Faq from "@/components/Faq";
import Close from "@/components/Close";
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
        <Quote lead={quotes[1].lead} rest={quotes[1].rest} />
        <Process />
        <Engagements />
        <Proof />
        <Fit />
        <Faq />
        <Close />
      </main>
      <Footer />
    </>
  );
}
