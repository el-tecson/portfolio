import BackButton from "@/components/ui/back-button"
import { ProjectRouteProps } from "@/types/routes"
import rawProjectsData from "@/data/projects.json"
import { Project } from "@/types/data"
import ScreenshotCarousel from "@/components/ui/screenshot-carousel"
import ProgressStatus from "@/components/ui/progress-status"
import CustomButton from "@/components/ui/custom-button"
import {
  CaseStudyIcon,
  ChromeWebStoreIcon,
  FirefoxIcon,
  LiveDemoIcon,
  SourceCodeIcon,
} from "@/components/ui/icons"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import fs from "fs/promises"
import path from "path"
import Link from "@/components/ui/link"

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { projectName } = await params
  const projectsData = rawProjectsData as Record<string, Project>
  if (!(projectName in projectsData)) return null
  const project = projectsData[projectName]
  const filePath = path.join(process.cwd(), "public", project.readmeSrc)
  const readmeContent = await fs.readFile(filePath, "utf-8")
  return (
    <main className="flex flex-col gap-[50px] justify-start bg-bg min-h-screen px-mobile-scr-mg-x py-25 pt-35 sm:px-scr-mg-x">
      <BackButton />
      <section
        className="px-4 py-8 rounded-2xl bg-overlay w-full min-w-0 shadow-sm flex flex-col gap-4 sm:max-w-[800px] sm:gap-8 sm:px-10 sm:py-20 sm:rounded-4xl self-center"
        id="project-view"
      >
        <h2 className="text-2xl font-bold text-txt sm:text-4xl">Project: {project.title}</h2>
        <p className="font-normal text-base text-txt/80 normal-case tracking-normal sm:text-2xl">
          {project.shortExcerpt}
        </p>
        <ScreenshotCarousel projectData={project} />
        <ProgressStatus variant={project.status} isHome={false} />
        <div className="flex flex-row flex-wrap gap-2">
          {project.liveDemoLink && (
            <CustomButton
              buttonText="Live Demo"
              buttonLink={project.liveDemoLink}
              ButtonIcon={LiveDemoIcon}
            />
          )}
          {project.extensionLink && (
            <CustomButton
              buttonText="Chrome Web Store"
              buttonLink={project.extensionLink}
              ButtonIcon={ChromeWebStoreIcon}
            />
          )}
          {project.firefoxAddonLink && (
            <CustomButton
              buttonText="Firefox Add-on"
              buttonLink={project.firefoxAddonLink}
              ButtonIcon={FirefoxIcon}
            />
          )}
          {project.githubLink && (
            <CustomButton
              buttonText="Source Code"
              buttonLink={project.githubLink}
              ButtonIcon={SourceCodeIcon}
            />
          )}
          {project.readmeSrc && (
            <CustomButton
              buttonText="Case Study"
              buttonLink="#case-study"
              ButtonIcon={CaseStudyIcon}
            />
          )}
        </div>
        <section id="case-study" className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-bold text-txt mt-12 mb-1">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-bold text-txt normal-case">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-base text-txt/80 normal-case tracking-normal leading-relaxed mb-2">
                  {children}
                </p>
              ),
              a: ({ children, href }) => (
                <Link
                  target="_blank"
                  className="underline decoration-1.5 underline-offset-2"
                  href={href as string}
                >
                  {children}
                </Link>
              ),
              ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
              li: ({ children }) => (
                <li className="text-base text-txt/80 normal-case tracking-normal leading-relaxed">
                  {children}
                </li>
              ),
              table: ({ children }) => (
                <div className="w-full overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-txt/10 text-left">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => <thead className="bg-accent/5">{children}</thead>,

              tbody: ({ children }) => <tbody>{children}</tbody>,

              tr: ({ children }) => (
                <tr className="border-b border-txt/10 hover:bg-txt/3 transition-colors">
                  {children}
                </tr>
              ),

              th: ({ children }) => (
                <th
                  className="
                                    px-4 py-3
                                    font-semibold
                                    text-sm uppercase tracking-wider
                                    text-txt
                                "
                >
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td
                  className="
                                    px-4 py-3
                                    text-sm text-txt/80
                                    align-top
                                "
                >
                  {children}
                </td>
              ),
            }}
          >
            {readmeContent}
          </ReactMarkdown>
        </section>
        <Link href="/projects" className="self-center mt-12">
          <button
            className={`
                        flex flex-row gap-1 px-6 py-3 rounded-full border
                        border-accent hover:opacity-90
                        justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                        hover:transform-[scale(1.01)_translateY(-2px)] transition duration-200
                    `}
          >
            <p
              className={`
                            text-2xl font-sans tracking-wider uppercase font-bold
                            text-accent sm:text-2xl
                        `}
            >
              See More Projects
            </p>
          </button>
        </Link>
      </section>
    </main>
  )
}
