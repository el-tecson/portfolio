import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import ProjectCard from "@/components/ui/project-card"

export default function ProjectsSection() {
    return (
        <section id="projects" className="
            bg-linear-to-b from-about-clr2 to-hero-section min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        ">
            <div className="border border-home-txt text-txt p-2.5 sm:p-3.75">
                <p className="text-home-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
                    Some of My Works
                </p>
            </div>
            <div className="flex flex-col gap-25 relative sm:flex-row sm:justify-between items-start">
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
