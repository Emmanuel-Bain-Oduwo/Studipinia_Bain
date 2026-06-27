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
  { value: "10,000+", label: "Students Guided" },
  { value: "50+", label: "Partner Universities" },
  { value: "95%", label: "Visa Success Rate" },
  { value: "15+", label: "Countries Served" },
];

export const PARTNER_UNIVERSITIES = [
  {
    id: "parul",
    name: "Parul University",
    location: "Vadodara, India",
    logo: "/universities/parul-logo.png",
    slug: "parul-university",
    featured: true,
  },
  {
    id: "chandigarh",
    name: "Chandigarh University",
    location: "Chandigarh, India",
    logo: "/universities/chandigarh-logo.png",
    slug: "chandigarh-university",
    featured: false,
  },
  {
    id: "lovely",
    name: "Lovely Professional University",
    location: "Punjab, India",
    logo: "/universities/lovely-logo.png",
    slug: "lovely-professional-university",
    featured: false,
  },
  {
    id: "amity",
    name: "Amity University",
    location: "Noida, India",
    logo: "/universities/amity-logo.png",
    slug: "amity-university",
    featured: false,
  },
  {
    id: "manipal",
    name: "Manipal University",
    location: "Jaipur, India",
    logo: "/universities/manipal-logo.png",
    slug: "manipal-university",
    featured: false,
  },
  {
    id: "sharda",
    name: "Sharda University",
    location: "Greater Noida, India",
    logo: "/universities/sharda-logo.png",
    slug: "sharda-university",
    featured: false,
  },
];

export const POPULAR_COURSES = [
  {
    id: "medicine",
    name: "Medicine",
    degrees: "MBBS, BDS, MD",
    image: "/courses/medicine.jpg",
    slug: "medicine",
    icon: "🏥",
    color: "from-red-50 to-red-100",
    iconBg: "bg-red-100",
  },
  {
    id: "engineering",
    name: "Engineering",
    degrees: "B.Tech, M.Tech",
    image: "/courses/engineering.jpg",
    slug: "engineering",
    icon: "⚙️",
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    degrees: "B.Pharm, M.Pharm",
    image: "/courses/pharmacy.jpg",
    slug: "pharmacy",
    icon: "💊",
    color: "from-green-50 to-green-100",
    iconBg: "bg-green-100",
  },
  {
    id: "nursing",
    name: "Nursing",
    degrees: "B.Sc Nursing",
    image: "/courses/nursing.jpg",
    slug: "nursing",
    icon: "🩺",
    color: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    id: "business",
    name: "Business",
    degrees: "MBA, BBA",
    image: "/courses/business.jpg",
    slug: "business",
    icon: "💼",
    color: "from-amber-50 to-amber-100",
    iconBg: "bg-amber-100",
  },
];

export const SERVICES = [
  {
    icon: "📋",
    title: "Application Guidance",
    description: "Step-by-step support through the entire admission process",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "🎓",
    title: "Scholarship Support",
    description: "Find and apply for scholarships to reduce your tuition costs",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    description: "100% visa support with 95% success rate across all countries",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: "✈️",
    title: "Airport Pickup & Accommodation",
    description: "Receive students and help them settle in comfortably",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: "🎧",
    title: "24/7 Student Support",
    description: "Round-the-clock assistance for all student needs",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: "🏠",
    title: "Post Arrival Support",
    description: "Bank accounts, SIM cards, local orientation and more",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Brian Otieno",
    country: "Kenya",
    university: "Parul University",
    course: "MBBS",
    avatar: "/testimonials/brian.jpg",
    rating: 5,
    content:
      "Studipinia made my dream of studying in India a reality. The support was incredible from application to visa to arriving on campus!",
    year: 2024,
  },
  {
    id: "2",
    name: "Amara Diallo",
    country: "Guinea",
    university: "Sharda University",
    course: "B.Tech Computer Science",
    avatar: "/testimonials/amara.jpg",
    rating: 5,
    content:
      "The counsellors guided me through every step. I got a scholarship and my visa approved in just 3 weeks. Truly exceptional service.",
    year: 2024,
  },
  {
    id: "3",
    name: "Ngozi Adeyemi",
    country: "Nigeria",
    university: "Lovely Professional University",
    course: "MBA",
    avatar: "/testimonials/ngozi.jpg",
    rating: 5,
    content:
      "Professional, transparent, and genuinely caring. Studipinia didn't just find me a university — they found me a future.",
    year: 2024,
  },
];

export const WHY_INDIA = [
  "World-class education at affordable cost",
  "Globally recognized degrees",
  "Diverse culture & safe environment",
  "English medium programs",
  "Excellent career opportunities",
];

export const WHY_CHOOSE = [
  {
    icon: "🎓",
    title: "100% Free Counselling",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "🏛️",
    title: "Top Ranked Universities",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: "🎁",
    title: "Scholarships Assistance",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: "🛂",
    title: "Visa Support From A to Z",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: "💰",
    title: "Affordable Education",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: "🎧",
    title: "24/7 Expert Support",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export const FAQS = [
  {
    id: "1",
    question: "Is counselling with Studipinia free?",
    answer:
      "Yes, 100%! Our counselling, application guidance, and admission support are completely free for students. We earn from university partnerships, not student fees.",
    category: "General",
  },
  {
    id: "2",
    question: "Which countries do you serve?",
    answer:
      "We primarily serve students from African countries including Kenya, Nigeria, Ghana, Uganda, Tanzania, Zimbabwe, Ethiopia, Cameroon, Senegal, Guinea, and 15+ others.",
    category: "General",
  },
  {
    id: "3",
    question: "What is the visa success rate?",
    answer:
      "Our visa success rate is 95%. Our experienced visa counsellors guide you through every document requirement and embassy procedure.",
    category: "Visa",
  },
  {
    id: "4",
    question: "Can I get a scholarship?",
    answer:
      "Yes! Many of our partner universities offer merit-based scholarships for international students. Our counsellors will help you identify and apply for relevant scholarships.",
    category: "Scholarships",
  },
  {
    id: "5",
    question: "How long does the admission process take?",
    answer:
      "Typically 2–4 weeks from application to receiving your admission letter, depending on the university and completeness of your documents.",
    category: "Admissions",
  },
  {
    id: "6",
    question: "What documents do I need?",
    answer:
      "Typically: passport, high school certificates, transcripts, passport-size photographs, and a medical certificate. Our team will provide a detailed checklist specific to your course.",
    category: "Documents",
  },
  {
    id: "7",
    question: "Do you help with accommodation?",
    answer:
      "Yes! We help arrange university hostels or private accommodation. We also provide airport pickup coordination so you're never alone when you arrive.",
    category: "Student Life",
  },
  {
    id: "8",
    question: "Are Indian degrees recognized internationally?",
    answer:
      "Yes. Indian degrees from accredited universities are recognized globally. Medical degrees (MBBS) are recognized by WHO, MCI, and medical councils in many countries.",
    category: "Academic",
  },
];

export const CRM_STAGES: { status: string; color: string; bg: string }[] = [
  { status: "New Lead", color: "text-blue-700", bg: "bg-blue-100" },
  { status: "Contacted", color: "text-yellow-700", bg: "bg-yellow-100" },
  { status: "Documents Received", color: "text-orange-700", bg: "bg-orange-100" },
  { status: "Application Submitted", color: "text-purple-700", bg: "bg-purple-100" },
  { status: "Admission Issued", color: "text-green-700", bg: "bg-green-100" },
  { status: "Visa Processing", color: "text-teal-700", bg: "bg-teal-100" },
  { status: "Enrolled", color: "text-indigo-700", bg: "bg-indigo-100" },
  { status: "Commission Completed", color: "text-emerald-700", bg: "bg-emerald-100" },
];
