import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Universities from "@/components/sections/Universities";
import WhyStudyInIndia from "@/components/sections/WhyStudyInIndia";
import Scholarships from "@/components/sections/Scholarships";
import ApplicationProcess from "@/components/sections/ApplicationProcess";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Universities />
        <WhyStudyInIndia />
        <Scholarships />
        <ApplicationProcess />
        <Services />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
