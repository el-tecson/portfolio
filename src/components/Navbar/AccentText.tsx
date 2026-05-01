"use client"

import type { AccentTextProps } from "@/types/components"
import { usePathname } from "next/navigation"

export default function AccentText({
  children,
  className = "",
  fading = false,
  ...props
}: AccentTextProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <span
      className={`
                ${isHome ? "text-home-accent " : "text-accent "}
                ${fading ? "animate-accent-fade " : ""}
                ${className}
            `}
      {...props}
    >
      {children}
    </span>
  )
}
