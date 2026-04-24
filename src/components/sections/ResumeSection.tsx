import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import CVCard from "../ui/cv-card"

export default function ResumeSection() {
    return (
        <section id="resume" className="
            bg-hero-section  min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        ">
            <div className="border border-home-txt text-txt p-2.5 sm:p-3.75 rounded-lg">
                <h2 className="text-home-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
                    Resume (Preview)
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-20 lg:flex-row">
                <div className="flex flex-col gap-7.5 sm:gap-11.25 items-stretch self-stretch sm:flex-1">
                    <CVCard isHome={true} title="Short Summary">
                        <p className="font-normal tracking-normal normal-case text-base text-home-txt text-justify leading-relaxed sm:text-2xl lg:text-left">
                            Developer focused on building secure, high-performance web applications. Strong in algorithms, system design fundamentals, and application security principles. Passionate about creating software that is both scalable and resilient.
                        </p>
                    </CVCard>
                </div>
                <div className="flex flex-col gap-2 items-center sm:flex-1">
                    <CTAButton text="View Full Resume" href="/resume" />
                    <SubCTAButton text="Get In Touch" href="/contact" />
                </div>
            </div>
        </section>
    )
}