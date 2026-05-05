"use client"

import { ListItemProps } from "@/types/components"
import { usePathname } from "next/navigation"
import Link from "@/components/ui/link"

export default function NavbarListItem({
  children,
  className = "",
  watchPath,
  ...props
}: ListItemProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isPath = pathname === watchPath
  return (
    <Link href={watchPath} className="h-full">
      <li
        className={`
                    transition-colors duration-200
                    ${
                      isPath
                        ? isHome
                          ? "text-home-accent"
                          : "text-accent"
                        : isHome
                          ? "text-home-txt hover:text-home-accent active:text-home-accent"
                          : "text-txt hover:text-accent active:text-accent"
                    }
                    flex justify-center items-center
                    text-base font-normal h-full
                    ${className}
            `}
        {...props}
      >
        {children}
      </li>
    </Link>
  )
}
