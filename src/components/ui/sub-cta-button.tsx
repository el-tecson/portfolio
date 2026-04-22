import { ButtonProps } from "@/types/components";
import Link from "./link";

export default function SubCTAButton({
    className = "",
    text,
    href,
    align,
    ...props
}: ButtonProps) {
    const alignClasses = {
        start: "self-start",
        center: "self-center",
        end: "self-end",
        stretch: "self-stretch",
    };

    return (
        <Link href={href} className={align ? alignClasses[align] : ""}>
            <button
                className={`
                    border border-home-txt text-txt rounded-sm
                    transition duration-200
                    hover:transform-[translateY(2px)]
                    hover:opacity-80
                    cursor-pointer p-2 sm:p-3
                    flex flex-row shadow-xs hover:shadow-sm
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
