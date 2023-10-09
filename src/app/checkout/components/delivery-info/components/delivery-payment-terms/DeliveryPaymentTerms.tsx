import { Title } from "@/app/components/title/Title"
import { useState } from "react"
import { PayOnDelivery } from "./components/pay-on-delivery/PayOnDelivery"
import { PayOnEstablishment } from "./components/pay-on-establishment/PayOnEstablishment"
import { PayWithCreditCard } from "./components/pay-with-credit-card/PayWithCreditCard"
import { PayWithPix } from "./components/pay-with-pix/PayWithPix"

type DeliveryPaymentTermsProps = {
  deliveryMode: "delivery" | "get"
}

export function DeliveryPaymentTerms({ deliveryMode }: DeliveryPaymentTermsProps) {
  const [deliveryPaymentTermsMode, setDeliveryPaymentTermsMode] = useState<"credit_card" | "on_delivery" | "on_establishment" | "pix">("credit_card")

  return (
    <div>
      <Title className="text-5xl" level={2}>
        Condição de pagamento:
      </Title>
      <div className="grid grid-cols-12">
        <div className="col-span-6 pr-2">
          <PayWithCreditCard isSelected={deliveryPaymentTermsMode === "credit_card"} onSelect={() => setDeliveryPaymentTermsMode("credit_card")} />
          <PayWithPix onSelect={() => setDeliveryPaymentTermsMode("pix")} />
        </div>
        <div className="col-span-6 pl-2">
          <PayOnDelivery
            deliveryMode={deliveryMode}
            onSelect={() => setDeliveryPaymentTermsMode("on_delivery")}
            isSelected={deliveryPaymentTermsMode === "on_delivery"}
          />
          <PayOnEstablishment
            deliveryMode={deliveryMode}
            onSelect={() => setDeliveryPaymentTermsMode("on_establishment")}
            isSelected={deliveryPaymentTermsMode === "on_establishment"}
          />
        </div>
      </div>
    </div>
  )
}
