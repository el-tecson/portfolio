import { InputProps } from "@/types/components"

function Input({ className, type, name, label, ...props }: InputProps) {
  return (
    <div className="input flex flex-col w-full static">
      <label htmlFor={name} className="text-txt text-sm font-semibold relative top-2 ml-[7px] px-[3px] bg-overlay w-fit">{label}</label>
      <input type={type} placeholder="Write here..." name={name} className="border-txt input px-[10px] py-[11px] text-sm bg-overlay border-1 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25 w-full" autoComplete="off" {...props} />
    </div>
  )
}

export { Input }
