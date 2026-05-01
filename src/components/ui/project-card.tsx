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
            gap-5 rounded-2xl sm:rounded-4xl cursor-pointer sm:max-w-[600px] sm:gap-7.5 flex-1
            ${isHome ? "bg-home-overlay text-home-txt hover:bg-home-overlay/90" : "bg-overlay text-txt hover:bg-overlay/90"}
            hover:transform-[scale(1.01)_translateY(2px)] transition duration-200 sm:min-w-[500px]
        `}
      key={projectName}
      pushTo={`/projects/${projectName}`}
    >
      <h3 className="font-medium text-lg sm:text-[27px]">{project.title}</h3>
      <ScreenshotCarousel projectData={project} inProjectCard={true} />
      <p className="font-light text-base sm:text-2xl normal-case tracking-normal">
        {project.shortExcerpt}
      </p>
      {project.techStack && (
        <div className="flex flex-row gap-1.25">
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
