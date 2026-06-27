"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  University,
  BookOpen,
  Users,
  GraduationCap,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CRM_STAGES } from "@/lib/constants";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: University, label: "Universities", id: "universities" },
  { icon: BookOpen, label: "Courses", id: "courses" },
  { icon: Users, label: "Students & Leads", id: "leads" },
  { icon: GraduationCap, label: "Scholarships", id: "scholarships" },
  { icon: FileText, label: "Blog", id: "blog" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const MOCK_LEADS = [
  { id: "1", name: "Brian Otieno", email: "brian@example.com", country: "Kenya", course: "MBBS", status: "Application Submitted", date: "Jun 27, 2025" },
  { id: "2", name: "Amara Diallo", email: "amara@example.com", country: "Guinea", course: "B.Tech", status: "Contacted", date: "Jun 26, 2025" },
  { id: "3", name: "Ngozi Adeyemi", email: "ngozi@example.com", country: "Nigeria", course: "MBA", status: "New Lead", date: "Jun 25, 2025" },
  { id: "4", name: "Kwame Asante", email: "kwame@example.com", country: "Ghana", course: "MBBS", status: "Visa Processing", date: "Jun 24, 2025" },
  { id: "5", name: "Fatima Diop", email: "fatima@example.com", country: "Senegal", course: "B.Pharm", status: "Enrolled", date: "Jun 20, 2025" },
];

const UNIVERSITIES_LIST = [
  { id: "1", name: "Parul University", location: "Vadodara, India", students: 234, status: "Active" },
  { id: "2", name: "Sharda University", location: "Greater Noida, India", students: 189, status: "Active" },
  { id: "3", name: "Chandigarh University", location: "Chandigarh, India", students: 156, status: "Active" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");

  const filteredLeads = MOCK_LEADS.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col flex-shrink-0">
        <div className="p-5 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0B3C91] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <div>
              <div className="font-bold text-sm">Studipinia</div>
              <div className="text-gray-400 text-[10px]">Admin Panel</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                activeTab === item.id
                  ? "bg-[#0B3C91] text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-[#f8faff]">
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-bold text-gray-900">
            {NAV_ITEMS.find((n) => n.id === activeTab)?.label}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
            Admin
          </div>
        </div>

        <div className="p-6">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Leads", value: "1,248", trend: "+12%", icon: "👥", color: "bg-blue-50 text-blue-600" },
                  { label: "Active Applications", value: "342", trend: "+8%", icon: "📋", color: "bg-purple-50 text-purple-600" },
                  { label: "Enrolled This Year", value: "198", trend: "+23%", icon: "🎓", color: "bg-green-50 text-green-600" },
                  { label: "Visa Approvals", value: "94%", trend: "+2%", icon: "🛂", color: "bg-amber-50 text-amber-600" },
                ].map((stat) => (
                  <div key={stat.label} className={`p-5 rounded-2xl ${stat.color}`}>
                    <div className="text-2xl mb-3">{stat.icon}</div>
                    <div className="font-black text-2xl text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="flex items-center gap-1 mt-1 text-green-600 text-xs font-medium">
                      <TrendingUp className="w-3 h-3" /> {stat.trend} this month
                    </div>
                  </div>
                ))}
              </div>

              {/* CRM Pipeline */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-4">CRM Pipeline</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                  {CRM_STAGES.map((stage, i) => (
                    <div key={i} className={`p-3 rounded-xl ${stage.bg} text-center`}>
                      <div className={`text-xl font-black ${stage.color}`}>{Math.floor(Math.random() * 50) + 5}</div>
                      <div className={`text-[10px] font-medium ${stage.color} leading-tight mt-1`}>{stage.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Recent Leads</h2>
                  <button
                    onClick={() => setActiveTab("leads")}
                    className="text-[#0B3C91] text-sm font-medium hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs">
                        <th className="text-left pb-3 font-medium">Name</th>
                        <th className="text-left pb-3 font-medium">Course</th>
                        <th className="text-left pb-3 font-medium">Status</th>
                        <th className="text-left pb-3 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {MOCK_LEADS.slice(0, 3).map((lead) => {
                        const stage = CRM_STAGES.find((s) => s.status === lead.status);
                        return (
                          <tr key={lead.id}>
                            <td className="py-3">
                              <div className="font-medium text-gray-900">{lead.name}</div>
                              <div className="text-gray-400 text-xs">{lead.country}</div>
                            </td>
                            <td className="py-3 text-gray-600">{lead.course}</td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stage?.bg} ${stage?.color}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="py-3 text-gray-400 text-xs">{lead.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Leads */}
          {activeTab === "leads" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search students..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C91]"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B3C91] text-white text-sm font-medium hover:bg-[#082d6e] transition-colors">
                  <Plus className="w-4 h-4" /> Add Lead
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr className="text-gray-500 text-xs">
                        {["Name", "Email", "Course", "Country", "Status", "Date", "Actions"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredLeads.map((lead) => {
                        const stage = CRM_STAGES.find((s) => s.status === lead.status);
                        return (
                          <tr key={lead.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                            <td className="px-4 py-3 text-gray-500">{lead.email}</td>
                            <td className="px-4 py-3 text-gray-600">{lead.course}</td>
                            <td className="px-4 py-3 text-gray-600">{lead.country}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stage?.bg} ${stage?.color}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-400 text-xs">{lead.date}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <button className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-[#0B3C91]">
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600">
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Universities */}
          {activeTab === "universities" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-gray-700 text-sm">
                  {UNIVERSITIES_LIST.length} universities registered
                </h2>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B3C91] text-white text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add University
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {UNIVERSITIES_LIST.map((uni) => (
                  <div key={uni.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl font-black text-[#0B3C91]">
                        {uni.name.charAt(0)}
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        {uni.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{uni.name}</h3>
                    <p className="text-gray-400 text-xs mb-3">{uni.location}</p>
                    <p className="text-[#0B3C91] text-sm font-bold">
                      {uni.students} students enrolled
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="flex-1 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium transition-colors">
                        Edit
                      </button>
                      <button className="flex-1 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0B3C91] text-xs font-medium transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
                {/* Add new */}
                <button className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-5 hover:border-[#0B3C91] hover:bg-blue-50 transition-all flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-[#0B3C91] min-h-[160px]">
                  <Plus className="w-8 h-8" />
                  <span className="text-sm font-medium">Add University</span>
                </button>
              </div>
            </div>
          )}

          {["courses", "scholarships", "blog", "analytics", "settings"].includes(activeTab) && (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-5xl mb-4">🚧</div>
              <h2 className="font-bold text-gray-900 mb-2">Module Coming Soon</h2>
              <p className="text-gray-500 text-sm">
                This admin module is being built and will be available soon.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
