"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Email required"),
  phone: z.string().min(7, "Phone required"),
  country: z.string().min(1, "Country required"),
  preferredDate: z.string().min(1, "Date required"),
  preferredTime: z.string().min(1, "Time required"),
  mode: z.enum(["Video Call", "WhatsApp", "Phone"]),
  notes: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

const COUNTRIES = [
  "Kenya", "Nigeria", "Ghana", "Uganda", "Tanzania", "Zimbabwe",
  "Ethiopia", "Cameroon", "Senegal", "Guinea", "South Africa",
  "Zambia", "Rwanda", "Other",
];

const TIMES = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

export default function ConsultationForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<Schema>({ resolver: zodResolver(schema), defaultValues: { mode: "Video Call" } });

  const onSubmit = async (data: Schema) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Consultation:", data);
    setDone(true);
  };

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Session Booked!
        </h3>
        <p className="text-gray-500 text-sm">
          Our counsellor will confirm your session within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Full Name *</label>
          <input {...register("fullName")} placeholder="Your name" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]" />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Email *</label>
          <input type="email" {...register("email")} placeholder="you@email.com" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Phone *</label>
          <input type="tel" {...register("phone")} placeholder="+254 700 000 000" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Country *</label>
          <select {...register("country")} defaultValue="" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]">
            <option value="" disabled>Select country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Preferred Date *</label>
          <input type="date" {...register("preferredDate")} min={new Date().toISOString().split("T")[0]} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]" />
          {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Preferred Time (EAT) *</label>
          <select {...register("preferredTime")} defaultValue="" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]">
            <option value="" disabled>Select time</option>
            {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Session Mode *</label>
        <div className="flex gap-3">
          {(["Video Call", "WhatsApp", "Phone"] as const).map((mode) => (
            <label key={mode} className="flex-1 cursor-pointer">
              <input type="radio" {...register("mode")} value={mode} className="sr-only" />
              <div className="px-3 py-2.5 rounded-xl border border-gray-200 text-center text-sm font-medium text-gray-700 hover:border-[#0B3C91] hover:bg-blue-50 transition-colors has-[:checked]:border-[#0B3C91] has-[:checked]:bg-blue-50 has-[:checked]:text-[#0B3C91]">
                {mode === "Video Call" ? "📹" : mode === "WhatsApp" ? "💬" : "📞"} {mode}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1.5">Additional Notes</label>
        <textarea {...register("notes")} rows={3} placeholder="Any specific questions or topics you'd like to discuss..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91] resize-none" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0B3C91] text-white font-bold hover:bg-[#082d6e] transition-colors disabled:opacity-70"
      >
        <Calendar className="w-4 h-4" />
        {isSubmitting ? "Booking..." : "Book My Free Session"}
      </button>
    </form>
  );
}
