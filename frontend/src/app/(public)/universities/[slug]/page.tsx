import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle, Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: name,
    description: `Learn about ${name} and explore available courses, fees, and scholarships for international students.`,
  };
}

const COURSES = [
  { name: "MBBS", duration: "5.5 years", fee: "$4,500/year", icon: "🏥" },
  { name: "B.Tech CSE", duration: "4 years", fee: "$2,800/year", icon: "💻" },
  { name: "BBA", duration: "3 years", fee: "$2,200/year", icon: "💼" },
  { name: "B.Pharm", duration: "4 years", fee: "$2,500/year", icon: "💊" },
];

export default async function UniversityDetailPage({ params }: Props) {
  const { slug } = await params;
  const name = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#0B3C91]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/universities" className="hover:text-[#0B3C91]">Universities</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{name}</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center text-4xl font-black text-[#0B3C91] border border-gray-100 flex-shrink-0">
                {name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#FBBF24]/20 text-amber-700 text-xs font-bold">
                    ⭐ Partner University
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    UGC Approved
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                    NAAC Accredited
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-[#111827] mb-2">
                  {name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> India
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" /> 4.8 (1,200+ reviews)
                  </span>
                </div>
                <p className="text-gray-600 max-w-2xl">
                  {name} is one of India&apos;s premier institutions offering
                  world-class education with state-of-the-art facilities,
                  globally recognized degrees, and a vibrant international
                  student community.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  href="/apply"
                  className="px-6 py-3 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors text-center"
                >
                  Apply Now
                </Link>
                <Link
                  href="/consultation"
                  className="px-6 py-3 rounded-xl border-2 border-[#0B3C91] text-[#0B3C91] font-semibold hover:bg-blue-50 transition-colors text-center text-sm"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#111827] mb-6">
              Available Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COURSES.map((course) => (
                <div
                  key={course.name}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-[#0B3C91]/20 hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3">{course.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{course.name}</h3>
                  <p className="text-gray-400 text-xs mb-2">
                    Duration: {course.duration}
                  </p>
                  <p className="text-[#0B3C91] font-bold text-sm">{course.fee}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This University */}
        <section className="py-16 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-[#111827] mb-6">
                  Why Choose {name}?
                </h2>
                <ul className="space-y-3">
                  {[
                    "UGC recognized and NAAC A+ accredited",
                    "Modern campus with world-class laboratories",
                    "International student support cell",
                    "Affordable tuition with scholarship opportunities",
                    "Strong industry connections and placement record",
                    "MCI approved medical programs (where applicable)",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0B3C91] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-blue-200 text-sm mb-6">
                  Our counsellors will guide you through the entire application
                  process for {name} — from document preparation to visa.
                </p>
                <Link
                  href="/apply"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-bold hover:bg-amber-300 transition-colors w-fit"
                >
                  Start Application <ArrowRight className="w-4 h-4" />
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
