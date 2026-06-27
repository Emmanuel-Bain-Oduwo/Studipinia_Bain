"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number required"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type Schema = z.infer<typeof schema>;

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Schema) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form:", data);
    setDone(true);
  };

  if (done) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            placeholder="Your full name"
            className="input"
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            className="input"
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone / WhatsApp" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+254 700 000 000"
            className="input"
          />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input
            {...register("subject")}
            placeholder="e.g. MBBS Admission Enquiry"
            className="input"
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          placeholder="Tell us about yourself and how we can help..."
          rows={5}
          className="input resize-none"
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors disabled:opacity-70"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          font-size: 0.875rem;
          color: #111827;
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: #0b3c91;
          background-color: #fff;
        }
      `}</style>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
