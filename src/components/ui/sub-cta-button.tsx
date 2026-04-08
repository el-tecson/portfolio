import { ButtonProps } from "@/types/components";
import Link from "./link";

export default function SubCTAButton({
    className = "",
    text,
    href,
    ...props
}: ButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`
                    border border-home-txt text-txt rounded-sm
                    transition-transform duration-200
                    hover:transform-[translateY(2px)]
                    cursor-pointer p-2 sm:p-3
                    ${className}
                `}
                {...props}
            >
                <p className="text-home-txt text-base sm:text-2xl font-sans uppercase tracking-wider font-normal">
                    {text}
                </p>
            </button>
        </Link>
    )
}
