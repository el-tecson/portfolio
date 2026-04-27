"use client";

import rawProjectsData from "@/data/projects.json";
import { ProjectCardProps } from "@/types/components";
import { Babel, CPlusPlus, CSS, NodeJs, React, TypeScript, ViteJS } from "developer-icons";
import { JSX, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ProgressStatus from "@/components/ui/progress-status";
import { Project } from "@/types/data";
import Link from "@/components/ui/link";
import GithubIcon from "@/assets/github.svg";
import { useRouter } from "next/navigation";

const projectsData = rawProjectsData as Record<string, Project>;

export default function ProjectCard({ projectName, isHome }: ProjectCardProps) {
    const project = projectsData[projectName];
    const devIcons: Record<string, JSX.Element> = {
        "React": <React className="w-12 h-12 sm:w-18 sm:h-18" />,
        "NodeJS": <NodeJs className="w-12 h-12 sm:w-18 sm:h-18" />,
        "Typescript": <TypeScript className="w-12 h-12 sm:w-18 sm:h-18" />,
        "CSS": <CSS className="w-12 h-12 sm:w-18 sm:h-18" />,
        "Vite": <ViteJS className="w-12 h-12 sm:w-18 sm:h-18" />,
        "Babel": <Babel className="w-12 h-12 sm:w-18 sm:h-18" />,
        "C++": <CPlusPlus className="w-12 h-12 sm:w-18 sm:h-18" />
    }
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className={`
                flex flex-col py-7.5 px-3.75 sm:py-11.25 sm:px-7.5 shadow-md hover:shadow-lg
                gap-5 rounded-lg cursor-pointer sm:max-w-[600px] sm:gap-7.5 flex-1
                ${isHome ? "bg-home-overlay text-home-txt hover:bg-home-overlay/90" : "bg-overlay text-txt hover:bg-overlay/90"}
                hover:transform-[scale(1.01)_translateY(2px)] transition duration-200
            `} key={projectName} onClick={() => router.push(`/projects/${projectName}`)}>
                <h3 className="font-medium text-lg sm:text-[27px]">
                    {project.title}
                </h3>
                {project.screenshots && (
                    <div
                        className="rounded-md overflow-hidden hover:transform-[scale(1.01)] transition duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Carousel
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={true}
                            autoPlay
                            interval={6000}
                            onClickItem={(index) => {
                                const imgSrc = project.screenshots?.[index];
                                if (imgSrc) setSelectedImage(imgSrc);
                            }}
                        >
                            {project.screenshots?.map((imgSrc, index) => (
                                <div key={index}>
                                    <img
                                        src={imgSrc}
                                        alt={`${project.title} Screenshot ${index}`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
                <p className="font-light text-base sm:text-2xl normal-case tracking-normal">
                    {project.shortExcerpt}
                </p>
                <div className="flex flex-row gap-1.25">
                    {project.techStack.map(tech => (
                        <span key={tech}>
                            {devIcons[tech]}
                        </span>
                    ))}
                </div>
                <ProgressStatus variant={project.status} isHome={isHome} />
                <Link href={project.githubLink} className="self-center" target="_blank" onClick={(e) => e.stopPropagation()}>
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
            </div>
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