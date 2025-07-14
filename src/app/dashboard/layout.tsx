import { Navbar, Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <main className="w-full h-screen flex flex-col overflow-y-scroll">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
