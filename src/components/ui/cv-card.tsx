"use client"

import { CVCardProps } from "@/types/components"
import { useRouter } from "next/navigation"
import CVIcon from "@/assets/cv-icon.svg"
import linksData from "@/data/links.json"
import Link from "./link"

export default function CVCard({ className, children, title, isHome, ...props }: CVCardProps) {
  const router = useRouter()
  return (
    <div
      className={`
            ${isHome ? "bg-home-overlay border border-solid border-home-txt" : "bg-overlay"} rounded-lg shadow-md hover:shadow-lg active:shadow-lg transition
            px-[15px] py-[30px] sm:px-[22.5px] sm:py-[45px] flex flex-col gap-4 cursor-pointer
            hover:transform-[scale(1.01)_translateY(-2px)] active:transform-[scale(1.01)_translateY(-2px)] duration-200
            ${className}
            `}
      onClick={() => router.push(`/resume`)}
      {...props}
    >
      <h3 className={`font-semibold ${isHome ? "text-home-txt" : "text-txt"} text-xl sm:text-3xl`}>
        {title}
      </h3>
      {children}
      <Link
        href={linksData.cv_link}
        className="self-end"
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`
                    flex flex-row gap-1 p-2.5 rounded-md shadow-sm
                    ${isHome ? "bg-home-accent" : "bg-accent"} hover:opacity-90 active:opacity-90
                    justify-center items-center cursor-pointer sm:p-3.875 sm:py-1.875
                    hover:transform-[scale(1.01)_translateY(-2px)] active:transform-[scale(1.01)_translateY(-2px)] transition duration-200
                `}
        >
          <p
            className={`
                        text-base font-sans tracking-wider uppercase font-medium
                        ${isHome ? "text-home-overlay" : "text-overlay"} sm:text-2xl
                    `}
          >
            Download CV
          </p>
          <CVIcon
            className={`
                        w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]
                        ${isHome ? "fill-home-overlay text-home-overlay" : "fill-overlay text-overlay"}
                    `}
          />
        </button>
      </Link>
    </div>
  )
}
