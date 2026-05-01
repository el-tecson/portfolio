"use client"

import { CustomButtonProps } from "@/types/components"
import Link from "./link"

export default function CustomButton({
  className,
  buttonText,
  buttonLink,
  ButtonIcon,
  ...props
}: CustomButtonProps) {
  return (
    <Link
      href={buttonLink}
      className="self-center"
      target={buttonLink.startsWith("#") ? "_self" : "_blank"}
    >
      <button
        className={`
                flex flex-row gap-1 p-1 rounded-sm border
                border-txt hover:opacity-90
                justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                hover:transform-[scale(1.01)_translateY(-2px)] transition duration-200
            `}
      >
        <ButtonIcon
          className={`
                    w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]
                    fill-txt text-txt
                `}
        />
        <p
          className={`
                    text-base font-sans tracking-wider uppercase font-medium
                    text-txt sm:text-2xl
                `}
        >
          {buttonText}
        </p>
      </button>
    </Link>
  )
}
