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
    <div className={`grid grid-cols-12 overflow-hidden ${active ? "w-full" : "w-0 h-0"} transition-all bg-primary-50 shadow-md`}>
      <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
        <LocationMap />
      </div>
      <div className="p-2 lg:p-5 flex flex-col justify-between col-span-12 lg:col-span-8 2xl:col-span-6">
        <div>
          <DeliveryMode selectedMode={deliveryMode} onSelect={setDeliveryMode} />
          <DeliveryPaymentTerms deliveryMode={deliveryMode} />
        </div>
        <div className="flex justify-between">
          <Button className="bg-secondary-950 hover:bg-secondary-950 hover:opacity-50" onClick={decrementStep}>
            Voltar
          </Button>
          <Button onClick={incrementStep}>Continuar</Button>
        </div>
      </div>
    </div>
  )
}
