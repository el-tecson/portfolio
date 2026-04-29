"use client";

import { ScreenshotCarouselProps } from "@/types/components";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default function ScreenshotCarousel({
    className,
    projectData,
    inProjectCard,
    ...props
}: ScreenshotCarouselProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <>
            {projectData.screenshots && (
                <div
                    className="rounded-md overflow-hidden hover:transform-[scale(1.01)] transition duration-200 cursor-pointer"
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
                            const imgSrc = projectData.screenshots?.[index];
                            if (imgSrc) setSelectedImage(imgSrc);
                        }}
                    >
                        {projectData.screenshots?.map((imgSrc, index) => (
                            <div key={index}>
                                <img
                                    src={imgSrc}
                                    alt={`${projectData.title} Screenshot ${index}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        className="max-w-[100vw] max-h-[100vh] rounded-sm shadow-lg cursor-zoom-out"
                    />
                </div>
            )}
        </>
    )
}