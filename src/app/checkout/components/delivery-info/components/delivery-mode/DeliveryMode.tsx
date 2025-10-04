"use client"
import { Title } from "@/app/components/title/Title"
import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { useContext } from "react"
import { DeliveryOnAddress } from "./components/DeliveryOnAddress"
import { PickUpAtTheEstablishment } from "./components/PickUpAtTheEstablishment"

export function DeliveryMode() {
  const { checkout, setCheckout } = useContext(CheckoutContext)

  const onSelectDeliveryMode = (deliveryMode: CheckoutContext.Delivery['type']) => {
    if (deliveryMode === 'get') {
      setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: 'on_establishment' } }))
    } else {
      if (checkout.payment.type === 'on_establishment') {
        setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: 'on_delivery' } }))
      }
    }

    setCheckout(oldCheckout => ({
      ...oldCheckout,
      delivery: deliveryMode === 'get'
        ? { type: deliveryMode }
        : {
          type: deliveryMode,
          street: '',
          number: '',
          neighborhood: '',
        }
    }))
  }

  return (
    <div className="mb-5">
      <Title className="text-5xl" level={2}>
        Modo de entrega:
      </Title>
      <div className="grid grid-cols-12 pr-2">
        <DeliveryOnAddress onSelect={onSelectDeliveryMode} />
        <PickUpAtTheEstablishment selectedMode={checkout.delivery.type} onSelect={onSelectDeliveryMode} />
      </div>
    </div>
  )
}
