import { ProgressStatusProps } from "@/types/components"

export default function ProgressStatus({
  className,
  variant,
  isHome,
  ...props
}: ProgressStatusProps) {
  const variants = {
    Completed: {
      home: "bg-home-completed",
      normal: "bg-completed",
      "home-txt": "text-home-completed",
      "normal-txt": "text-completed",
    },
    Planned: {
      home: "bg-home-planned",
      normal: "bg-planned",
      "home-txt": "text-home-planned",
      "normal-txt": "text-planned",
    },
    "In Progress": {
      home: "bg-home-in-progress",
      normal: "bg-in-progress",
      "home-txt": "text-home-in-progress",
      "normal-txt": "text-in-progress",
    },
    Review: {
      home: "bg-home-review",
      normal: "bg-review",
      "home-txt": "text-home-review",
      "normal-txt": "text-review",
    },
  }

  return (
    <div className="flex flex-row items-center gap-1 sm:gap-1.5" {...props}>
      <div
        className={`
                w-[20px] h-[20px] rounded-2xl sm:w-[30px] sm:h-[30px]
                ${isHome ? variants[variant]["home"] : variants[variant]["normal"]}
            `}
      />
      <p
        className={`
                text-xs font-normal sm:text-lg
                ${isHome ? variants[variant]["home-txt"] : variants[variant]["normal-txt"]}
            `}
      >
        {variant}
      </p>
    </div>
  )
}
