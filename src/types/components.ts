import { ReactNode } from "react"
import { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

interface StandardProps {
    children?: ReactNode;
    className?: string;
    [key: string]: any;
}

interface ListItemProps extends StandardProps {
    watchPath: string;
}

interface ButtonProps extends Omit<StandardProps, "children"> {
    text: string;
    href: string;
    align?: "start" | "end" | "center" | "stretch";
}

interface ProjectCardProps extends Omit<StandardProps, "children"> {
    projectName: string;
    isHome: boolean;
}

type ProgressStates = "Completed" | "Planned" | "In Progress" | "Review";

interface ProgressStatusProps extends Omit<StandardProps, "children"> {
    variant: ProgressStates;
    isHome: boolean;
}

interface Project {
    title: string;
    shortExcerpt: string;
    techStack: string[];
    screenshots: string[] | null;
    status: ProgressStates;
    githubLink: string;
    readmeSrc: string;
    liveDemoLink: string | null;
}

export type {
    LinkProps,
    StandardProps,
    ListItemProps,
    ButtonProps,
    ProjectCardProps,
    ProgressStatusProps,
    Project,
}