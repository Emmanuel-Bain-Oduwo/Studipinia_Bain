import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Studipinia admin panel — manage universities, students, enquiries and more.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
