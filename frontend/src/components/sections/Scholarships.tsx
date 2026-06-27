"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const PARUL_SCHOLARSHIPS = [
  {
    name: "Merit Excellence Scholarship",
    description: "Awarded to students with outstanding academic results in their home country.",
    amount: "Up to 50%",
    type: "Merit-Based",
    color: "from-amber-50 to-yellow-50",
    badge: "bg-amber-100 text-amber-800",
    border: "border-amber-100",
    icon: "🏆",
  },
  {
    name: "International Student Grant",
    description: "Designed specifically for African students joining Parul University.",
    amount: "Up to 30%",
    type: "International",
    color: "from-blue-50 to-indigo-50",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-100",
    icon: "🌍",
  },
  {
    name: "Early Bird Scholarship",
    description: "Apply early in the admission cycle and receive an additional fee reduction.",
    amount: "Up to 20%",
    type: "Early Apply",
    color: "from-green-50 to-emerald-50",
    badge: "bg-green-100 text-green-800",
    border: "border-green-100",
    icon: "⏰",
  },
];

export default function Scholarships() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBBF24]/25 text-amber-800 text-sm font-black mb-4">
              🎓 Parul University Scholarships
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Make Your Dream{" "}
              <span className="text-[#0B3C91]">Affordable</span>
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
              Parul University offers generous scholarships specifically for African international
              students. Our counsellors identify exactly which scholarship you qualify for and
              handle the entire application — at no cost to you.
            </p>
            <ul className="space-y-3.5 mb-8">
              {[
                "Merit-based scholarships up to 50% off tuition fees",
                "No hidden fees or application charges — ever",
                "Scholarships renewable for excellent academic performance",
                "We handle the full scholarship application for you",
                "Combined with affordable Indian living costs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#0B3C91] text-white font-black hover:bg-[#082d6e] transition-colors group shadow-lg"
            >
              Explore Scholarships
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: scholarship cards */}
          <div className="space-y-4">
            {PARUL_SCHOLARSHIPS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${s.color} border ${s.border} shadow-sm`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0">{s.icon}</div>
                    <div>
                      <h3 className="font-black text-gray-900 text-base mb-0.5">{s.name}</h3>
                      <p className="text-gray-600 text-sm font-medium leading-snug">{s.description}</p>
                      <span className={`inline-block mt-2 text-xs font-bold px-2.5 py-0.5 rounded-full ${s.badge}`}>
                        {s.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-black text-3xl text-[#0B3C91] leading-none">{s.amount}</div>
                    <div className="text-gray-500 text-xs font-semibold mt-1">off fees</div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="bg-[#0B3C91] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="text-3xl">💬</div>
                <div>
                  <h4 className="font-black text-white text-base mb-0.5">Not sure which you qualify for?</h4>
                  <p className="text-blue-200 text-sm font-medium">
                    Our counsellors will assess your profile and tell you exactly what scholarship you can get.
                  </p>
                  <Link href="/consultation" className="inline-flex items-center gap-1 mt-2 text-[#FBBF24] text-sm font-black hover:underline">
                    Book Free Assessment <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
