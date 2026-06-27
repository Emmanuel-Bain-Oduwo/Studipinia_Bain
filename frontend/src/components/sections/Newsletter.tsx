"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const schema = z.object({
  email: z.string().email("Valid email required"),
});
type Schema = z.infer<typeof schema>;

export default function Newsletter() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0B3C91] to-[#1a52b8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Stay Updated
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Get the latest updates on admissions, scholarships, visa news, and
            student tips straight to your inbox.
          </p>

          {done ? (
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="text-xl font-bold mb-1">You&apos;re subscribed!</h3>
              <p className="text-blue-200 text-sm">
                Watch your inbox for updates from Studipinia.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  className="w-full px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm"
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FBBF24] text-[#0B3C91] font-bold hover:bg-amber-300 transition-colors disabled:opacity-70 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          <p className="text-blue-300 text-xs mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
