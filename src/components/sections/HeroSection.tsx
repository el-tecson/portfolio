import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"

export default function HeroSection() {
    return (
        <section id="hero" className="
            bg-hero-section min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center box-border gap-20 sm:gap-25
        ">
            <div className="flex flex-col gap-5 sm:gap-7.5">
                <div className="flex flex-col">
                    <p className="text-home-txt font-bold text-5xl max-w-[12ch] sm:max-w-none sm:text-7xl leading-tight tracking-wider">
                        Emmanuel Leu Tecson
                    </p>
                    <p className="text-home-accent font-bold text-2xl max-w-[25ch] sm:max-w-none sm:text-4xl leading-snug tracking-wider">
                        Full-Stack Web Developer
                    </p>
                </div>
                <p className="text-home-txt font-bold text-base max-w-[40ch] sm:max-w-none sm:text-2xl leading-relaxed tracking-wider">
                    I build fast, reliable web applications that solve real problems.
                </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <CTAButton text="View Projects" href="#projects" />
                <SubCTAButton text="Contact Me" href="/contact" />
            </div>
        </section>
    )
}
