import { ReactNode } from "react"
import { LinkProps as NextLinkProps } from "next/link";
import { ProgressStates } from "./helpers";

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

interface ProgressStatusProps extends Omit<StandardProps, "children"> {
    variant: ProgressStates;
    isHome: boolean;
}

export type {
    LinkProps,
    StandardProps,
    ListItemProps,
    ButtonProps,
    ProjectCardProps,
    ProgressStatusProps,
}