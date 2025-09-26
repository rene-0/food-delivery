import { Input } from "@/app/components/input/Input"
import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayWithCreditCardProps = {
  onSelect: () => void
  isSelected: boolean
}

export function PayWithCreditCard({ onSelect, isSelected }: PayWithCreditCardProps) {
  return (
    <div className="mb-3">
      <RadioBox onChange={onSelect} checked={isSelected} value="credit_card" id="credit_card" name="payment_type">
        Pagar online no cartão
      </RadioBox>
      <div className={`grid gap-1 grid-cols-12 ${isSelected ? "" : "opacity-40 grayscale"} transition-all`}>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold">
            Número do cartão:
          </label>
          <Input disabled={!isSelected} />
        </div>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold">
            Nome do titular:
          </label>
          <Input disabled={!isSelected} />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold">
            Validade:
          </label>
          <Input disabled={!isSelected} />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold">
            CVC:
          </label>
          <Input disabled={!isSelected} />
        </div>
      </div>
    </div>
  )
}
