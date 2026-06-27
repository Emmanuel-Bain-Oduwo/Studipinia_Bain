import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title,
    description: `Read our expert guide on ${title}.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0B3C91] text-sm font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-2.5 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-xs font-bold">
              Admissions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] mb-4 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
              👤
            </div>
            <span>Studipinia Editorial Team</span>
            <span>·</span>
            <Clock className="w-3.5 h-3.5" />
            <span>8 min read</span>
            <span>·</span>
            <span>June 2025</span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Studying in India offers African students a unique opportunity to
              access world-class education at a fraction of the cost of Western
              universities. With hundreds of accredited institutions and dozens
              of programs available, India has become one of the top
              destinations for international students from Africa.
            </p>

            <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">
              Why India?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              India&apos;s higher education system is one of the largest in the world,
              with over 1,000 universities and 40,000+ colleges. Indian degrees
              are recognized globally, and for medical degrees, they are
              accepted by WHO and medical councils in most African countries.
            </p>

            <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">
              Eligibility Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Completed high school / secondary education</li>
              <li>Minimum 50-60% in relevant subjects (higher for medical)</li>
              <li>Valid passport</li>
              <li>English proficiency (most programs are in English)</li>
              <li>Good health certificate (for some programs)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">
              How Studipinia Helps
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Studipinia, we simplify the entire process. From helping you
              choose the right university and course to processing your
              documents, applying on your behalf, getting your admission letter,
              and handling your visa — we&apos;re with you every step of the way.
              And it&apos;s all 100% free for students.
            </p>
          </div>

          <div className="mt-12 p-6 bg-[#f8faff] rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">
              Ready to start your journey?
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Book a free consultation with our expert counsellors today.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B3C91] text-white font-semibold hover:bg-[#082d6e] transition-colors text-sm group"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
