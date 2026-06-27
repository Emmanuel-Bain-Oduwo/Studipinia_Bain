import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Find safe and affordable accommodation as an international student in India. We help you settle in from day one.",
};

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Accommodation <span className="text-[#0B3C91]">Support</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We help you find safe, comfortable, and affordable accommodation
              before you even arrive in India.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "🏢", type: "University Hostel", price: "$80–$150/month", features: ["On-campus security", "Meals included option", "Fellow students nearby", "Affordable"] },
                { icon: "🏠", type: "Private Apartment", price: "$150–$300/month", features: ["More independence", "Share with flatmates", "Off-campus freedom", "Various locations"] },
                { icon: "🏡", type: "Paying Guest (PG)", price: "$100–$200/month", features: ["Family environment", "Meals often included", "Near campus", "Utilities included"] },
              ].map((opt) => (
                <div key={opt.type} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{opt.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{opt.type}</h3>
                  <p className="text-[#0B3C91] font-bold mb-4">{opt.price}</p>
                  <ul className="space-y-2">
                    {opt.features.map((f) => (
                      <li key={f} className="text-gray-500 text-sm flex items-center gap-2">
                        <span className="text-[#16A34A]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-[#0B3C91] rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-black mb-4">Airport Pickup Included</h2>
              <p className="text-blue-200 mb-6 max-w-xl mx-auto">
                We coordinate airport pickup with a trusted driver and ensure
                you reach your accommodation safely on arrival day.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-bold hover:bg-amber-300 transition-colors"
              >
                Arrange Accommodation <ArrowRight className="w-4 h-4" />
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
