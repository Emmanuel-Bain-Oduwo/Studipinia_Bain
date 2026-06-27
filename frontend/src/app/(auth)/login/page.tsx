import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Studipinia account to track your application.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 justify-center mb-6">
            <div className="w-10 h-10 bg-[#0B3C91] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-[#0B3C91] font-bold text-xl">Studipinia</span>
          </Link>
          <h1 className="text-3xl font-black text-[#111827]">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Sign in to track your application</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <LoginForm />
          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#0B3C91] font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
