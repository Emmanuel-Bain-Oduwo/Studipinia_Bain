import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Studipinia. We're here to help you start your journey to studying in India.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ff] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
                Let&apos;s Talk
              </h1>
              <p className="text-gray-600 text-lg">
                Our team is ready to answer your questions and guide your journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Phone",
                    value: SITE_CONFIG.phone,
                    href: `tel:${SITE_CONFIG.phone}`,
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: SITE_CONFIG.email,
                    href: `mailto:${SITE_CONFIG.email}`,
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Location",
                    value: SITE_CONFIG.address,
                    href: "#",
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Working Hours",
                    value: "Mon – Fri: 9AM – 6PM EAT",
                    href: "#",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="p-5 bg-[#0B3C91] rounded-2xl text-white">
                  <div className="font-bold mb-2">WhatsApp Us</div>
                  <p className="text-blue-200 text-sm mb-4">
                    Get instant answers on WhatsApp — fastest response channel
                  </p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba5a] transition-colors"
                  >
                    <span>💬</span> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-[#111827] mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
