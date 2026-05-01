import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import CTASectSocials from "../ui/cta-section-socials"

export default function CTASection() {
  return (
    <section
      id="how-i-work"
      className="
            bg-home-overlay  min-h-[33vh] px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-4 sm:gap-6 py-25
        "
    >
      <div className="flex flex-col gap-2 items-center">
        <CTAButton text="Let's Build Something" href="/contact" />
        <SubCTAButton text="See My Work First" href="/projects" />
      </div>
      <div className="flex flex-row gap-7 sm:gap-10 items-center justify-between">
        <CTASectSocials />
      </div>
    </section>
  )
}
