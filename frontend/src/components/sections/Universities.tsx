"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PARTNER_UNIVERSITIES } from "@/lib/constants";

export default function Universities() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-black text-[#111827]"
            >
              Top Partner Universities
            </motion.h2>
            <p className="text-gray-500 mt-1 text-sm">
              Study at India&apos;s finest institutions with our guidance
            </p>
          </div>
          <Link
            href="/universities"
            className="hidden sm:flex items-center gap-1.5 text-[#0B3C91] font-semibold text-sm hover:gap-2.5 transition-all group"
          >
            View All Universities
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_UNIVERSITIES.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <Link
                href={`/universities/${uni.slug}`}
                className="group flex flex-col items-center p-4 rounded-2xl border border-gray-100 hover:border-[#0B3C91]/20 hover:bg-blue-50 transition-all duration-200 card-hover h-full"
              >
                {/* Logo placeholder */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl font-black text-gray-600">
                    {uni.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xs text-gray-900 leading-tight mb-1 group-hover:text-[#0B3C91] transition-colors">
                    {uni.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center justify-center gap-0.5 text-gray-400 text-[10px]">
                    <MapPin className="w-2.5 h-2.5" />
                    {uni.location}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/universities"
            className="inline-flex items-center gap-1.5 text-[#0B3C91] font-semibold text-sm"
          >
            View All Universities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
