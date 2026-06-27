import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CheckCircle, Globe, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Studipinia's mission to help African students access world-class higher education in India.",
};

const VALUES = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Student First",
    desc: "Every decision we make centers on the student's success and wellbeing.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Transparency",
    desc: "No hidden fees, no misleading promises. Pure transparency at every step.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Vision",
    desc: "Building bridges between African talent and world-class Indian institutions.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    desc: "We only partner with accredited, high-quality institutions that deliver results.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const TEAM = [
  { name: "David Kamau", role: "CEO & Co-founder", country: "🇰🇪 Kenya", emoji: "👨‍💼" },
  { name: "Priya Sharma", role: "Head of Admissions", country: "🇮🇳 India", emoji: "👩‍💼" },
  { name: "Amaka Okafor", role: "Visa Affairs Director", country: "🇳🇬 Nigeria", emoji: "👩‍⚖️" },
  { name: "Rajesh Kumar", role: "University Relations", country: "🇮🇳 India", emoji: "👨‍🎓" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-sm font-semibold mb-4">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-6">
              We&apos;re on a Mission to Open{" "}
              <span className="text-[#0B3C91]">Global Doors</span> for African
              Students
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Studipinia was born from a simple belief: every African student
              deserves access to world-class education. We built the platform
              we wish had existed when we were navigating the process ourselves.
            </p>
          </div>
        </section>

        {/* Mission & Stats */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-[#111827] mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We help students, beginning with African countries, access
                  quality higher education in India through a transparent,
                  technology-driven admissions process. Our counsellors are
                  experienced professionals who have walked this path themselves
                  — many studied in India and know exactly what you&apos;re going
                  through.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the moment you reach out to us to the day you land in
                  India and beyond — Studipinia is your partner. We celebrate
                  every acceptance letter, every approved visa, and every
                  graduation with you.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10,000+", label: "Students Guided" },
                  { value: "50+", label: "Partner Universities" },
                  { value: "95%", label: "Visa Success Rate" },
                  { value: "15+", label: "Countries Served" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#f8faff] rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-black text-[#0B3C91] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#111827] mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${v.bg} ${v.color} flex items-center justify-center mb-4`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#111827] mb-4">
              Meet the Team
            </h2>
            <p className="text-center text-gray-500 mb-12">
              Passionate experts dedicated to your success
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-4xl mx-auto mb-4">
                    {member.emoji}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {member.name}
                  </h3>
                  <p className="text-[#0B3C91] text-xs font-medium mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{member.country}</p>
                </div>
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
