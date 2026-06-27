import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles and guides about studying in India, visa requirements, scholarships, and student life.",
};

const POSTS = [
  {
    slug: "how-to-apply-mbbs-india",
    title: "How to Apply for MBBS in India as an African Student (2025 Guide)",
    excerpt: "A complete step-by-step guide to applying for MBBS in India, from eligibility to receiving your admission letter.",
    category: "Admissions",
    readTime: 8,
    publishedAt: "June 15, 2025",
    emoji: "🏥",
    color: "from-red-100 to-rose-50",
  },
  {
    slug: "india-student-visa-guide",
    title: "Complete India Student Visa Guide 2025 for African Students",
    excerpt: "Everything you need to know about the Indian student visa process, required documents, processing time, and tips for approval.",
    category: "Visa",
    readTime: 6,
    publishedAt: "June 10, 2025",
    emoji: "🛂",
    color: "from-blue-100 to-indigo-50",
  },
  {
    slug: "top-scholarships-india",
    title: "Top 10 Scholarships in India for International Students in 2025",
    excerpt: "Discover the best scholarships available at Indian universities that can cut your tuition costs significantly.",
    category: "Scholarships",
    readTime: 5,
    publishedAt: "June 5, 2025",
    emoji: "🎓",
    color: "from-amber-100 to-yellow-50",
  },
  {
    slug: "parul-university-review",
    title: "Parul University Review: Is It the Right Choice for You?",
    excerpt: "An in-depth review of Parul University — academics, campus life, international student support, fees, and more.",
    category: "Universities",
    readTime: 7,
    publishedAt: "May 28, 2025",
    emoji: "🏛️",
    color: "from-purple-100 to-violet-50",
  },
  {
    slug: "student-life-india-africans",
    title: "What African Students Should Know About Life in India",
    excerpt: "Culture, food, accommodation, safety, and everything you need to prepare for your new life as an African student in India.",
    category: "Student Life",
    readTime: 10,
    publishedAt: "May 20, 2025",
    emoji: "🌏",
    color: "from-green-100 to-emerald-50",
  },
  {
    slug: "mbbs-vs-bds-india",
    title: "MBBS vs BDS in India — Which Should You Choose?",
    excerpt: "A detailed comparison of MBBS and BDS courses in India to help you make the right career decision.",
    category: "Admissions",
    readTime: 6,
    publishedAt: "May 15, 2025",
    emoji: "🦷",
    color: "from-teal-100 to-cyan-50",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
              Study Abroad <span className="text-[#0B3C91]">Insights</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert guides, tips, and stories to help you succeed in your
              study abroad journey
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured */}
            <article className="mb-12">
              <Link
                href={`/blog/${POSTS[0].slug}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 group"
              >
                <div
                  className={`h-64 lg:h-full rounded-2xl bg-gradient-to-br ${POSTS[0].color} flex items-center justify-center text-8xl`}
                >
                  {POSTS[0].emoji}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="px-2.5 py-1 rounded-full bg-[#0B3C91]/10 text-[#0B3C91] text-xs font-bold w-fit mb-3">
                    {POSTS[0].category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 group-hover:text-[#0B3C91] transition-colors">
                    {POSTS[0].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{POSTS[0].publishedAt}</span>
                    <span>·</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{POSTS[0].readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#0B3C91] font-semibold mt-4 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </article>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POSTS.slice(1).map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div
                      className={`h-48 rounded-2xl bg-gradient-to-br ${post.color} flex items-center justify-center text-6xl mb-4`}
                    >
                      {post.emoji}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {post.category}
                    </span>
                    <h2 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#0B3C91] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min · {post.publishedAt}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
