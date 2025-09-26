"use client"
import { useState } from "react"
import { CheckoutConfirmation } from "./components/checkout-confimation/CheckoutConfirmation"
import { CheckoutSummary } from "./components/checkout-summary/CheckoutSummary"
import { DeliveryInfo } from "./components/delivery-info/DeliveryInfo"
import { StepsIndicator } from "./components/steps-indicator/StepsIndicator"

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1)

  const incrementStep = () => {
    if (currentStep >= 3) {
      return
    }
    setCurrentStep((old) => old + 1)
  }

  const decrementStep = () => {
    if (currentStep <= 1) {
      return
    }
    setCurrentStep((old) => old - 1)
  }

  return (
    <div className="flex flex-col px-0 lg:px-10 2xl:px-20 pb-5 text-secondary-950/75 checkout max-h-[90vh]">
      <StepsIndicator currentStep={currentStep} />
      <div className="overflow-hidden flex flex-nowrap">
        <CheckoutSummary incrementStep={incrementStep} active={currentStep === 1} />
        <DeliveryInfo decrementStep={decrementStep} incrementStep={incrementStep} active={currentStep === 2} />
        <CheckoutConfirmation decrementStep={decrementStep} incrementStep={incrementStep} active={currentStep === 3} />
      </div>
    </div>
  )
}
