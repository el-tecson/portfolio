import Marquee from "react-fast-marquee"

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="
          bg-linear-to-b from-about-clr1 to-about-clr2
          min-h-screen overflow-hidden
          flex flex-col justify-center
          box-border gap-8 sm:py-25 items-start
        "
      >
        <h2 className="sr-only">About</h2>
        <div className="flex flex-col gap-10 sm:gap-20 tracking-wide w-full select-none">
          <Marquee direction="left" className="overflow-hidden">
            <div className="flex items-center gap-10 pr-10 text-4xl font-bold md:text-7xl text-home-txt whitespace-nowrap">
              <span>I’m Emmanuel, a developer who builds tools that are actually useful.</span>
            </div>
          </Marquee>
          <Marquee direction="right" className="overflow-hidden">
            <div className="flex items-center gap-10 pr-10 text-4xl font-bold md:text-7xl text-home-txt whitespace-nowrap">
              <span>I focus on modern web technologies, performance, and clean system design.</span>
            </div>
          </Marquee>
          <Marquee direction="left" className="overflow-hidden">
            <div className="flex items-center gap-10 pr-10 text-4xl font-bold md:text-7xl text-home-txt whitespace-nowrap">
              <span>
                I care about the details, optimizing, refining, and making things feel right.
              </span>
            </div>
          </Marquee>
        </div>
      </section>
      {/* Bottom filler to smoothly transition to How I Work section */}
      <div className="bg-linear-to-b from-about-clr2 to-hero-section min-h-[10vh] sm:min-h-[15vh]"></div>
    </>
  )
}
