import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import rawCertsData from "@/data/certifications.json"
import { CertificationsData } from "@/types/data"
import Link from "@/components/ui/link";

export default function AchievementsSection() {
    const certsData = rawCertsData as CertificationsData[];
    const renderCertsSection = (
        items: CertificationsData[] | null | undefined
    ) => {
        if (!items?.length) return null;

        return (
            <>
                {items.map((cert) => (
                    <div key={cert.cert_title} className="
                        flex flex-col gap-[20px] sm:gap-3 px-[15px] py-[30px] bg-home-overlay
                        rounded-lg border border-solid border-home-txt shadow-sm hover:shadow-md
                        transition hover:transform-[scale(1.01)] duration-200
                    ">
                        <h3 className="text-center font-bold text-home-txt text-2xl sm:text-3xl">
                            {cert.cert_title} Certificate
                        </h3>
                        <p className="font-normal tracking-normal text-home-txt text-justify leading-relaxed normal-case text-xl sm:text-2xl sm:text-left">
                            {cert.cert_desc}
                        </p>
                        <p className="font-normal tracking-normal text-home-txt/80 text-justify leading-relaxed normal-case text-lg sm:text-xl sm:text-left">
                            Received on {cert.date_received}
                        </p>
                        <Link href={cert.cert_link} className="self-center sm:self-end" target="_blank">
                            <button className="
                                flex flex-row gap-5 p-2 sm:p-3 rounded-sm border hover:opacity-90
                                justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                                hover:transform-[scale(1.01)_translateY(-2px)] transition duration-200 border-home-txt
                            ">
                                <p className="text-xl font-sans tracking-wider uppercase font-medium sm:text-2xl text-home-txt">
                                    View Certificate
                                </p>
                            </button>
                        </Link>
                    </div>
                ))}
            </>
        )
    }
    return (
        <section id="how-i-work" className="
            bg-hero-section  min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        ">
            <div className="border border-home-txt text-txt p-2.5 sm:p-3.75 rounded-lg">
                <h2 className="text-home-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
                    Achievements
                </h2>
            </div>
            <div className="flex flex-col gap-7.5 sm:gap-11.25 items-stretch self-stretch">
                {renderCertsSection(certsData)}
            </div>
            <div className="flex flex-col gap-2 items-center">
                <CTAButton className="text-right" text="View Full Experience" href="/resume" />
                <SubCTAButton text="See My Work" href="/projects" />
            </div>
        </section>
    )
}
