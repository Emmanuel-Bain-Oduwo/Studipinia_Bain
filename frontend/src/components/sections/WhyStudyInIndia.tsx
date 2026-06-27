"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { POPULAR_COURSES, WHY_INDIA } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function WhyStudyInIndia() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prev = () =>
    setTestimonialIndex((i) =>
      i === 0 ? TESTIMONIALS.length - 1 : i - 1
    );
  const next = () =>
    setTestimonialIndex((i) =>
      i === TESTIMONIALS.length - 1 ? 0 : i + 1
    );

  const testimonial = TESTIMONIALS[testimonialIndex];

  return (
    <section className="py-16 lg:py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Why Study in India */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6">
              Why Study in India?
            </h2>
            <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-orange-100 to-amber-50 aspect-video flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-6xl mb-2">🕌</div>
                <div className="text-orange-800 font-semibold text-sm">
                  India Gate, New Delhi
                </div>
                <div className="mt-2 flex justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="w-8 h-2 rounded-full bg-white border border-gray-300" />
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="w-2 h-2 rounded-full bg-green-600" />
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
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/study-in-india"
              className="inline-flex items-center gap-1.5 mt-6 text-[#0B3C91] font-semibold text-sm hover:gap-2.5 transition-all group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                Popular Courses
              </h2>
              <Link
                href="/courses"
                className="text-[#0B3C91] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-3">
              {POPULAR_COURSES.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/courses?category=${course.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#0B3C91]/20 hover:bg-white transition-all group card-hover"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#0B3C91] transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-gray-500 text-xs">{course.degrees}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#0B3C91] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Students Say */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6">
              What Students Say
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="text-[#0B3C91] text-4xl font-serif mb-3">"</div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Studying {testimonial.course} at {testimonial.university}
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === testimonialIndex
                          ? "bg-[#0B3C91] w-6"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0B3C91] hover:text-[#0B3C91] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0B3C91] hover:text-[#0B3C91] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
