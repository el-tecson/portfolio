"use client";

import { GithubButtonProps } from "@/types/components";
import GithubIcon from "@/assets/github.svg";
import Link from "./link";

export default function GithubButton({
    className,
    githubLink,
    isHome,
    ...props
}: GithubButtonProps) {
    return (
        <Link href={githubLink} className="self-center" target="_blank" onClick={(e) => e.stopPropagation()}>
            <button className={`
                flex flex-row gap-5 px-2.5 py-1.25 rounded-sm border
                ${isHome ? "border-home-txt" : "border-txt"} hover:opacity-90
                justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                hover:transform-[scale(1.01)_translateY(-2px)] transition duration-200
            `}>
                <p className={`
                    text-base font-sans tracking-wider uppercase font-medium
                    ${isHome ? "text-home-txt" : "text-txt"} sm:text-2xl
                `}>
                    View on Github
                </p>
                <GithubIcon className={`
                    w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]
                    ${isHome ? "fill-home-txt text-home-txt" : "fill-txt text-txt"}
                `}/>
            </button>
        </Link>
    )
}