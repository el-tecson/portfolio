import { BackIcon } from "@/components/ui/icons";
import Link from "@/components/ui/link";
import { StandardProps } from "@/types/components";

export default function BackButton({
    className,
    ...props
}: Omit<StandardProps, "children">) {
    return (
        <Link href="/projects">
            <button className={`flex flex-row gap-1 items-center cursor-pointer ${className} hover:transform-[scale(1.01)_translateY(-1px)] hover:opacity-90 transition duration-200`} {...props}>
                <BackIcon className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] text-txt fill-txt" />
                <p className="text-txt text-base tracking-wider uppercase sm:text-xl">Back</p>
            </button>
        </Link>
    )
}