"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Everything We Handle <span className="text-[#0B3C91]">For You</span>
          </h2>
          <p className="text-gray-600 font-medium">
            From your first enquiry to your first day on campus — we are with you every step.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`flex flex-col items-center text-center p-5 rounded-2xl border-2 ${service.border} ${service.bg} hover:shadow-lg transition-all duration-200 group cursor-default`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className={`font-black text-sm ${service.color} leading-tight mb-1`}>
                {service.title}
              </h3>
              <p className={`text-xs font-semibold ${service.color} opacity-75 leading-snug`}>
                {service.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
