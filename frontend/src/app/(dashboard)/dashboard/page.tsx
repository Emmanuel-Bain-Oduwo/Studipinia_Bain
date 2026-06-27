import type { Metadata } from "next";
import StudentDashboard from "@/components/dashboard/StudentDashboard";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Track your application status, documents, and progress on Studipinia.",
};

export default function DashboardPage() {
  return <StudentDashboard />;
}
