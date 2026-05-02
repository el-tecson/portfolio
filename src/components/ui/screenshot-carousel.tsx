"use client"

import { ScreenshotCarouselProps } from "@/types/components"
import Image from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Carousel } from "react-responsive-carousel"

export default function ScreenshotCarousel({
  className,
  projectData,
  inProjectCard,
  ...props
}: ScreenshotCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <>
      {projectData.screenshots && (
        <div
          className="rounded-md overflow-hidden hover:transform-[scale(1.01)] transition duration-200 cursor-pointer min-w-0 w-full"
          onClick={inProjectCard ? (e) => e.stopPropagation() : undefined}
        >
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay
            interval={6000}
            onClickItem={(index) => {
              const imgSrc = projectData.screenshots?.[index]
              if (imgSrc) setSelectedImage(imgSrc)
            }}
          >
            {projectData.screenshots?.map((imgSrc, index) => (
              <div key={index} className="relative w-full aspect-[3/2]">
                <Image src={imgSrc} alt={`${projectData.title} Screenshot ${index}`} fill />
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <img
              src={selectedImage}
              className="max-w-[100vw] max-h-[100vh] rounded-sm shadow-lg cursor-zoom-out"
            />
          </div>,
          document.body
        )}
    </>
  )
}
