"use client"

import { Logo } from "@/components/ui/icons"
import { usePathname } from "next/navigation"
import AccentText from "./AccentText"

export default function NavbarLogo() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  return (
    <>
      <Logo
        className={`
                logo
                ${isHome ? "fill-home-logo-clr" : "fill-logo-clr"}
                w-16 h-16
            `}
      />
    </>
  )
}
