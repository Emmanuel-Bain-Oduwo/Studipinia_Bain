"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-16 lg:py-20 bg-[#f8faff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about studying in India with Studipinia
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "rounded-2xl border transition-all duration-200",
                openId === faq.id
                  ? "border-[#0B3C91]/30 bg-white shadow-md"
                  : "border-gray-100 bg-white hover:border-gray-200"
              )}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
              >
                <span
                  className={cn(
                    "font-semibold text-sm sm:text-base transition-colors",
                    openId === faq.id ? "text-[#0B3C91]" : "text-gray-800"
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200",
                    openId === faq.id && "rotate-180 text-[#0B3C91]"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
