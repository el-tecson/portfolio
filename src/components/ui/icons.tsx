"use client";

import LogoIcon from "@/assets/logo.svg";
import RawBackIcon from "@/assets/back.svg";
import RawCaseStudyIcon from "@/assets/case-study.svg";
import RawChromeWebStoreIcon from "@/assets/chromewebstore.svg";
import RawFirefoxIcon from "@/assets/firefox.svg";
import RawLiveDemoIcon from "@/assets/live-demo.svg";
import RawSourceCodeIcon from "@/assets/source-code.svg";
import RawSendIcon from "@/assets/send.svg";
import { StandardProps } from "@/types/components";

export function Logo({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <LogoIcon className={className} {...props} />
}

export function BackIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawBackIcon className={className} {...props} />
}

export function CaseStudyIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawCaseStudyIcon className={className} {...props} />
}

export function ChromeWebStoreIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawChromeWebStoreIcon className={className} {...props} />
}

export function FirefoxIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawFirefoxIcon className={className} {...props} />
}

export function LiveDemoIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawLiveDemoIcon className={className} {...props} />
}

export function SourceCodeIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawSourceCodeIcon className={className} {...props} />
}

export function SendIcon({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return <RawSendIcon className={className} {...props} />
}
