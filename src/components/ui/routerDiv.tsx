"use client";

import { RouterDivProps } from "@/types/components";
import { useRouter } from "next/navigation";

export default function RouterDiv({
    className,
    children,
    pushTo,
    ...props
}: RouterDivProps) {
    const router = useRouter();
    return (
        <div
            className={className}
            onClick={() => router.push(pushTo)}
            {...props}
        >
            {children}
        </div>
    )
}