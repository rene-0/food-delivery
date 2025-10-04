import { ReactNode } from "react"

type StepProps = {
  selected: boolean
  children: ReactNode
}

export function Step({ selected, children: stepNumber }: StepProps) {
  return (
    <div
      className={`h-10 w-10 ${
        selected ? "bg-accent-950" : "bg-secondary-950/70"
      } rounded-full flex items-center justify-center text-primary-50 text-xl font-bold shrink-0`}
    >
      {stepNumber}
    </div>
  )
}
