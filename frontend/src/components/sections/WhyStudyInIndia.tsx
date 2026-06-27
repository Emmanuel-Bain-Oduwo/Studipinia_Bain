"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { POPULAR_COURSES, WHY_INDIA, TESTIMONIALS } from "@/lib/constants";
import { useState } from "react";

export default function WhyStudyInIndia() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  const t = TESTIMONIALS[idx];

  return (
    <section className="py-16 lg:py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Col 1: Why Study in India */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-5">
              Why Study in India?
            </h2>
            {/* India visual */}
            <div className="rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-orange-100 to-amber-50 aspect-video flex items-center justify-center border border-orange-100 shadow-sm">
              <div className="text-center p-6">
                <div className="text-6xl mb-2">🕌</div>
                <div className="text-orange-900 font-black text-sm">India Gate, New Delhi</div>
                <div className="mt-2 flex justify-center gap-1.5 items-center">
                  <span className="w-4 h-2 rounded-sm bg-orange-500" />
                  <span className="w-4 h-2 rounded-sm bg-white border border-gray-200" />
                  <span className="w-4 h-2 rounded-sm bg-green-600" />
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {WHY_INDIA.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm font-semibold">{point}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/study-in-india"
              className="inline-flex items-center gap-1.5 mt-6 text-[#0B3C91] font-black text-sm hover:gap-2.5 transition-all group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Col 2: Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Popular Courses
              </h2>
              <Link
                href="/courses"
                className="text-[#0B3C91] text-sm font-black flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-2.5">
              {POPULAR_COURSES.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={`/courses?category=${course.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-[#0B3C91]/30 hover:bg-blue-50 transition-all group shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl ${course.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-sm text-gray-900 group-hover:text-[#0B3C91] transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-xs font-semibold">{course.degrees}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[10px] text-gray-500 font-semibold">{course.duration}</p>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B3C91] opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 3: What Students Say */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-5">
              What Students Say
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              {/* Quote mark */}
              <div className="text-[#0B3C91] text-5xl font-black leading-none mb-3">&ldquo;</div>

              {/* Student info */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-white shadow">
                  {t.flag}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-base">{t.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    Studying {t.course} at {t.university}
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed font-medium mb-5">
                {t.content}
              </p>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === idx ? "bg-[#0B3C91] w-6" : "bg-gray-200 w-2"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0B3C91] hover:text-[#0B3C91] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0B3C91] hover:text-[#0B3C91] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Parul badge */}
            <div className="mt-4 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-xl p-4 flex items-center gap-3">
              <div className="text-2xl">🎓</div>
              <div>
                <p className="text-sm font-black text-[#15803d]">All students are at Parul University</p>
                <p className="text-xs text-green-700 font-medium">Vadodara, Gujarat, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
