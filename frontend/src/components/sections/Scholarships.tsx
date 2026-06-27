"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const SCHOLARSHIPS = [
  {
    name: "Merit Excellence Scholarship",
    university: "Parul University",
    amount: "Up to 50%",
    type: "Merit",
    color: "from-yellow-50 to-amber-50",
    badge: "bg-amber-100 text-amber-700",
    icon: "🏆",
  },
  {
    name: "International Student Grant",
    university: "Multiple Universities",
    amount: "Up to 30%",
    type: "Need-Based",
    color: "from-blue-50 to-indigo-50",
    badge: "bg-blue-100 text-blue-700",
    icon: "🌍",
  },
  {
    name: "STEM Achievers Award",
    university: "Sharda University",
    amount: "Up to 40%",
    type: "Merit",
    color: "from-green-50 to-emerald-50",
    badge: "bg-green-100 text-green-700",
    icon: "🔬",
  },
];

export default function Scholarships() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#FBBF24]/20 text-amber-700 text-xs font-bold mb-4">
              🎓 Scholarships Available
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-4">
              Make Your Dream{" "}
              <span className="text-[#0B3C91]">Affordable</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Many of our partner universities offer scholarships specifically
              for international students. Our counsellors will help you
              identify and apply for the ones you qualify for.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Merit-based scholarships up to 50% off",
                "No hidden fees or application charges",
                "Renewable scholarships for excellent performance",
                "Government scholarship guidance included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors group"
            >
              Explore Scholarships
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {SCHOLARSHIPS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${s.color} border border-gray-100`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{s.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {s.name}
                      </h3>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {s.university}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-black text-2xl text-[#0B3C91]">
                      {s.amount}
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.badge}`}
                    >
                      {s.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
