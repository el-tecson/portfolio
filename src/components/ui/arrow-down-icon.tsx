"use client"

import RawArrowDownIcon from "@/assets/arrow-down1.svg";
import { StandardProps } from "@/types/components";

export default function ArrowDownIcon({
    className,
}: Omit<StandardProps, "children">) {
    return (
        <RawArrowDownIcon className={`
            w-[48px] h-[48px] text-home-txt ${className}
        `} />
    )
}