import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/Dashboard/DashboardSidebar";
import React from "react";

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer bg-[#071521] text-slate-100 lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content min-h-screen">
        <DashboardNavbar />

        <main className="min-h-[calc(100vh-74px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          {children}
        </main>
      </div>

      <div className="drawer-side z-50 is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay bg-black/45 lg:bg-transparent"
        />

        <div className="min-h-full border-r border-white/10">
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardRootLayout;
