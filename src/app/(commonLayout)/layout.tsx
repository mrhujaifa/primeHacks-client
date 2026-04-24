import PrimeHacksFooter from "@/components/layouts/Footer";
import PrimeHacksNavbar from "@/components/layouts/navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PrimeHacksNavbar />
      {children}
      <PrimeHacksFooter />
    </div>
  );
};

export default CommonLayout;
