"use client";

import LogoIcon from "@/assets/logo.svg"
import { StandardProps } from "@/types/components";

export function Logo({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <LogoIcon className={className} {...props} />
}