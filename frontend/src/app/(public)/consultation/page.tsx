import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description:
    "Book a free one-on-one counselling session with our expert advisors and start your study abroad journey.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-sm font-semibold mb-4">
                  📅 100% Free Consultation
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
                  Talk to a{" "}
                  <span className="text-[#0B3C91]">Real Expert</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our experienced counsellors have helped thousands of African
                  students study in India. Book your free session and get
                  personalized guidance for your situation.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "🎯", title: "Personalized Course Matching", desc: "We help identify the best courses for your profile and goals." },
                    { icon: "🏛️", title: "University Shortlisting", desc: "We recommend universities based on your budget and preferences." },
                    { icon: "📋", title: "Document Checklist", desc: "You'll leave with a clear list of documents to prepare." },
                    { icon: "🛂", title: "Visa Strategy", desc: "We outline exactly how we'll handle your visa process." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#111827] mb-6">
                  Book Your Free Session
                </h2>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
