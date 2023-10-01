"use client"
import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "text-lg text-white font-semibold mr-0 py-2 px-8 rounded-full cursor-pointer bg-accent-950 hover:bg-accent-800 drop-shadow-md hover:drop-shadow-lg",
        rest.className
      )}
    >
      {children}
    </button>
  )
}
