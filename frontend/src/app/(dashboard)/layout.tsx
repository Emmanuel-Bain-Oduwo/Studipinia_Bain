import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8faff]">
      {children}
      <WhatsAppButton />
    </div>
  );
}
