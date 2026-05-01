import { TextareaProps } from "@/types/components"

export function Textarea({ className, label, name, ...props }: TextareaProps) {
  return (
    <div className="input flex flex-col w-full h-full">
      <label
        htmlFor={name}
        className="text-txt text-sm font-semibold relative top-2 ml-[7px] px-[3px] bg-overlay w-fit"
      >
        {label}
      </label>

      <textarea
        data-slot="textarea"
        name={name}
        placeholder="Write here..."
        className={`flex-1 border-txt input px-[10px] py-[11px] text-sm bg-overlay border rounded-[5px] w-full focus:outline-none placeholder:text-black/25 ${className ?? ""}`}
        {...props}
      />
    </div>
  )
}
