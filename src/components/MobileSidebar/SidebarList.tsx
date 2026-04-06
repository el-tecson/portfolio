"use client";

import { StandardProps } from "@/types/components";
import { usePathname } from "next/navigation";

export default function SidebarList({
    children,
    className = "",
    ...props
} : StandardProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <ul className={`
                flex
                flex-col items-stretch justify-center w-auto
                ${ isHome ? "text-home-txt" : "text-txt" }
                text-center min-h-full
                ${className}
          `}
          {...props}
        >
            {children}
        </ul>
    )
}