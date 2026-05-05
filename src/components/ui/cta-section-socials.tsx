"use client"

import FacebookIcon from "@/assets/facebook.svg"
import GithubIcon from "@/assets/github.svg"
import GmailIcon from "@/assets/gmail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import Link from "@/components/ui/link"
import linksData from "@/data/links.json"

export default function CTASectSocials() {
  const icons = [
    { Icon: GmailIcon, href: linksData.gmail_link },
    { Icon: FacebookIcon, href: linksData.facebook_link },
    { Icon: GithubIcon, href: linksData.github_link },
    { Icon: LinkedInIcon, href: linksData.linkedin_link },
  ]
  return (
    <>
      {icons.map(({ Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className="w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] flex items-center justify-center hover:transform-[scale(1.01)_translateY(-2px)] active:transform-[scale(1.01)_translateY(-2px)] hover:opacity-90 active:opacity-90 transition duration-200"
        >
          <Icon className="text-home-txt fill-home-txt" />
        </Link>
      ))}
    </>
  )
}
