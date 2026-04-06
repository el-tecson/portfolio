"use client";

import { ListItemProps } from "@/types/components";
import { usePathname } from "next/navigation";
import Link from "@/components/ui/link";

export default function SidebarListItem({
    children,
    className = "",
    watchPath,
    ...props
} : ListItemProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isPath = pathname === watchPath;
    return (
        <Link href={watchPath}>
            <li className={`
                    py-sb-item-pad transition-colors duration-200
                    ${ isPath ?
                        (isHome ? "text-home-nav-bg bg-home-txt" : "text-nav-bg bg-txt") :
                        (isHome ?
                            "text-home-txt hover:text-home-nav-bg hover:bg-home-txt" :
                            "text-txt hover:text-nav-bg hover:bg-txt"
                        )
                    }
                    border-b ${ isHome ?
                        "border-home-txt/50" : "border-txt/50"
                    }
                    text-sb-item-size font-semibold
                    ${className}
            `}
            {...props}
            >
                {children}
            </li>
        </Link>
    )
}