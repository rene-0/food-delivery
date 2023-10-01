import { Button } from "@/app/components/button/Button"
import { CloseOutlined } from "@ant-design/icons"
import { ReactNode } from "react"

type SelectedFilterProps = {
  children: ReactNode
  onClick: () => void
}

export function SelectedFilter({ children, onClick }: SelectedFilterProps) {
  return (
    <Button onClick={onClick} className="flex px-2 py-1 items-center justify-center text-sm mb-1 mr-1">
      <CloseOutlined className="text-xm mr-1" />
      {children}
    </Button>
  )
}
