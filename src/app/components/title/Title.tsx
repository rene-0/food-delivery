import { ComponentProps, ReactNode, createElement } from "react"
import { twMerge } from "tailwind-merge"

type TitleProps = ComponentProps<"h1"> & {
  level: 1 | 2 | 3 | 4 | 5
  children: ReactNode
}

export function Title({ level, children, ...rest }: TitleProps) {
  return createElement("h" + level, { className: twMerge("text-6xl font-bold mb-5 text-secondary-950/70", rest.className) }, children)
}
