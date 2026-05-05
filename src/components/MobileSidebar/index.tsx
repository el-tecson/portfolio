"use client"

import SideBarIcon from "@/assets/menu.svg"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import SidebarList from "./SidebarList"
import SidebarListItem from "./SidebarListItem"

export default function MobileSidebar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="
          flex items-center justify-center sm:hidden cursor-pointer
          transition-transform duration-200
          hover:transform-[scale(1.05)] active:transform-[scale(1.05)]
        "
        >
          <SideBarIcon
            className={`
              w-12 h-12
              ${isHome ? "fill-home-txt text-home-txt" : "fill-txt text-txt"}
            `}
          />
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className={`
            min-w-screen min-h-screen sm:hidden
            ${isHome ? "bg-home-nav-bg/90" : "bg-nav-bg/90"}
            backdrop-blur
            data-[state=open]:animate-slide-in-right
            data-[state=closed]:animate-slide-out-right
        `}
      >
        <SheetTitle className="sr-only">Mobile Sidebar</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation links to pages: Home, Projects, About, Contact, Resume
        </SheetDescription>

        <SidebarList>
          <SidebarListItem watchPath="/">Home</SidebarListItem>
          <SidebarListItem watchPath="/projects">Projects</SidebarListItem>
          <SidebarListItem watchPath="/about">About</SidebarListItem>
          <SidebarListItem watchPath="/contact">Contact</SidebarListItem>
          <SidebarListItem watchPath="/resume" className="border-none">
            Resume
          </SidebarListItem>
        </SidebarList>
      </SheetContent>
    </Sheet>
  )
}
