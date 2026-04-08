"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyColorController() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    if (pathname === "/") {
      body.classList.add("bg-hero-bg");
      body.classList.remove("bg-bg");
    } else {
      body.classList.add("bg-bg");
      body.classList.remove("bg-hero-bg");
    }
  }, [pathname]);

  return null;
}