"use client"
import { Button } from "@/app/components/button/Button"
import { LocationMap } from "@/app/contato/components/location-map/LocationMap"
import { useState } from "react"
import { DeliveryMode } from "./components/delivery-mode/DeliveryMode"
import { DeliveryPaymentTerms } from "./components/delivery-payment-terms/DeliveryPaymentTerms"

type DeliveryInfoProps = {
  active: boolean
  decrementStep: () => void
  incrementStep: () => void
}

export function DeliveryInfo({ active, decrementStep, incrementStep }: DeliveryInfoProps) {
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "get">("delivery")

  return (
    <div className={`grid grid-cols-2 overflow-hidden ${active ? "w-full" : "w-0 h-0"} bg-primary-50 shadow-md`}>
      <div>
        <LocationMap />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <DeliveryMode selectedMode={deliveryMode} onSelect={setDeliveryMode} />
          <DeliveryPaymentTerms deliveryMode={deliveryMode} />
        </div>
        <div className="flex justify-between">
          <Button onClick={decrementStep}>Voltar</Button>
          <Button onClick={incrementStep}>Continuar</Button>
        </div>
      </div>
    </div>
  )
}
