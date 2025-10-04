"use client"
import { Title } from "@/app/components/title/Title"
import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { useContext } from "react"
import { PayOnDelivery } from "./components/pay-on-delivery/PayOnDelivery"
import { PayOnEstablishment } from "./components/pay-on-establishment/PayOnEstablishment"
import { PayWithCreditCard } from "./components/pay-with-credit-card/PayWithCreditCard"
import { PayWithPix } from "./components/pay-with-pix/PayWithPix"

export function DeliveryPaymentTerms() {
  const { checkout, setCheckout } = useContext(CheckoutContext)

  const onSelectPaymentMode = (paymentMode: CheckoutContext.Payment['type']) => {
    switch (paymentMode) {
      case 'credit_card':
        setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: paymentMode, cardNumber: '', cvc: '', expirationDate: '', holder: '' } }))
        break
      case 'on_delivery':
        setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: paymentMode } }))
        break
      case 'on_establishment':
        setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: paymentMode } }))
        break
      case 'pix':
        setCheckout(oldCheckout => ({ ...oldCheckout, payment: { type: paymentMode } }))
        break
    }
  }

  return (
    <div>
      <Title className="text-5xl" level={2}>
        Condição de pagamento:
      </Title>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 lg:pr-2">
          <PayWithCreditCard onSelect={() => onSelectPaymentMode("credit_card")} />
          <PayWithPix isSelected={checkout.payment.type === "pix"} onSelect={() => onSelectPaymentMode("pix")} />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pl-2 mb-5">
          <PayOnDelivery
            deliveryMode={checkout.delivery.type}
            onSelect={() => onSelectPaymentMode("on_delivery")}
            isSelected={checkout.payment.type === "on_delivery"}
          />
          <PayOnEstablishment
            deliveryMode={checkout.delivery.type}
            onSelect={() => onSelectPaymentMode("on_establishment")}
            isSelected={checkout.payment.type === "on_establishment"}
          />
        </div>
      </div>
    </div>
  )
}
