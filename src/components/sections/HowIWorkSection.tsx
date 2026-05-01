import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import ArrowDownIcon from "@/components/ui/arrow-down-icon"

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="
            bg-hero-section  min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        "
    >
      <div className="border border-home-txt text-txt p-2.5 sm:p-3.75 rounded-lg">
        <h2 className="text-home-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
          How I Work
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row gap-7.5 xl:gap-2.5 items-center xl:items-stretch">
        <div
          className="
                    flex flex-col gap-[20px] px-[15px] py-[30px] bg-home-overlay
                    rounded-md border border-solid border-home-txt shadow-sm hover:shadow-md
                    transition hover:transform-[scale(1.01)] duration-200 xl:flex-1
                "
        >
          <h3 className="text-center font-bold text-home-txt text-2xl">Step 1 — Understand</h3>
          <p className="font-normal tracking-normal text-home-txt text-justify leading-relaxed normal-case text-2xl sm:text-left">
            I start by understanding the problem, the goal, and what actually needs to be built—not
            just what’s asked.
          </p>
        </div>
        <ArrowDownIcon className="xl:rotate-[-90deg] xl:self-center" />
        <div
          className="
                    flex flex-col gap-[20px] px-[15px] py-[30px] bg-home-overlay
                    rounded-md border border-solid border-home-txt shadow-sm hover:shadow-md
                    transition hover:transform-[scale(1.01)] duration-200 xl:flex-1
                "
        >
          <h3 className="text-center font-bold text-home-txt text-2xl">Step 2 — Design</h3>
          <p className="font-normal tracking-normal text-home-txt text-justify leading-relaxed normal-case text-2xl sm:text-left">
            I plan clean, simple systems and structure the solution before writing code.
          </p>
        </div>
        <ArrowDownIcon className="xl:rotate-[-90deg] xl:self-center" />
        <div
          className="
                    flex flex-col gap-[20px] px-[15px] py-[30px] bg-home-overlay
                    rounded-md border border-solid border-home-txt shadow-sm hover:shadow-md
                    transition hover:transform-[scale(1.01)] duration-200 xl:flex-1
                "
        >
          <h3 className="text-center font-bold text-home-txt text-2xl">Step 3 — Build</h3>
          <p className="font-normal tracking-normal text-home-txt text-justify leading-relaxed normal-case text-2xl sm:text-left">
            I develop fast, functional, and reliable features using modern web technologies.
          </p>
        </div>
        <ArrowDownIcon className="xl:rotate-[-90deg] xl:self-center" />
        <div
          className="
                    flex flex-col gap-[20px] px-[15px] py-[30px] bg-home-overlay
                    rounded-md border border-solid border-home-txt shadow-sm hover:shadow-md
                    transition hover:transform-[scale(1.01)] duration-200 xl:flex-1
                "
        >
          <h3 className="text-center font-bold text-home-txt text-2xl">Step 4 — Refine</h3>
          <p className="font-normal tracking-normal text-home-txt text-justify leading-relaxed normal-case text-2xl sm:text-left">
            I optimize performance, fix edge cases, and improve the small details that make
            everything feel right.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start self-start">
        <CTAButton className="text-right" text="Start A Project" href="/contact" />
        <SubCTAButton text="More About Me" href="/about" />
      </div>
    </section>
  )
}
