"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-sand-light lg:flex-row">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-6 sm:p-8 lg:p-10">{children}</main>
    </div>
  );
}
