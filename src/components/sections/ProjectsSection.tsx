import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import ProjectCard from "@/components/ui/project-card"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
            bg-hero-section min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        "
    >
      <div className="border border-home-txt text-txt p-2.5 sm:p-3.75 rounded-lg">
        <h2 className="text-home-txt text-xl sm:text-2xl font-sans uppercase tracking-wider font-bold">
          Some of My Works
        </h2>
      </div>
      <div className="flex flex-col gap-[50px] relative md:grid md:grid-cols-2 md:items-start md:self-stretch">
        <ProjectCard projectName="lichess-puzzle-timer" isHome={true} />
        <ProjectCard projectName="arduino-embedded-foundations" isHome={true} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <CTAButton text="View All Projects" href="/projects" />
        <SubCTAButton text="Work With Me" href="/contact" />
      </div>
    </section>
  )
}
