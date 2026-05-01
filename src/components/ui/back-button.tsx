"use client"

import { useRouter } from "next/navigation"
import { BackIcon } from "@/components/ui/icons"
import { StandardProps } from "@/types/components"

export default function BackButton({ className, ...props }: Omit<StandardProps, "children">) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={`
                flex flex-row gap-1 items-center cursor-pointer
                hover:transform-[scale(1.01)_translateY(-1px)]
                hover:opacity-90 transition duration-200
                ${className}
            `}
      {...props}
    >
      <BackIcon className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] text-txt fill-txt" />
      <p className="text-txt text-base tracking-wider uppercase sm:text-xl">Back</p>
    </button>
  )
}
