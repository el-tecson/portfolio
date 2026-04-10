import { ButtonProps } from "@/types/components";
import Link from "./link";

export default function CTAButton({
    className = "",
    text,
    href,
    ...props
}: ButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`
                    bg-home-accent text-txt rounded-sm
                    transition duration-200
                    hover:bg-home-accent-darker
                    hover:transform-[translateY(2px)]
                    cursor-pointer p-2.5 sm:p-3.75
                    flex flex-row
                    ${className}
                `}
                {...props}
            >
                <p className="text-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
                    {text}
                </p>
            </button>
        </Link>
    )
}