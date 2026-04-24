"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/hooks/useSession";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";

export default function PrimeHacksNavbar() {
  const { data: user, isPending } = useCurrentUser();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <DesktopNav
        user={user}
        isPending={isPending}
        scrolled={scrolled}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        setMobileOpen={setMobileOpen}
        searchInputRef={searchInputRef}
      />

      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        user={user}
        isActive={isActive}
      />
    </header>
  );
}
