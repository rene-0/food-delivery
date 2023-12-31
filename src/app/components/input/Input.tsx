import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = ComponentProps<"input">

export function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={twMerge("p-2 rounded-md min-w-0 mr-2 outline-none bg-primary-50 border-2 border-accent-950 font-semibold", rest.className)}
    />
  )
}
