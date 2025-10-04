import { Line } from "./components/Line"
import { Step } from "./components/Step"

type StepsIndicatorProps = {
  currentStep: number
}

export function StepsIndicator({ currentStep }: StepsIndicatorProps) {
  return (
    <div className="w-full flex justify-between items-center mb-5">
      <Step selected={currentStep >= 1}>1</Step>
      <Line selected={currentStep >= 2} />
      <Step selected={currentStep >= 2}>2</Step>
      <Line selected={currentStep >= 3} />
      <Step selected={currentStep >= 3}>3</Step>
    </div>
  )
}
