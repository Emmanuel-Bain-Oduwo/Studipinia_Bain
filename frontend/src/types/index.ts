export interface University {
  id: string;
  name: string;
  slug: string;
  location: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  coverImage: string;
  ranking?: number;
  established?: number;
  description: string;
  shortDescription: string;
  accreditation: string[];
  courses: Course[];
  scholarshipsAvailable: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  website?: string;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  universityId: string;
  category: CourseCategory;
  degree: string;
  duration: string;
  annualFee: number;
  currency: string;
  description: string;
  eligibility: string;
  seats?: number;
  scholarshipAvailable: boolean;
  featured: boolean;
}

export type CourseCategory =
  | "Medicine"
  | "Engineering"
  | "Pharmacy"
  | "Nursing"
  | "Business"
  | "Law"
  | "Arts"
  | "Science"
  | "Architecture"
  | "Dentistry"
  | "Ayurveda"
  | "Other";

export interface Scholarship {
  id: string;
  name: string;
  universityId?: string;
  amount: number;
  currency: string;
  type: "Merit" | "Need-Based" | "Sports" | "Government" | "Special";
  eligibility: string;
  description: string;
  deadline?: string;
  renewable: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  course: string;
  avatar?: string;
  rating: number;
  content: string;
  year: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interestedCourse?: string;
  interestedUniversity?: string;
  message?: string;
  status: LeadStatus;
  assignedTo?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type LeadStatus =
  | "New Lead"
  | "Contacted"
  | "Documents Received"
  | "Application Submitted"
  | "Admission Issued"
  | "Visa Processing"
  | "Enrolled"
  | "Commission Completed";

export interface Student {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  dateOfBirth?: string;
  gender?: string;
  passportNumber?: string;
  passportExpiry?: string;
  highSchoolGrade?: string;
  highSchoolSubjects?: string[];
  preferredCourse?: string;
  preferredUniversity?: string;
  applicationStatus: LeadStatus;
  documents: Document[];
  createdAt: string;
}

export interface Document {
  id: string;
  studentId: string;
  type: DocumentType;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  verified: boolean;
}

export type DocumentType =
  | "Passport"
  | "High School Certificate"
  | "Transcript"
  | "Birth Certificate"
  | "Medical Certificate"
  | "Passport Photo"
  | "Other";

export interface ConsultationBooking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  preferredDate: string;
  preferredTime: string;
  mode: "Video Call" | "WhatsApp" | "Phone";
  notes?: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  counsellorId?: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
