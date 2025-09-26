import { Title } from "@/app/components/title/Title"
import { PayOnDelivery } from "./components/pay-on-delivery/PayOnDelivery"
import { PayOnEstablishment } from "./components/pay-on-establishment/PayOnEstablishment"
import { PayWithCreditCard } from "./components/pay-with-credit-card/PayWithCreditCard"
import { PayWithPix } from "./components/pay-with-pix/PayWithPix"

type PaymentMode = "credit_card" | "on_delivery" | "on_establishment" | "pix"

type DeliveryPaymentTermsProps = {
  deliveryMode: "delivery" | "get"
  paymentMode: PaymentMode
  onSelect: (paymentMode: PaymentMode) => any
}

export function DeliveryPaymentTerms({ deliveryMode, paymentMode, onSelect }: DeliveryPaymentTermsProps) {
  return (
    <div>
      <Title className="text-5xl" level={2}>
        Condição de pagamento:
      </Title>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 lg:pr-2">
          <PayWithCreditCard isSelected={paymentMode === "credit_card"} onSelect={() => onSelect("credit_card")} />
          <PayWithPix isSelected={paymentMode === "pix"} onSelect={() => onSelect("pix")} />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pl-2 mb-5">
          <PayOnDelivery
            deliveryMode={deliveryMode}
            onSelect={() => onSelect("on_delivery")}
            isSelected={paymentMode === "on_delivery"}
          />
          <PayOnEstablishment
            deliveryMode={deliveryMode}
            onSelect={() => onSelect("on_establishment")}
            isSelected={paymentMode === "on_establishment"}
          />
        </div>
      </div>
    </div>
  )
}
