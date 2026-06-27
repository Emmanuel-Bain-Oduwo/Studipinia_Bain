import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Studipinia's Terms and Conditions governing the use of our platform and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-black text-[#111827] mb-2">Terms & Conditions</h1>
          <p className="text-gray-400 text-sm mb-10">Last updated: June 2025</p>
          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By using Studipinia's services, you agree to these Terms and Conditions. If you do not agree, please do not use our platform.",
              },
              {
                title: "2. Our Services",
                content: "Studipinia provides free education counselling, university application assistance, visa guidance, and related services to students. We act as an intermediary between students and educational institutions.",
              },
              {
                title: "3. Student Responsibilities",
                content: "Students must provide accurate, complete, and truthful information in all applications and forms. Submission of false information may result in rejection of applications and termination of our services.",
              },
              {
                title: "4. Free Services",
                content: "Our counselling and application services are provided free of charge to students. We earn referral commissions from partner universities, which do not affect the quality or impartiality of our guidance.",
              },
              {
                title: "5. University Admissions",
                content: "We cannot guarantee admission to any specific university. Admission decisions are made solely by the universities based on their own criteria and are beyond our control.",
              },
              {
                title: "6. Visa Processing",
                content: "While we provide visa guidance, visa approval is at the sole discretion of the embassy. We cannot guarantee visa approval but will provide the best possible support.",
              },
              {
                title: "7. Limitation of Liability",
                content: "Studipinia shall not be liable for any indirect or consequential damages arising from the use of our services, including but not limited to rejection of university applications or visa applications.",
              },
              {
                title: "8. Contact",
                content: "For any questions regarding these Terms, contact us at info@studipinia.com.",
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
