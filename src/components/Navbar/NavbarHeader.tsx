"use client"

import { StandardProps } from "@/types/components"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavbarHeader({ children, className, ...props }: StandardProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? (isHome ? "bg-home-nav-bg/90" : "bg-nav-bg/90") + " shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
      {...props}
    >
      {children}
    </header>
  )
}
