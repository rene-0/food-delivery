"use client"
import { useState } from "react"
import "./checkout.css"
import { CheckoutConfirmation } from "./components/checkout-confimation/CheckoutConfimation"
import { CheckoutSummary } from "./components/checkout-summary/CheckoutSummary"
import { StepsIndicator } from "./components/checkout-summary/components/steps-indicator/StepsIndicator"
import { DeliveryInfo } from "./components/delivery-info/DeliveryInfo"

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
    <div className="px-20 pb-10 text-secondary-950/75 checkout">
      {/* Criar um indicador de etapas. 1: Resumo/Configurador de lanche, 2: Informação de entrega, condição de pagamento, 3: Resumo */}
      <StepsIndicator currentStep={currentStep} />
      <div className="overflow-x-hidden flex flex-nowrap p-1">
        <CheckoutSummary incrementStep={incrementStep} active={currentStep === 1} />
        <DeliveryInfo decrementStep={decrementStep} incrementStep={incrementStep} active={currentStep === 2} />
        <CheckoutConfirmation decrementStep={decrementStep} incrementStep={incrementStep} active={currentStep === 3} />
      </div>
    </div>
  )
}
