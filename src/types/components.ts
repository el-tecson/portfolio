import { ReactNode } from "react"
import { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
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
}

export type {
    LinkProps,
    StandardProps,
    ListItemProps,
    ButtonProps,
}