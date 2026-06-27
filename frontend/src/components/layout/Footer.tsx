import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Universities", href: "/universities" },
  { label: "Courses", href: "/courses" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Visa Assistance", href: "/visa" },
  { label: "Blog", href: "/blog" },
];

const RESOURCES = [
  { label: "Study in India", href: "/study-in-india" },
  { label: "Student Life", href: "/student-life" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "FAQs", href: "/faq" },
  { label: "Career Guidance", href: "/blog?category=career" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B3C91] text-white">
      {/* CTA Bar */}
      <div className="bg-[#082d6e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FBBF24] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Let Our Experts Help You Achieve Your Dreams
                </h3>
                <p className="text-blue-200 text-sm mt-0.5">
                  Book a free one-on-one counselling session now!
                </p>
              </div>
            </div>
            <Link
              href="/consultation"
              className="flex items-center gap-2 px-6 py-3 bg-[#FBBF24] text-[#0B3C91] font-bold rounded-xl hover:bg-amber-300 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <span>📅</span>
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#0B3C91] font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl leading-none">
                  Studipinia
                </div>
                <div className="text-blue-300 text-xs leading-none">
                  Your Gateway to Global Education
                </div>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Dream. Plan. Apply. Achieve. We guide African students to world-class
              education in India.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { href: SITE_CONFIG.socials.facebook, icon: <FacebookIcon />, label: "Facebook" },
                { href: SITE_CONFIG.socials.instagram, icon: <InstagramIcon />, label: "Instagram" },
                { href: SITE_CONFIG.socials.tiktok, icon: <TikTokIcon />, label: "TikTok" },
                { href: SITE_CONFIG.socials.youtube, icon: <YoutubeIcon />, label: "YouTube" },
                { href: SITE_CONFIG.socials.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-base mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {RESOURCES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#FBBF24]" />
                  <span className="text-sm">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#FBBF24]" />
                  <span className="text-sm">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-200">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FBBF24]" />
                  <span className="text-sm">{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>

            {/* Achievement badge */}
            <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/20">
              <div className="text-center">
                <div className="text-[#FBBF24] font-bold text-sm mb-1">
                  We Guide You — You Achieve
                </div>
                <div className="text-white font-bold text-lg">We Celebrate</div>
                <div className="flex justify-center gap-1 mt-1">
                  {["Dream", "Plan", "Apply", "Achieve"].map((word) => (
                    <span key={word} className="text-xs text-blue-200">
                      {word}
                      {word !== "Achieve" && " ·"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-300">
            <p>© {new Date().getFullYear()} Studipinia. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.54V6.76a4.85 4.85 0 0 1-1.07-.07z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
