import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about studying in India, visa requirements, scholarships, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Frequently Asked <span className="text-[#0B3C91]">Questions</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Can&apos;t find your answer? Our team is always happy to help.
            </p>
          </div>
        </section>
        <FAQ />
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our expert counsellors are available to answer any question you
              have about studying in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consultation"
                className="px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border-2 border-[#0B3C91] text-[#0B3C91] font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
