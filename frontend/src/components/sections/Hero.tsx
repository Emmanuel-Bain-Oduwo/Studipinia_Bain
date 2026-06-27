"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { WHY_CHOOSE } from "@/lib/constants";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Name required"),
  whatsapp: z.string().min(7, "WhatsApp number required"),
  email: z.string().email("Valid email required"),
  course: z.string().min(1, "Please select a course"),
  country: z.string().min(1, "Please select your country"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const COURSES = [
  "MBBS", "BDS", "B.Tech", "M.Tech", "MBA", "BBA", "B.Pharm",
  "M.Pharm", "B.Sc Nursing", "LLB", "Architecture", "Other",
];

const COUNTRIES = [
  "Kenya", "Nigeria", "Ghana", "Uganda", "Tanzania", "Zimbabwe",
  "Ethiopia", "Cameroon", "Senegal", "Guinea", "South Africa",
  "Zambia", "Rwanda", "Ivory Coast", "Mozambique", "Other",
];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryForm>({ resolver: zodResolver(enquirySchema) });

  const onSubmit = async (data: EnquiryForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Enquiry:", data);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#e8f0ff] to-[#f0fff8] pt-4 pb-0">
      {/* Decorative BG blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 lg:pt-10 pb-0">
          {/* LEFT: Hero content */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pb-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBBF24]/20 border border-[#FBBF24]/40 text-[#92400e] text-sm font-medium w-fit mb-5"
            >
              <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              Your Future Starts Here
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-[#111827] mb-4"
            >
              Your Gateway to{" "}
              <span className="text-[#0B3C91]">Global</span>{" "}
              <span className="text-[#16A34A]">Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed mb-7"
            >
              We help African students achieve their dreams by studying at top
              universities in{" "}
              <span className="text-[#0B3C91] font-semibold">India</span> and
              beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <Link
                href="/apply"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-[#0B3C91] text-[#0B3C91] font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["🇰🇪", "🇳🇬", "🇬🇭", "🇺🇬"].map((flag, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-sm shadow"
                  >
                    {flag}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">10K+ Students</span>{" "}
                  Trusted Us
                </p>
              </div>
            </motion.div>
          </div>

          {/* CENTER: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 xl:col-span-4 relative hidden lg:flex items-end justify-center"
          >
            {/* Background illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-green-100 opacity-60" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#FBBF24] text-[#0B3C91] rounded-2xl px-4 py-3 text-center shadow-xl z-10"
            >
              <div className="text-2xl font-black">10,000+</div>
              <div className="text-xs font-semibold">Students Worldwide</div>
              <div className="text-xs">Trusted by</div>
            </motion.div>

            {/* Placeholder hero image with students silhouette */}
            <div className="relative w-full max-w-xs z-0 pt-16">
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-blue-200 to-blue-50 rounded-3xl overflow-hidden flex items-end justify-center">
                <div className="text-center pb-4">
                  <div className="text-6xl mb-2">👨‍🎓👩‍🎓</div>
                  <div className="text-sm text-blue-800 font-medium px-4">
                    African students achieving their dreams in India
                  </div>
                </div>
              </div>
              {/* Airplane decoration */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 right-0 text-4xl"
              >
                ✈️
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Two cards - Enquiry Form + Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4 pb-8 lg:pb-4"
          >
            {/* Enquiry Form Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
              <h3 className="font-bold text-[#0B3C91] text-base mb-1">
                Get Free Counselling
              </h3>
              <p className="text-gray-500 text-xs mb-4">
                Start your journey today!
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-green-700 mb-1">
                    Thank you!
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our counsellor will reach you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <FormField
                    icon="👤"
                    placeholder="Full Name"
                    {...register("fullName")}
                    error={errors.fullName?.message}
                  />
                  <FormField
                    icon="📱"
                    placeholder="WhatsApp Number"
                    type="tel"
                    {...register("whatsapp")}
                    error={errors.whatsapp?.message}
                  />
                  <FormField
                    icon="✉️"
                    placeholder="Email Address"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                      📚
                    </span>
                    <select
                      {...register("course")}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#0B3C91] bg-gray-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Interested Course
                      </option>
                      {COURSES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-0.5">
                        {errors.course.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                      🌍
                    </span>
                    <select
                      {...register("country")}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#0B3C91] bg-gray-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-0.5">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#16A34A] text-white font-bold text-sm hover:bg-[#15803d] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry →"}
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    100% Free · No Obligation
                  </p>
                </form>
              )}
            </div>

            {/* Why Choose Studipinia Card */}
            <div className="bg-[#0B3C91] rounded-2xl shadow-xl p-5 text-white">
              <h3 className="font-bold text-sm mb-1">
                Why Choose{" "}
                <span className="text-[#FBBF24]">Studipinia?</span>
              </h3>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {WHY_CHOOSE.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-1.5">
                      {item.icon}
                    </div>
                    <span className="text-[10px] text-blue-100 leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-[#0B3C91] rounded-t-2xl mx-0 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-5 mt-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: "👥", value: "10,000+", label: "Students Guided" },
                { icon: "🏛️", value: "50+", label: "Partner Universities" },
                { icon: "🛂", value: "95%", label: "Visa Success Rate" },
                { icon: "🌍", value: "15+", label: "Countries Served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="font-black text-xl leading-none">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-xs mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  icon,
  placeholder,
  type = "text",
  error,
  ...props
}: {
  icon: string;
  placeholder: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0B3C91] bg-gray-50"
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
