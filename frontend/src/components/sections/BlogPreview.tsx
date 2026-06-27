"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const POSTS = [
  {
    id: "1",
    slug: "how-to-apply-mbbs-india",
    title: "How to Apply for MBBS in India as an African Student",
    excerpt:
      "A comprehensive step-by-step guide covering eligibility, documentation, and the entire application process.",
    category: "Admissions",
    readTime: 8,
    coverEmoji: "🏥",
    color: "from-red-100 to-rose-50",
  },
  {
    id: "2",
    slug: "india-student-visa-guide",
    title: "Complete India Student Visa Guide 2025 for African Students",
    excerpt:
      "Everything you need to know about the Indian student visa process, required documents, and timelines.",
    category: "Visa",
    readTime: 6,
    coverEmoji: "🛂",
    color: "from-blue-100 to-indigo-50",
  },
  {
    id: "3",
    slug: "top-scholarships-india",
    title: "Top Scholarships in India for International Students in 2025",
    excerpt:
      "Discover the best scholarship opportunities available at Indian universities for students from Africa.",
    category: "Scholarships",
    readTime: 5,
    coverEmoji: "🎓",
    color: "from-amber-100 to-yellow-50",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-black text-[#111827]"
            >
              Latest from Our Blog
            </motion.h2>
            <p className="text-gray-500 mt-1 text-sm">
              Expert guides, tips, and insights for your study abroad journey
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-[#0B3C91] font-semibold text-sm hover:gap-2.5 transition-all group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div
                  className={`relative h-48 rounded-2xl bg-gradient-to-br ${post.color} flex items-center justify-center mb-4 overflow-hidden group-hover:shadow-lg transition-shadow`}
                >
                  <span className="text-7xl">{post.coverEmoji}</span>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/80 text-xs font-semibold text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0B3C91] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-[#0B3C91] text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
