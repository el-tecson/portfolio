import Link from "@/components/ui/link";
import CTAButton from "@/components/ui/cta-button";

export default function AboutSection() {
    return (
        <section id="about" className="
            bg-gradient-to-br from-about-clr1 to-about-clr2 min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center box-border gap-8 sm:gap-6
        ">
            <div className="flex flex-col gap-10 sm:gap-12">
                <p className="text-2xl sm:text-3xl font-bold text-home-txt">
                    I’m Emmanuel, a developer who builds tools that are actually useful.
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-home-txt">
                    I focus on modern web technologies, performance, and clean system design.
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-home-txt">
                    I care about the details, optimizing, refining, and making things feel right.
                </p>
            </div>
            <Link href="/about">
                <p className="text-2xl sm:text-3xl font-bold text-home-txt underline hover:opacity-90 transition-opacity duration-200">
                    Learn more about me.
                </p>
            </Link>
            <CTAButton className="justify-self-center" text="View Resume" href="#resume" />
        </section>
    )
}