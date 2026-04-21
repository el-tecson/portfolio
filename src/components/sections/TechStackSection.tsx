import CTAButton from "@/components/ui/cta-button"
import SubCTAButton from "@/components/ui/sub-cta-button"
import rawTechStackData from "@/data/tech-stack.json"
import { TechStackData } from "@/types/data"
import { Babel, CSS, ESLint, Figma, Git, HTML5, JavaScript, NextJs, NodeJs, Prettier, React, TailwindCSS, TypeScript, VercelDark, VisualStudioCode, ViteJS } from "developer-icons"

export default function TechStackSection() {
    const techStackData = rawTechStackData as TechStackData;
    const devIcons = {
        React,
        NextJS: NextJs,
        JavaScript,
        TypeScript,
        HTML: HTML5,
        CSS,
        TailwindCSS,
        NodeJS: NodeJs,
        Git,
        Vite: ViteJS,
        Babel,
        ESLint,
        Prettier,
        Figma,
        VSCode: VisualStudioCode,
        Vercel: VercelDark,
    } as const
    type DevIconKey = keyof typeof devIcons;
    const renderStackSection = (
        title: string,
        items: DevIconKey[] | null | undefined
    ) => {
        if (!items?.length) return null;

        return (
            <div key={title} className="flex flex-col gap-5 sm:gap-7.5 items-center">
                <p className="text-2xl sm:text-4xl text-home-txt font-bold">
                    {title}
                </p>
                <div className="flex flex-row items-center justify-between flex-wrap gap-4 sm:gap-6">
                    {items.map(item => {
                        const Icon = devIcons[item]
                        return (
                            <Icon
                                key={item}
                                className="w-[75px] h-[75px] sm:w-[112.5px] sm:h-[112.5px]"
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
    const sections = [
        { title: "Tech Stack", data: techStackData.techStack as DevIconKey[] | null},
        { title: "Database", data: techStackData.database as DevIconKey[] | null},
        { title: "Tools and Deployment", data: techStackData.toolsAndDeployment as DevIconKey[] | null },
    ]

    return (
        <section id="tech-stack" className="
            bg-hero-section  min-h-screen px-mobile-scr-mg-x sm:px-scr-mg-x
            flex flex-col justify-center items-center gap-20 sm:gap-25 py-25
        ">
            <div className="border border-home-txt text-txt p-2.5 sm:p-3.75 rounded-lg">
                <p className="text-home-txt text-2xl sm:text-4xl font-sans uppercase tracking-wider font-bold">
                    Technologies I Use
                </p>
            </div>
            <div className="flex flex-col gap-20 sm:gap-25 items-center">
                {sections.map(section =>
                    renderStackSection(section.title, section.data)
                )}
            </div>
            <div className="flex flex-col gap-2 items-end self-end">
                <CTAButton className="text-right" text="See these skills in action" href="/projects" />
                <SubCTAButton text="Full skill list" href="/resume" />
            </div>
        </section>
    )
}
