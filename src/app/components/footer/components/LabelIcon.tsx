import { ElementType } from "react"

type LabelIconProps = {
  icon: ElementType
  labelText: string
}

export function LabelIcon({ icon: Icon, labelText }: LabelIconProps) {
  return (
    <div className="flex items-center">
      <Icon className="text-lg pr-3" />
      <p className="text-primary-50">{labelText}</p>
    </div>
  )
}
