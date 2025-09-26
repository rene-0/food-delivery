import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayOnDeliveryProps = {
  onSelect: () => void
  isSelected: boolean
  deliveryMode: "delivery" | "get"
}

export function PayOnDelivery({ isSelected, onSelect, deliveryMode }: PayOnDeliveryProps) {
  const canPayOnDelivery = deliveryMode === "delivery"
  return (
    <div className="mb-3">
      <RadioBox checked={isSelected} disabled={!canPayOnDelivery} onChange={onSelect} value="on_delivery" id="on_delivery" name="payment_type">
        Pagar na entrega
      </RadioBox>
      <div className={`${isSelected && canPayOnDelivery ? "" : "opacity-40 grayscale"} transition-all`}>
        <label className="font-bold text-xl" htmlFor="">
          Pagar com o entregador
        </label>
        <p className="text-lg">Não se preocupe, nossos entregadores levarão a maquina de cartão 😊</p>
      </div>
    </div>
  )
}
