import rawProjectsData from "@/data/projects.json"
import { ProjectCardProps } from "@/types/components"
import { Babel, CPlusPlus, CSS, NodeJs, React, TypeScript, ViteJS } from "developer-icons"
import { JSX } from "react"
import ProgressStatus from "@/components/ui/progress-status"
import { Project } from "@/types/data"
import GithubButton from "./github-button"
import ScreenshotCarousel from "./screenshot-carousel"
import RouterDiv from "./routerDiv"

const projectsData = rawProjectsData as Record<string, Project>

export default function ProjectCard({ projectName, isHome }: ProjectCardProps) {
  const project = projectsData[projectName]
  const devIcons: Record<string, JSX.Element> = {
    React: <React className="w-12 h-12 sm:w-18 sm:h-18" />,
    NodeJS: <NodeJs className="w-12 h-12 sm:w-18 sm:h-18" />,
    Typescript: <TypeScript className="w-12 h-12 sm:w-18 sm:h-18" />,
    CSS: <CSS className="w-12 h-12 sm:w-18 sm:h-18" />,
    Vite: <ViteJS className="w-12 h-12 sm:w-18 sm:h-18" />,
    Babel: <Babel className="w-12 h-12 sm:w-18 sm:h-18" />,
    "C++": <CPlusPlus className="w-12 h-12 sm:w-18 sm:h-18" />,
  }
  return (
    <RouterDiv
      className={`
            flex flex-col py-7.5 px-3.75 sm:py-11.25 sm:px-7.5 shadow-md hover:shadow-lg
            gap-5 rounded-2xl cursor-pointer sm:gap-7.5 flex-1 select-none min-w-0 w-full
            ${isHome ? "bg-home-overlay text-home-txt transition-transform border border-solid border-home-txt" : "bg-overlay transition text-txt hover:bg-overlay/90"}
            hover:transform-[scale(1.01)_translateY(2px)] duration-200
        `}
      key={projectName}
      pushTo={`/projects/${projectName}`}
    >
      <h3 className="font-bold text-lg sm:text-[27px]">{project.title}</h3>
      <ScreenshotCarousel projectData={project} inProjectCard={true} />
      <p
        className={`font-normal text-base sm:text-2xl normal-case tracking-normal ${isHome ? "text-home-txt/80" : "text-txt/80"}`}
      >
        {project.shortExcerpt}
      </p>
      {project.techStack && (
        <div className="flex flex-row gap-1.25 w-full min-w-0 flex-wrap">
          {project.techStack?.map((tech) => (
            <span key={tech}>{devIcons[tech]}</span>
          ))}
        </div>
      )}
      <ProgressStatus variant={project.status} isHome={isHome} />
      <GithubButton githubLink={project.githubLink} isHome={isHome} />
    </RouterDiv>
  )
}
