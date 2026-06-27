export const SITE_CONFIG = {
  name: "Studipinia",
  tagline: "Your Gateway to Global Education",
  description:
    "Helping African students access quality higher education in India through transparent, technology-driven admissions.",
  url: "https://studipinia.com",
  phone: "+254 701 234 567",
  email: "info@studipinia.com",
  whatsapp: "+254701234567",
  address: "Nairobi, Kenya",
  socials: {
    facebook: "https://facebook.com/studipinia",
    instagram: "https://instagram.com/studipinia",
    tiktok: "https://tiktok.com/@studipinia",
    youtube: "https://youtube.com/@studipinia",
    linkedin: "https://linkedin.com/company/studipinia",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Courses", href: "/courses" },
  { label: "Study in India", href: "/study-in-india" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Visa", href: "/visa" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { icon: "👥", value: "10,000+", label: "Students Guided" },
  { icon: "📚", value: "300+", label: "Courses Available" },
  { icon: "🛂", value: "95%", label: "Visa Success Rate" },
  { icon: "🌍", value: "15+", label: "Countries Served" },
];

export const PARTNER_UNIVERSITIES = [
  {
    id: "parul",
    name: "Parul University",
    location: "Vadodara, Gujarat, India",
    slug: "parul-university",
    featured: true,
    established: 2015,
    tagline: "India's Fastest Growing Private University",
    accreditation: "NAAC A+ Accredited • UGC Recognized • NIRF Ranked",
    students: "40,000+",
    programs: "300+",
    faculties: "25+",
    campusSize: "150+ Acres",
    description:
      "Parul University is one of India's premier private universities, recognised for academic excellence, research innovation, and global exposure. With NAAC A+ accreditation and UGC recognition, a degree from Parul is respected worldwide.",
    highlights: [
      "NAAC A+ Accredited",
      "UGC & AIU Recognized",
      "NIRF Ranked",
      "40,000+ Students",
      "300+ Programs",
      "International Campus",
      "World-class Hospitals & Labs",
      "On-campus Hostel",
    ],
    courses: [
      "MBBS", "BDS", "B.Tech", "M.Tech", "MBA", "BBA",
      "B.Pharm", "M.Pharm", "B.Sc Nursing", "LLB", "LLM",
      "B.Arch", "B.Sc Agriculture", "BCA", "MCA",
    ],
    fees: "Starting from $2,200/year",
    scholarship: "Up to 50% merit scholarship available",
  },
];

export const POPULAR_COURSES = [
  {
    id: "medicine",
    name: "Medicine",
    degrees: "MBBS, BDS, MD",
    slug: "medicine",
    icon: "🏥",
    color: "from-red-50 to-red-100",
    iconBg: "bg-red-100",
    duration: "5.5 Years",
    seats: "150 Seats",
  },
  {
    id: "engineering",
    name: "Engineering",
    degrees: "B.Tech, M.Tech",
    slug: "engineering",
    icon: "⚙️",
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
    duration: "4 Years",
    seats: "Open Intake",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    degrees: "B.Pharm, M.Pharm",
    slug: "pharmacy",
    icon: "💊",
    color: "from-green-50 to-green-100",
    iconBg: "bg-green-100",
    duration: "4 Years",
    seats: "Open Intake",
  },
  {
    id: "nursing",
    name: "Nursing",
    degrees: "B.Sc Nursing",
    slug: "nursing",
    icon: "🩺",
    color: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-100",
    duration: "4 Years",
    seats: "Open Intake",
  },
  {
    id: "business",
    name: "Business",
    degrees: "MBA, BBA",
    slug: "business",
    icon: "💼",
    color: "from-amber-50 to-amber-100",
    iconBg: "bg-amber-100",
    duration: "2–4 Years",
    seats: "Open Intake",
  },
  {
    id: "law",
    name: "Law",
    degrees: "LLB, LLM",
    slug: "law",
    icon: "⚖️",
    color: "from-teal-50 to-teal-100",
    iconBg: "bg-teal-100",
    duration: "3–5 Years",
    seats: "Open Intake",
  },
];

export const SERVICES = [
  {
    icon: "📋",
    title: "Application Guidance",
    subtitle: "End-to-end support",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "🎓",
    title: "Scholarship Support",
    subtitle: "Up to 50% off fees",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    subtitle: "100% Support",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: "✈️",
    title: "Airport Pickup",
    subtitle: "& Accommodation",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "🎧",
    title: "24/7 Student Support",
    subtitle: "Always here for you",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: "🏠",
    title: "Post Arrival Support",
    subtitle: "Orientation & more",
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Brian Otieno",
    country: "Kenya",
    flag: "🇰🇪",
    university: "Parul University",
    course: "MBBS",
    rating: 5,
    content:
      "Studipinia made my dream of studying medicine in India a reality. From my application to the airport pickup when I arrived in Vadodara — they handled everything. The scholarship they secured saved my family so much money!",
    year: 2024,
  },
  {
    id: "2",
    name: "Amara Diallo",
    country: "Guinea",
    flag: "🇬🇳",
    university: "Parul University",
    course: "B.Tech Computer Science",
    rating: 5,
    content:
      "The airport pickup and orientation was incredible. I arrived in India and Studipinia's team was right there at the gate waiting for me. They set me up with accommodation, SIM card, bank account — everything. Truly exceptional.",
    year: 2024,
  },
  {
    id: "3",
    name: "Grace Mutua",
    country: "Nigeria",
    flag: "🇳🇬",
    university: "Parul University",
    course: "B.Pharm",
    rating: 5,
    content:
      "I never thought studying in India was possible for me. Studipinia guided me through the visa, documents, and admission process step by step. Now I am living my dream at Parul University. I couldn&apos;t be happier!",
    year: 2024,
  },
];

export const WHY_INDIA = [
  "World-class education at affordable cost",
  "Globally recognized degrees",
  "Safe, diverse, and welcoming environment",
  "English medium programs across all courses",
  "Excellent career and post-study opportunities",
  "Rich culture & vibrant student life",
];

export const WHY_CHOOSE = [
  { icon: "🎓", title: "100% Free Counselling" },
  { icon: "🏛️", title: "Top Ranked University" },
  { icon: "🎁", title: "Scholarships Available" },
  { icon: "🛂", title: "Visa Support A to Z" },
  { icon: "💰", title: "Affordable Education" },
  { icon: "🎧", title: "24/7 Expert Support" },
];

export const FAQS = [
  {
    id: "1",
    question: "Is counselling with Studipinia completely free?",
    answer:
      "Yes, 100% free! Our counselling, application support, and admission guidance cost you nothing. We earn from our university partnership with Parul — not from students.",
    category: "General",
  },
  {
    id: "2",
    question: "Which African countries do you serve?",
    answer:
      "We serve students from Kenya, Nigeria, Ghana, Uganda, Tanzania, Zimbabwe, Ethiopia, Cameroon, Senegal, Guinea, South Africa, Zambia, Rwanda, Ivory Coast, Mozambique, and 15+ more countries.",
    category: "General",
  },
  {
    id: "3",
    question: "What is the visa success rate?",
    answer:
      "Our visa success rate is 95%. Our experienced visa counsellors guide you through every document requirement and Indian embassy procedure to maximise your approval chances.",
    category: "Visa",
  },
  {
    id: "4",
    question: "Can I get a scholarship at Parul University?",
    answer:
      "Yes! Parul University offers merit-based scholarships of up to 50% off tuition fees for international students. Our counsellors will assess your eligibility and guide your application.",
    category: "Scholarships",
  },
  {
    id: "5",
    question: "How long does the admission process take?",
    answer:
      "Typically 2–4 weeks from submitting your application to receiving your Parul University admission letter, depending on the completeness of your documents.",
    category: "Admissions",
  },
  {
    id: "6",
    question: "What documents do I need to apply?",
    answer:
      "Typically: valid passport, high school certificates, transcripts, passport-size photographs, and a medical certificate. Our team provides a full personalised checklist for your specific course.",
    category: "Documents",
  },
  {
    id: "7",
    question: "Do you help with airport pickup and accommodation?",
    answer:
      "Yes! We arrange airport pickup on your arrival day in India, assist with university hostel or private accommodation, and provide full orientation support so you settle in comfortably.",
    category: "Student Life",
  },
  {
    id: "8",
    question: "Is a Parul University degree recognised internationally?",
    answer:
      "Yes. Parul University is NAAC A+ accredited, UGC recognised, and NIRF ranked. Medical degrees (MBBS) are recognised by WHO and medical councils in many countries including Kenya, Nigeria, Ghana, and more.",
    category: "Academic",
  },
];

export const CRM_STAGES: { status: string; color: string; bg: string; count: number }[] = [
  { status: "New Lead", color: "text-blue-700", bg: "bg-blue-100", count: 42 },
  { status: "Contacted", color: "text-yellow-700", bg: "bg-yellow-100", count: 38 },
  { status: "Documents Received", color: "text-orange-700", bg: "bg-orange-100", count: 27 },
  { status: "Application Submitted", color: "text-purple-700", bg: "bg-purple-100", count: 21 },
  { status: "Admission Issued", color: "text-green-700", bg: "bg-green-100", count: 18 },
  { status: "Visa Processing", color: "text-teal-700", bg: "bg-teal-100", count: 14 },
  { status: "Enrolled", color: "text-indigo-700", bg: "bg-indigo-100", count: 11 },
  { status: "Commission Completed", color: "text-emerald-700", bg: "bg-emerald-100", count: 9 },
];
