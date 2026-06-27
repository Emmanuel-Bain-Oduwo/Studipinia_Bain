import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Student Life in India",
  description: "What to expect as an African student living and studying in India — culture, food, accommodation, and more.",
};

export default function StudentLifePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Life as a <span className="text-[#0B3C91]">Student in India</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A vibrant, diverse experience awaits. Here&apos;s what to expect when you arrive.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🍛", title: "Food & Dining", desc: "India offers incredible diversity in food. Campus canteens serve affordable meals, and cities have restaurants serving cuisines from around the world, including African restaurants in major cities." },
                { icon: "🏠", title: "Accommodation", desc: "Most universities offer affordable on-campus hostels with all basic amenities. Private apartments and PGs (Paying Guest accommodations) are also widely available near campuses." },
                { icon: "🚌", title: "Transportation", desc: "India has an extensive public transport network. Auto-rickshaws, metro systems in major cities, and Ola/Uber make getting around easy and affordable." },
                { icon: "🌡️", title: "Climate", desc: "India has diverse climates. Most university cities have warm weather year-round. Summers (April–June) can be hot. Winters (November–February) are mild and pleasant." },
                { icon: "🛡️", title: "Safety", desc: "Indian university campuses are generally safe. Most universities have security personnel, CCTV, and dedicated international student support cells." },
                { icon: "🎉", title: "Culture & Festivals", desc: "Experience vibrant festivals like Diwali, Holi, and Eid alongside Indian students. The diversity of India makes it a welcoming environment for international students." },
                { icon: "💊", title: "Healthcare", desc: "University campuses have medical centers. India's healthcare is affordable by international standards. Comprehensive health insurance is advisable." },
                { icon: "💱", title: "Cost of Living", desc: "Living costs are very affordable. Students typically spend $200–$400/month covering food, transportation, and personal expenses, depending on the city." },
                { icon: "📱", title: "Internet & Communication", desc: "India has excellent mobile connectivity. SIM cards are affordable and internet speeds are fast. WhatsApp and video calls to family are easy and cheap." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
