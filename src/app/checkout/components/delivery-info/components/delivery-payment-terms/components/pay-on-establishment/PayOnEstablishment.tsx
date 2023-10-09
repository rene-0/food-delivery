import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayOnEstablishmentProps = {
  onSelect: () => void
  isSelected: boolean
  deliveryMode: "delivery" | "get"
}

export function PayOnEstablishment({ isSelected, onSelect, deliveryMode }: PayOnEstablishmentProps) {
  const canPayOnEstablishment = deliveryMode === "get"
  return (
    <div className="mb-3">
      <RadioBox disabled={!canPayOnEstablishment} onChange={onSelect} value="on_establishment" id="on_establishment" name="payment_type">
        Pagar no estabelecimento
      </RadioBox>
      <div className={`${isSelected && canPayOnEstablishment ? "opacity-1" : "opacity-40 grayscale"} transition-all`}>
        <label className="font-bold text-xl" htmlFor="">
          Pagar com a gente ao receber o pedido
        </label>
        <p className="text-lg">Temos a maquina de cartão no estabelecimento e também aceitamos transferência por pix!</p>
      </div>
    </div>
  )
}
