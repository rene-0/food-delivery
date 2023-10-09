import { Input } from "@/app/components/input/Input"
import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayWithCreditCardProps = {
  onSelect: () => void
  isSelected: boolean
}

export function PayWithCreditCard({ onSelect, isSelected }: PayWithCreditCardProps) {
  return (
    <div className="mb-3">
      <RadioBox onChange={onSelect} defaultChecked value="credit_card" id="credit_card" name="payment_type">
        Pagar online no cartão
      </RadioBox>
      <div className={`grid grid-cols-12 ${isSelected ? "opacity-1" : "opacity-40 grayscale"} transition-all`}>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold" htmlFor="">
            Número do cartão:
          </label>
          <Input />
        </div>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold" htmlFor="">
            Nome do titular:
          </label>
          <Input />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold" htmlFor="">
            Validade:
          </label>
          <Input />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold" htmlFor="">
            CVC:
          </label>
          <Input />
        </div>
      </div>
    </div>
  )
}
