import { Title } from "@/app/components/title/Title"
import { ElementType, ReactNode } from "react"

type StatisticsCardProps = {
  icon: ElementType
  title: ReactNode
  children: ReactNode
}

export function StatisticsCard({ icon: Icon, title, children }: StatisticsCardProps) {
  return (
    <div className="bg-primary-50/50 p-3 mr-3 mb-3 rounded shadow-md w-full md:w-auto">
      <Title className="text-xl mb-0" level={5}>
        {title}
      </Title>
      <div className="flex items-center">
        <Icon className="text-accent-950 flex mr-2 text-2xl" />
        <span className="text-secondary-950/70">{children}</span>
      </div>
    </div>
  )
}
