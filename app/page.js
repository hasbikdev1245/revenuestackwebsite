import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Mechanism from "@/components/Mechanism";
import Proof from "@/components/Proof";
import Fit from "@/components/Fit";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Mechanism />
        <Proof />
        <Fit />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
