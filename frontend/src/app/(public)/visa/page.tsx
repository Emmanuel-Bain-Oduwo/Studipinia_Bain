import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Assistance",
  description:
    "Complete India student visa guidance with a 95% success rate. Our visa experts handle everything.",
};

const STEPS = [
  { step: "1", title: "Receive Admission Letter", desc: "You get your official admission letter from the university." },
  { step: "2", title: "Document Preparation", desc: "We provide a complete checklist and verify all your documents." },
  { step: "3", title: "Visa Application", desc: "Our team submits the visa application and monitors its status." },
  { step: "4", title: "Embassy Interview Prep", desc: "We coach you on what to expect at the embassy interview." },
  { step: "5", title: "Visa Approved", desc: "Receive your student visa and prepare for departure!" },
];

const DOCUMENTS = [
  "Valid Passport (6+ months validity)",
  "Passport-size photographs",
  "Admission letter from university",
  "Academic transcripts",
  "Bank statement / financial proof",
  "Medical certificate",
  "Police clearance certificate",
  "Proof of accommodation",
];

export default function VisaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-sm font-semibold mb-4">
                🛂 95% Visa Success Rate
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
                Visa Assistance{" "}
                <span className="text-[#0B3C91]">From A to Z</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Getting a student visa for India can seem complex, but with
                Studipinia by your side, it&apos;s straightforward. Our experienced
                visa counsellors have helped thousands of students navigate the
                process successfully.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors group"
              >
                Get Free Visa Guidance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#111827] mb-8 text-center">
              Our Visa Process
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {STEPS.map((s, i) => (
                <div
                  key={s.step}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8faff] border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B3C91] text-white flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-black text-[#111827] mb-6">
                  Required Documents
                </h2>
                <ul className="space-y-3">
                  {DOCUMENTS.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0B3C91] rounded-2xl p-8 text-white">
                <div className="text-5xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">95% Visa Success Rate</h3>
                <p className="text-blue-200 text-sm mb-6">
                  Our visa counsellors have deep expertise in India student visa
                  requirements for African passport holders. We know exactly
                  what embassies look for.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { v: "3-4 weeks", l: "Average Processing" },
                    { v: "10,000+", l: "Visas Assisted" },
                    { v: "95%", l: "Approval Rate" },
                    { v: "Free", l: "Visa Guidance" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="font-black text-lg">{s.v}</div>
                      <div className="text-blue-300 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-bold hover:bg-amber-300 transition-colors"
                >
                  Start Visa Process <ArrowRight className="w-4 h-4" />
                </Link>
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
