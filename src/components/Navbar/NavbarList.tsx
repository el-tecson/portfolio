"use client";

import { StandardProps } from "@/types/components";
import { usePathname } from "next/navigation";

export default function NavbarList({
    children,
    className = "",
    ...props
} : StandardProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <ul className={`
                hidden sm:flex gap-5
                flex-row items-center justify-center h-auto
                ${ isHome ? "text-home-txt" : "text-txt" }
                text-center
                ${className}
          `}
          {...props}
        >
            {children}
        </ul>
    )
}