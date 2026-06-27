import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in India",
  description:
    "Everything you need to know about studying in India — costs, culture, education system, and how to get started.",
};

export default function StudyInIndiaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Why <span className="text-[#0B3C91]">Study in India</span>?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              India is the world&apos;s fastest-growing education destination,
              offering globally recognized degrees at affordable costs.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { icon: "💰", title: "Affordable Education", desc: "Tuition fees 3-5x lower than UK, USA or Australia for equivalent quality degrees." },
                { icon: "🌍", title: "Globally Recognized", desc: "Indian degrees from accredited institutions are recognized worldwide by employers and governments." },
                { icon: "🏥", title: "Medical Excellence", desc: "India produces more doctors than any other country. Medical degrees are WHO recognized." },
                { icon: "🗣️", title: "English Medium", desc: "Most programs are taught entirely in English, making the transition smooth for African students." },
                { icon: "🛡️", title: "Safe & Welcoming", desc: "India has a large African student community and universities prioritize international student safety." },
                { icon: "🚀", title: "Career Opportunities", desc: "India's booming economy offers placement opportunities and pathways to global careers." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0B3C91] rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-black mb-4">
                Start Your India Journey Today
              </h2>
              <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                Join 10,000+ African students who chose India through Studipinia.
                Let us guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className="px-8 py-4 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-bold hover:bg-amber-300 transition-colors"
                >
                  Apply Now — It&apos;s Free
                </Link>
                <Link
                  href="/consultation"
                  className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  Book Consultation
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
