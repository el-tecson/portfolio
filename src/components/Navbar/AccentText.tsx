"use client";

import type { StandardProps } from "@/types/components";
import { usePathname } from "next/navigation";

export default function AccentText({
    children,
    className = "",
    ...props
}: StandardProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <span
            className={
                isHome ? "text-home-accent " : "text-accent "
                + className
            }
            {...props}
        >
            {children}
        </span>
    )
}