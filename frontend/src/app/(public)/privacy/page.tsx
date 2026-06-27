import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Studipinia's Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-black text-[#111827] mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-10">Last updated: June 2025</p>
          <div className="prose prose-gray max-w-none space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect personal information such as name, email address, phone number, country, educational background, and course preferences when you submit enquiries, apply through our platform, or book consultations.",
              },
              {
                title: "2. How We Use Your Information",
                content: "We use your information to connect you with appropriate universities, guide your application process, provide visa assistance, and send relevant updates about study opportunities in India. We never sell your data to third parties.",
              },
              {
                title: "3. Data Security",
                content: "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access or disclosure.",
              },
              {
                title: "4. Sharing With Universities",
                content: "With your consent, we share your profile and application documents with partner universities you apply to. We only share information necessary for your application.",
              },
              {
                title: "5. Cookies",
                content: "We use cookies to improve your browsing experience, analyze website traffic, and provide personalized content. You can disable cookies in your browser settings.",
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct, or delete your personal information at any time. Contact us at info@studipinia.com to exercise these rights.",
              },
              {
                title: "7. Contact Us",
                content: "If you have questions about this Privacy Policy, please contact us at info@studipinia.com or write to us at our office in Nairobi, Kenya.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#111827] mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
