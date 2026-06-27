"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Upload,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  LogOut,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STAGES = [
  { label: "Application Submitted", done: true },
  { label: "Documents Verified", done: true },
  { label: "University Processing", done: false, active: true },
  { label: "Admission Letter", done: false },
  { label: "Visa Processing", done: false },
  { label: "Enrolled", done: false },
];

const DOCUMENTS = [
  { name: "Passport", status: "verified", date: "Jun 10, 2025" },
  { name: "High School Certificate", status: "verified", date: "Jun 10, 2025" },
  { name: "Transcript", status: "pending", date: "Jun 12, 2025" },
  { name: "Medical Certificate", status: "missing", date: "" },
  { name: "Passport Photo", status: "verified", date: "Jun 10, 2025" },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: FileText, label: "My Application", id: "application" },
  { icon: Upload, label: "Documents", id: "documents" },
  { icon: Calendar, label: "Consultations", id: "consultations" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B3C91] text-white flex flex-col flex-shrink-0">
        <div className="p-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#0B3C91] font-bold">S</span>
            </div>
            <span className="font-bold">Studipinia</span>
          </Link>
        </div>

        {/* Student info */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">Brian Otieno</div>
              <div className="text-blue-300 text-xs">MBBS Applicant</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                activeTab === item.id
                  ? "bg-white/20 text-white"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-blue-200 hover:bg-white/10 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="font-bold text-gray-900">
              {NAV_ITEMS.find((n) => n.id === activeTab)?.label}
            </h1>
            <p className="text-gray-400 text-xs">Welcome back, Brian!</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-50 text-gray-400">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Application Status", value: "In Progress", icon: "📋", color: "bg-blue-50 text-blue-700" },
                  { label: "Documents Uploaded", value: "4 / 5", icon: "📁", color: "bg-green-50 text-green-700" },
                  { label: "Next Action", value: "Upload Medical", icon: "⚠️", color: "bg-amber-50 text-amber-700" },
                ].map((stat) => (
                  <div key={stat.label} className={`p-5 rounded-2xl ${stat.color}`}>
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="font-black text-lg">{stat.value}</div>
                    <div className="text-sm opacity-75">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress Timeline */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-6">Application Progress</h2>
                <div className="space-y-4">
                  {STAGES.map((stage, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          stage.done
                            ? "bg-[#16A34A] text-white"
                            : stage.active
                            ? "bg-[#0B3C91] text-white"
                            : "bg-gray-100 text-gray-400"
                        )}
                      >
                        {stage.done ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : stage.active ? (
                          <Clock className="w-4 h-4 animate-pulse" />
                        ) : (
                          <span className="text-xs font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span
                          className={cn(
                            "text-sm font-medium",
                            stage.done
                              ? "text-[#16A34A]"
                              : stage.active
                              ? "text-[#0B3C91]"
                              : "text-gray-400"
                          )}
                        >
                          {stage.label}
                        </span>
                        {stage.active && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-gray-900">My Documents</h2>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B3C91] text-white text-sm font-medium hover:bg-[#082d6e] transition-colors">
                    <Upload className="w-4 h-4" /> Upload Document
                  </button>
                </div>
                <div className="space-y-3">
                  {DOCUMENTS.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{doc.name}</div>
                          {doc.date && <div className="text-gray-400 text-xs">Uploaded {doc.date}</div>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {doc.status === "verified" && (
                          <span className="flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">
                            <CheckCircle className="w-3 h-3" /> Verified
                          </span>
                        )}
                        {doc.status === "pending" && (
                          <span className="flex items-center gap-1 text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full font-medium">
                            <Clock className="w-3 h-3" /> Pending
                          </span>
                        )}
                        {doc.status === "missing" && (
                          <span className="flex items-center gap-1 text-xs text-red-700 bg-red-100 px-2 py-1 rounded-full font-medium">
                            <AlertCircle className="w-3 h-3" /> Required
                          </span>
                        )}
                        {doc.status !== "missing" && (
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(activeTab === "application" ||
            activeTab === "consultations" ||
            activeTab === "messages" ||
            activeTab === "settings") && (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-5xl mb-4">🚧</div>
              <h2 className="font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-500 text-sm">
                This section is being built. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
