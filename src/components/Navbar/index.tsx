import Link from "next/link";
import MobileSidebar from "@/components/MobileSidebar";
import NavbarList from "./NavbarList";
import NavbarListItem from "./NavbarListItem";
import NavbarHeader from "./NavbarHeader";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
    return (
        <NavbarHeader>
            <nav className="
                px-mobile-scr-mg-x py-mobile-scr-mg-y
                sm:px-scr-mg-x sm:py-scr-mg-y
                flex justify-between items-stretch
            ">
                <Link href="/" rel="noopener noreferrer" className="flex flex-row gap-2.5 items-center">
                    <NavbarLogo />
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
        </NavbarHeader>
    )
}