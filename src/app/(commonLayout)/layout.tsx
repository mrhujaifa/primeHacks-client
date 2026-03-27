import PrimeHacksNavbar from "@/components/layouts/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PrimeHacksNavbar />
      {children}
    </div>
  );
};

export default CommonLayout;
