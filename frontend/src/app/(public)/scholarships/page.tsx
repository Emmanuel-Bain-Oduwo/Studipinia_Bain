import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Scholarships from "@/components/sections/Scholarships";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Discover scholarships available for African students studying in India. Reduce your tuition costs significantly.",
};

const ALL_SCHOLARSHIPS = [
  {
    name: "Parul University International Excellence Award",
    university: "Parul University",
    amount: "Up to 50%",
    type: "Merit",
    eligibility: "80%+ in High School",
    icon: "🏆",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    name: "Global Citizen Scholarship",
    university: "Sharda University",
    amount: "Up to 40%",
    type: "Merit",
    eligibility: "75%+ in High School",
    icon: "🌍",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "African Bright Minds Grant",
    university: "Lovely Professional University",
    amount: "Up to 35%",
    type: "Need-Based",
    eligibility: "Financial need + 70%+ grades",
    icon: "✨",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    name: "STEM Future Leaders Award",
    university: "Chandigarh University",
    amount: "Up to 45%",
    type: "Merit",
    eligibility: "85%+ in Math & Science",
    icon: "🔬",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Medical Excellence Scholarship",
    university: "Multiple Universities",
    amount: "Up to 30%",
    type: "Merit",
    eligibility: "Biology & Chemistry distinction",
    icon: "🏥",
    badge: "bg-red-100 text-red-700",
  },
  {
    name: "Women in STEM Scholarship",
    university: "Amity University",
    amount: "Up to 25%",
    type: "Special",
    eligibility: "Female students in tech/science",
    icon: "👩‍🔬",
    badge: "bg-pink-100 text-pink-700",
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FBBF24]/20 text-amber-700 text-sm font-semibold mb-4">
              🎓 Education Doesn&apos;t Have to Break the Bank
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Scholarships for{" "}
              <span className="text-[#0B3C91]">African Students</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our partner universities offer generous scholarships. We&apos;ll help
              you find and apply for every one you qualify for.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_SCHOLARSHIPS.map((s) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{s.icon}</div>
                    <div className="text-right">
                      <div className="font-black text-2xl text-[#0B3C91]">
                        {s.amount}
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.badge}`}>
                        {s.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                  <p className="text-gray-400 text-xs mb-3">{s.university}</p>
                  <div className="text-gray-600 text-sm bg-gray-50 rounded-xl px-3 py-2 mb-4">
                    📋 Eligibility: {s.eligibility}
                  </div>
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-1.5 text-[#0B3C91] text-sm font-semibold group-hover:gap-2.5 transition-all"
                  >
                    Apply for this Scholarship <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Scholarships />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
