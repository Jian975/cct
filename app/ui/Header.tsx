"use client";

import { Children, ReactNode, useEffect, useState } from "react";

interface HeaderProps {
    children: ReactNode;
}

export default function Header({
    children
}: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The header starts at mt-10 (40px) and sticks at top-5 (20px).
      // It becomes stuck once scrolled past ~20-30px.
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky w-[95vw] h-12 top-5 m-auto mt-10 z-[2] px-4 rounded-md transition-all duration-300 pt-[5] ${
        isSticky
          ? "bg-black/30 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
        {children}
    </div>
  )
}