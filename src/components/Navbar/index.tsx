"use client";

import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileSidebar from "@/components/MobileSidebar";
import NavbarList from "./NavbarList";
import NavbarListItem from "./NavbarListItem";
import AccentText from "./AccentText";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                scrolled
                    ? (isHome ? "bg-home-nav-bg/80" : "bg-nav-bg/80") + " shadow-md backdrop-blur"
                    : "bg-transparent"
            }`}
        >
            <nav className="
                px-mobile-scr-mg-x py-mobile-scr-mg-y
                sm:px-scr-mg-x sm:py-scr-mg-y
                flex justify-between items-stretch
            ">
                <Link href="/" rel="noopener noreferrer" className="flex flex-row gap-2.5 items-center">
                    <Logo className={`
                        logo
                        ${ isHome ? "fill-home-logo-clr" : "fill-logo-clr" }
                        w-16 h-16
                    `} />
                    <p className={isHome ? "text-home-txt" : "text-txt"}>
                        <AccentText>E</AccentText>mmanuel <AccentText>L</AccentText>eu <AccentText>Tecson</AccentText>
                    </p>
                </Link>
                <MobileSidebar />
                <NavbarList>
                    <NavbarListItem watchPath="/">Home</NavbarListItem>
                    <NavbarListItem watchPath="/projects">Projects</NavbarListItem>
                    <NavbarListItem watchPath="/about">About</NavbarListItem>
                    <NavbarListItem watchPath="/contact">Contact</NavbarListItem>
                    <NavbarListItem watchPath="/resume">Resume</NavbarListItem>
                </NavbarList>
            </nav>
        </header>
    )
}