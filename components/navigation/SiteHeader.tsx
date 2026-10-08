"use client";

import { useState } from "react";
import { Navbar, MobileMenu } from "@/components/navigation/Navbar";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
