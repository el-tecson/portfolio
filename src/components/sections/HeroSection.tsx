import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="
                    relative isolate overflow-hidden
                    bg-hero-section min-h-screen
                    px-mobile-scr-mg-x sm:px-scr-mg-x
                    flex flex-col justify-center
                    box-border gap-10 sm:gap-25
                "
      >
        <AnimatedGridPattern
          numSquares={37}
          maxOpacity={0.2}
          duration={3}
          width={80}
          height={80}
          className="skew-y-12 mask-[radial-gradient(500px_circle_at_center,white,transparent)] absolute inset-0 -z-10"
        />
        <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col">
            <h1 className="text-home-txt font-black text-4xl max-w-[12ch] sm:max-w-none sm:text-6xl leading-tight tracking-wider">
              Emmanuel Leu Tecson
            </h1>
            <p className="text-home-accent font-bold text-xl max-w-[25ch] sm:max-w-none sm:text-3xl leading-snug tracking-wider">
              Full-Stack Web Developer
            </p>
          </div>
          <p className="text-home-txt font-normal normal-case text-base max-w-[40ch] sm:max-w-none sm:text-2xl leading-relaxed tracking-wide">
            I build fast, reliable web applications that solve real problems.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-2 sm:gap-4 items-end self-end sm:items-center sm:self-start">
          <CTAButton text="View Projects" href="#projects" />
          <SubCTAButton text="Contact Me" href="/contact" />
        </div>
      </section>
      <div className="bg-linear-to-b from-hero-section to-about-clr1 min-h-[10vh] sm:min-h-[15vh]"></div>
    </>
  )
}
