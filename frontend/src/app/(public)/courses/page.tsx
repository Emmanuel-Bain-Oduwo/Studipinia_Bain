import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore hundreds of undergraduate and postgraduate courses at top Indian universities.",
};

const COURSE_CATEGORIES = [
  {
    category: "Medicine & Health",
    icon: "🏥",
    color: "from-red-50 to-rose-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
    courses: [
      { name: "MBBS", duration: "5.5 years", fee: "$4,000 – $6,000/yr" },
      { name: "BDS (Dentistry)", duration: "5 years", fee: "$3,500 – $5,500/yr" },
      { name: "B.Sc Nursing", duration: "4 years", fee: "$2,000 – $3,500/yr" },
      { name: "B.Pharm", duration: "4 years", fee: "$2,000 – $3,500/yr" },
      { name: "M.Pharm", duration: "2 years", fee: "$2,500 – $4,000/yr" },
      { name: "BAMS (Ayurveda)", duration: "5.5 years", fee: "$2,500 – $4,000/yr" },
    ],
  },
  {
    category: "Engineering & Technology",
    icon: "⚙️",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    courses: [
      { name: "B.Tech Computer Science", duration: "4 years", fee: "$2,500 – $4,000/yr" },
      { name: "B.Tech Mechanical", duration: "4 years", fee: "$2,500 – $3,800/yr" },
      { name: "B.Tech Civil", duration: "4 years", fee: "$2,000 – $3,500/yr" },
      { name: "B.Tech Electronics", duration: "4 years", fee: "$2,500 – $4,000/yr" },
      { name: "M.Tech", duration: "2 years", fee: "$2,500 – $4,500/yr" },
      { name: "BCA / MCA", duration: "3 / 2 years", fee: "$1,500 – $2,800/yr" },
    ],
  },
  {
    category: "Business & Management",
    icon: "💼",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    courses: [
      { name: "BBA", duration: "3 years", fee: "$1,800 – $3,000/yr" },
      { name: "MBA", duration: "2 years", fee: "$3,000 – $5,500/yr" },
      { name: "B.Com", duration: "3 years", fee: "$1,500 – $2,500/yr" },
      { name: "M.Com", duration: "2 years", fee: "$1,500 – $2,500/yr" },
    ],
  },
  {
    category: "Law & Social Sciences",
    icon: "⚖️",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
    courses: [
      { name: "LLB", duration: "3 years", fee: "$2,000 – $3,500/yr" },
      { name: "BA LLB", duration: "5 years", fee: "$2,000 – $3,500/yr" },
      { name: "BA / MA", duration: "3 / 2 years", fee: "$1,200 – $2,200/yr" },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Explore <span className="text-[#0B3C91]">Courses</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From medicine to engineering, business to law — find your perfect
              course at a top Indian university.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {COURSE_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl ${cat.iconBg} flex items-center justify-center text-2xl`}
                  >
                    {cat.icon}
                  </div>
                  <h2 className="text-xl font-black text-[#111827]">
                    {cat.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.courses.map((course) => (
                    <div
                      key={course.name}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} hover:shadow-md transition-shadow group`}
                    >
                      <h3 className="font-bold text-gray-900 mb-3">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                          {course.fee}
                        </span>
                      </div>
                      <Link
                        href="/apply"
                        className="inline-flex items-center gap-1 mt-3 text-[#0B3C91] text-sm font-semibold"
                      >
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
