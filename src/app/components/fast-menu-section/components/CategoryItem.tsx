import { ReactNode } from "react"
import { Button } from "../../button/Button"

type CategoryItemProps = {
  children: ReactNode
}

export function CategoryItem({ children }: CategoryItemProps) {
  return (
    <Button className="text-secondary-950/70 font-semibold hover:text-white bg-primary-200 hover:bg-accent-950 border-accent-950 border-2 py-2 px-5 mr-5">
      {children}
    </Button>
  )
}
