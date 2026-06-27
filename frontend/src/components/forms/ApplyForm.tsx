"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  country: z.string().min(1, "Country required"),
  dateOfBirth: z.string().min(1, "Date of birth required"),
  gender: z.string().min(1, "Gender required"),
  highSchoolGrade: z.string().min(1, "Grade required"),
  preferredCourse: z.string().min(1, "Course required"),
  preferredUniversity: z.string().optional(),
  message: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

const COURSES = [
  "MBBS", "BDS", "MD", "B.Tech", "M.Tech", "BCA", "MCA",
  "BBA", "MBA", "B.Pharm", "M.Pharm", "B.Sc Nursing",
  "LLB", "Architecture", "Other",
];

const UNIVERSITIES = [
  "Parul University", "Chandigarh University", "Lovely Professional University",
  "Amity University", "Manipal University", "Sharda University", "Not Decided Yet",
];

const COUNTRIES = [
  "Kenya", "Nigeria", "Ghana", "Uganda", "Tanzania", "Zimbabwe",
  "Ethiopia", "Cameroon", "Senegal", "Guinea", "South Africa",
  "Zambia", "Rwanda", "Ivory Coast", "Mozambique", "Other",
];

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const nextStep = async () => {
    const fields: (keyof Schema)[] =
      step === 1
        ? ["fullName", "email", "phone", "country", "dateOfBirth", "gender"]
        : ["highSchoolGrade", "preferredCourse"];
    const valid = await trigger(fields);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: Schema) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Application:", data);
    setDone(true);
  };

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-[#16A34A]" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">
          Application Submitted! 🎉
        </h2>
        <p className="text-gray-600">
          Our counsellor will contact you within 24 hours to guide the next
          steps of your journey.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                s < step
                  ? "bg-[#16A34A] text-white"
                  : s === step
                  ? "bg-[#0B3C91] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {s < step ? <CheckCircle className="w-4 h-4" /> : s}
            </div>
            <span className="text-xs text-gray-500 hidden sm:block">
              {s === 1 ? "Personal Info" : s === 2 ? "Academic Info" : "Review"}
            </span>
            {s < 3 && <div className="flex-1 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Personal */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name *" error={errors.fullName?.message}>
                <input {...register("fullName")} placeholder="As in passport" />
              </Field>
              <Field label="Email Address *" error={errors.email?.message}>
                <input type="email" {...register("email")} placeholder="your@email.com" />
              </Field>
              <Field label="WhatsApp / Phone *" error={errors.phone?.message}>
                <input type="tel" {...register("phone")} placeholder="+254 700 000 000" />
              </Field>
              <Field label="Country *" error={errors.country?.message}>
                <select {...register("country")} defaultValue="">
                  <option value="" disabled>Select country</option>
                  {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Date of Birth *" error={errors.dateOfBirth?.message}>
                <input type="date" {...register("dateOfBirth")} />
              </Field>
              <Field label="Gender *" error={errors.gender?.message}>
                <select {...register("gender")} defaultValue="">
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </Field>
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Academic */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              Academic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="High School Grade / GPA *" error={errors.highSchoolGrade?.message}>
                <input {...register("highSchoolGrade")} placeholder="e.g. A, B+, 85%" />
              </Field>
              <Field label="Preferred Course *" error={errors.preferredCourse?.message}>
                <select {...register("preferredCourse")} defaultValue="">
                  <option value="" disabled>Select course</option>
                  {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Preferred University" error={errors.preferredUniversity?.message}>
                <select {...register("preferredUniversity")} defaultValue="">
                  <option value="">No preference yet</option>
                  {UNIVERSITIES.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Additional Message (Optional)" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Any additional information for our counsellors..."
                className="resize-none"
              />
            </Field>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors"
              >
                Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Submit */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              Review & Submit
            </h2>
            <div className="bg-[#f8faff] rounded-2xl p-5 text-sm space-y-2 text-gray-600">
              <p>✅ Personal details captured</p>
              <p>✅ Academic information captured</p>
              <p>
                📋 Our counsellor will review your application and reach out
                within <strong>24 hours</strong> with next steps.
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="text-[#0B3C91] underline">
                Privacy Policy
              </a>{" "}
              and consent to being contacted by Studipinia.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#16A34A] text-white font-bold hover:bg-[#15803d] transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Application 🚀"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
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
      <div className="[&>input]:w-full [&>input]:px-3.5 [&>input]:py-2.5 [&>input]:rounded-xl [&>input]:border [&>input]:border-gray-200 [&>input]:bg-gray-50 [&>input]:text-sm [&>input]:text-gray-900 [&>input]:focus:outline-none [&>input]:focus:border-[#0B3C91] [&>input]:focus:bg-white [&>select]:w-full [&>select]:px-3.5 [&>select]:py-2.5 [&>select]:rounded-xl [&>select]:border [&>select]:border-gray-200 [&>select]:bg-gray-50 [&>select]:text-sm [&>select]:text-gray-900 [&>select]:focus:outline-none [&>select]:focus:border-[#0B3C91] [&>textarea]:w-full [&>textarea]:px-3.5 [&>textarea]:py-2.5 [&>textarea]:rounded-xl [&>textarea]:border [&>textarea]:border-gray-200 [&>textarea]:bg-gray-50 [&>textarea]:text-sm [&>textarea]:text-gray-900 [&>textarea]:focus:outline-none [&>textarea]:focus:border-[#0B3C91]">
        {children}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
