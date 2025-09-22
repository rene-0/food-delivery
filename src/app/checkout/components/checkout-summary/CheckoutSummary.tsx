import { PreviewImage } from "./components/preview-image/PreviewImage"
import { SummaryItems } from "./components/summary-items/SummaryItems"


export type CheckoutSummaryProps = {
  active: boolean
  incrementStep: () => void
}

export function CheckoutSummary({ active, incrementStep }: CheckoutSummaryProps) {
  return (
    <div className={`${active ? "w-full" : "w-0 h-0"} transition-all overflow-hidden p-1`}>
      <div className="flex justify-between flex-nowrap h-full">
        <PreviewImage />
        <SummaryItems incrementStep={incrementStep} />
      </div>
    </div>
  )
}
