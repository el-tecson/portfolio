import { Logo }from "@/components/ui/icons"
import Link from "@/components/ui/link"
import linksData from "@/data/links.json"

export default function Footer() {
    return (
        <footer className="bg-txt px-5 sm:px-[50px] py-[50px] grid grid-cols-2 grid-rows-2 gap-5 lg:grid-rows-none lg:grid-cols-5 lg:p-20 lg:gap-25">
            <Link href="/" className="flex flex-row items-center col-span-2 row-span-full lg:row-span-1">
                <div className="flex flex-row items-center justify-center gap-2.5 lg:justify-start">
                    <Logo className="w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] fill-home-txt text-home-txt" />
                    <p className="lg:hidden text-home-txt text-base font-bold">© 2026 Emmanuel Leu Tecson</p>
                    <p className="hidden lg:block text-home-txt text-xl font-semibold">Emmanuel Leu Tecson</p>
                </div>
            </Link>
            <div className="flex flex-col gap-5">
                <p className="font-semibold text-base text-home-txt lg:text-lg">
                    Pages
                </p>
                <div className="flex flex-col gap-1">
                    <Link href="/">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Home
                        </p>
                    </Link>
                    <Link href="/projects">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Projects
                        </p>
                    </Link>
                    <Link href="/about">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            About
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Contact
                        </p>
                    </Link>
                    <Link href="/resume">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Resume
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold text-base text-home-txt lg:text-lg">
                    Socials
                </p>
                <div className="flex flex-col gap-1">
                    <Link href={linksData.github_link} target="_blank">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Github
                        </p>
                    </Link>
                    <Link href={linksData.facebook_link} target="_blank">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Facebook
                        </p>
                    </Link>
                    <Link href={linksData.gmail_link} target="_blank">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            Gmail
                        </p>
                    </Link>
                    <Link href={linksData.linkedin_link} target="_blank">
                        <p className="underline text-home-txt text-base lg:text-lg">
                            LinkedIn
                        </p>
                    </Link>
                </div>
            </div>
            <p className="text-home-txt text-xl font-semibold self-center hidden lg:block">© 2026</p>
        </footer>
    )
}