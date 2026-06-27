"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3
                className={`font-bold text-xs ${service.color} mb-1 leading-tight`}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 text-[10px] leading-snug hidden sm:block">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
