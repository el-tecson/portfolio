import { ComponentProps, ComponentType, ReactNode, SVGProps } from "react"
import { LinkProps as NextLinkProps } from "next/link"
import { ProgressStates } from "./helpers"
import { Project } from "./data"

interface LinkProps extends NextLinkProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

interface StandardProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

interface ListItemProps extends StandardProps {
  watchPath: string
}

interface ButtonProps extends Omit<StandardProps, "children"> {
  text: string
  href: string
  align?: "start" | "end" | "center" | "stretch"
}

interface ProjectCardProps extends Omit<StandardProps, "children"> {
  projectName: string
  isHome: boolean
}

interface ProgressStatusProps extends Omit<StandardProps, "children"> {
  variant: ProgressStates
  isHome: boolean
}

interface CVCardProps extends StandardProps {
  title: string
  isHome: boolean
}

interface ScreenshotCarouselProps extends Omit<StandardProps, "children"> {
  projectData: Project
  inProjectCard?: boolean
}

interface GithubButtonProps extends Omit<StandardProps, "children"> {
  githubLink: string
  isHome?: boolean
}

interface RouterDivProps extends StandardProps {
  pushTo: string
}

interface CustomButtonProps extends Omit<StandardProps, "children"> {
  buttonText: string
  buttonLink: string
  ButtonIcon: ComponentType<SVGProps<SVGSVGElement>>
}

interface AccentTextProps extends StandardProps {
  fading?: boolean
}

interface BaseFieldProps {
  label: string
  name: string
}

interface InputProps extends BaseFieldProps, Omit<ComponentProps<"input">, "name"> {}

interface TextareaProps extends BaseFieldProps, Omit<ComponentProps<"textarea">, "name"> {}

export type {
  LinkProps,
  StandardProps,
  ListItemProps,
  ButtonProps,
  ProjectCardProps,
  ProgressStatusProps,
  CVCardProps,
  ScreenshotCarouselProps,
  GithubButtonProps,
  RouterDivProps,
  CustomButtonProps,
  AccentTextProps,
  InputProps,
  TextareaProps,
}
