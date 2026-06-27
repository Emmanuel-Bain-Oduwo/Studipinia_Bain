import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ApplyForm from "@/components/forms/ApplyForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Start your application to study in India. Our team will guide you through every step of the process.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-sm font-semibold mb-4">
                100% Free Application
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
                Begin Your Journey
              </h1>
              <p className="text-gray-600 text-lg">
                Fill in your details and our counsellor will contact you within
                24 hours to guide your next steps.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
              <ApplyForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
