"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  country: z.string().min(1, "Country required"),
  password: z.string().min(8, "Minimum 8 characters"),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type Schema = z.infer<typeof schema>;

const COUNTRIES = [
  "Kenya", "Nigeria", "Ghana", "Uganda", "Tanzania", "Zimbabwe",
  "Ethiopia", "Cameroon", "Senegal", "Guinea", "South Africa",
  "Zambia", "Rwanda", "Other",
];

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Schema) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Register:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {[
        { label: "Full Name", key: "fullName" as const, type: "text", placeholder: "Your full name" },
        { label: "Email Address", key: "email" as const, type: "email", placeholder: "you@email.com" },
        { label: "Phone / WhatsApp", key: "phone" as const, type: "tel", placeholder: "+254 700 000 000" },
      ].map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
          <input
            type={field.type}
            {...register(field.key)}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91] focus:bg-white"
          />
          {errors[field.key] && (
            <p className="text-red-500 text-xs mt-1">{errors[field.key]?.message}</p>
          )}
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
        <select {...register("country")} defaultValue="" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91]">
          <option value="" disabled>Select your country</option>
          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
      </div>

      {[
        { label: "Password", key: "password" as const, placeholder: "Min. 8 characters" },
        { label: "Confirm Password", key: "confirmPassword" as const, placeholder: "Repeat password" },
      ].map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
          <input
            type="password"
            {...register(field.key)}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#0B3C91] focus:bg-white"
          />
          {errors[field.key] && (
            <p className="text-red-500 text-xs mt-1">{errors[field.key]?.message}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-[#0B3C91] text-white font-bold hover:bg-[#082d6e] transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
