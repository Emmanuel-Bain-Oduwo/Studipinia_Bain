import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { PARTNER_UNIVERSITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Explore top Indian universities partnered with Studipinia. Find the perfect university for your study abroad journey.",
};

const ALL_UNIVERSITIES = [
  ...PARTNER_UNIVERSITIES,
  {
    id: "dav",
    name: "DAV University",
    location: "Jalandhar, India",
    logo: "",
    slug: "dav-university",
    featured: false,
  },
  {
    id: "chitkara",
    name: "Chitkara University",
    location: "Punjab, India",
    logo: "",
    slug: "chitkara-university",
    featured: false,
  },
  {
    id: "galgotias",
    name: "Galgotias University",
    location: "Greater Noida, India",
    logo: "",
    slug: "galgotias-university",
    featured: false,
  },
  {
    id: "ku",
    name: "Kurukshetra University",
    location: "Kurukshetra, India",
    logo: "",
    slug: "kurukshetra-university",
    featured: false,
  },
];

export default function UniversitiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Our Partner <span className="text-[#0B3C91]">Universities</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Choose from India's finest accredited universities. All partners
              are carefully selected for quality, affordability, and student
              support.
            </p>
            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search universities..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm text-sm focus:outline-none focus:border-[#0B3C91]"
              />
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ALL_UNIVERSITIES.map((uni) => (
                <Link
                  key={uni.id}
                  href={`/universities/${uni.slug}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-[#0B3C91]/20 hover:shadow-lg transition-all duration-200 card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-2xl font-black text-[#0B3C91] mb-4 shadow-sm">
                    {uni.name.charAt(0)}
                  </div>
                  {uni.featured && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#FBBF24]/20 text-amber-700 text-[10px] font-bold mb-2 w-fit">
                      ⭐ Featured Partner
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0B3C91] transition-colors mb-2">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    {uni.location}
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-[#0B3C91] text-sm font-semibold">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
