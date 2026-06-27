"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, BookOpen, MapPin } from "lucide-react";
import { PARTNER_UNIVERSITIES } from "@/lib/constants";

export default function Universities() {
  const parul = PARTNER_UNIVERSITIES[0];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-sm font-bold mb-4"
          >
            🏛️ Our Partner University
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-gray-900 mb-3"
          >
            Study at <span className="text-[#0B3C91]">Parul University</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-medium"
          >
            {parul.tagline} — carefully selected for quality, affordability, and student welfare.
          </motion.p>
        </div>

        {/* Featured University Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#0B3C91] to-[#1a52b8] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black text-[#0B3C91]">P</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{parul.name}</h3>
                  <div className="flex items-center gap-1.5 text-blue-200 text-sm font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {parul.location}
                  </div>
                </div>
              </div>

              <p className="text-blue-100 text-base leading-relaxed mb-6 font-medium">
                {parul.description}
              </p>

              <div className="inline-block px-4 py-2 bg-white/15 rounded-xl text-sm text-blue-100 font-semibold mb-6 border border-white/20">
                {parul.accreditation}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />, value: parul.students, label: "Students" },
                  { icon: <BookOpen className="w-5 h-5" />, value: parul.programs, label: "Programs" },
                  { icon: <Award className="w-5 h-5" />, value: parul.faculties, label: "Faculties" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                    <div className="text-white/80 mb-1 flex justify-center">{s.icon}</div>
                    <div className="text-2xl font-black text-white">{s.value}</div>
                    <div className="text-blue-200 text-xs font-semibold mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/universities/parul-university"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-black hover:bg-amber-300 transition-colors group shadow-lg"
                >
                  View University
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/apply"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white font-bold border border-white/30 hover:bg-white/25 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right: highlights + scholarship */}
            <div className="bg-white p-8 lg:p-12">
              <h4 className="text-xl font-black text-gray-900 mb-5">Why Parul University?</h4>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {parul.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-semibold">{h}</span>
                  </div>
                ))}
              </div>

              {/* Scholarship highlight */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base mb-1">
                      Scholarships Available
                    </h5>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      {parul.scholarship}. We handle the entire scholarship application process for you at zero cost.
                    </p>
                    <div className="mt-3 inline-block px-3 py-1 bg-[#FBBF24] text-[#92400e] rounded-full text-xs font-black">
                      Up to 50% OFF Tuition Fees
                    </div>
                  </div>
                </div>
              </div>

              {/* Fees */}
              <div className="mt-4 bg-[#0B3C91]/5 rounded-2xl p-4 border border-[#0B3C91]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Tuition Fees</p>
                    <p className="text-lg font-black text-[#0B3C91]">{parul.fees}</p>
                  </div>
                  <Link
                    href="/consultation"
                    className="px-4 py-2.5 rounded-xl bg-[#0B3C91] text-white text-sm font-bold hover:bg-[#082d6e] transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Available courses teaser */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-gray-50 rounded-2xl p-5 border border-gray-100"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                300+ Courses Available at Parul
              </p>
              <div className="flex flex-wrap gap-2">
                {parul.courses.map((c) => (
                  <span key={c} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/courses"
              className="flex items-center gap-1.5 text-[#0B3C91] font-bold text-sm hover:gap-2.5 transition-all group flex-shrink-0"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
