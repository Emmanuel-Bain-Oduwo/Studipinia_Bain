"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Free Counselling",
    description:
      "Book a free session with our expert counsellors to discuss your goals and ideal course.",
    icon: "🎧",
    color: "bg-blue-500",
  },
  {
    step: "02",
    title: "Choose University",
    description:
      "We match you with the best-fit universities and courses based on your profile.",
    icon: "🏛️",
    color: "bg-purple-500",
  },
  {
    step: "03",
    title: "Submit Documents",
    description:
      "Upload your documents securely through our platform for review and verification.",
    icon: "📄",
    color: "bg-orange-500",
  },
  {
    step: "04",
    title: "Get Admission Letter",
    description:
      "Receive your official admission letter from the university within 2–4 weeks.",
    icon: "🎓",
    color: "bg-green-500",
  },
  {
    step: "05",
    title: "Visa Processing",
    description:
      "Our visa experts guide you through the entire student visa application process.",
    icon: "🛂",
    color: "bg-teal-500",
  },
  {
    step: "06",
    title: "Fly to India!",
    description:
      "We arrange airport pickup and help you settle into your new life in India.",
    icon: "✈️",
    color: "bg-pink-500",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            From first conversation to arriving in India — we handle every step
            with you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center text-2xl shadow-lg`}
                >
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-gray-100 select-none">
                  {step.step}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0B3C91] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line for desktop */}
              {index < STEPS.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B3C91] text-white font-bold hover:bg-[#082d6e] transition-colors shadow-lg hover:shadow-xl group"
          >
            Start Your Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
