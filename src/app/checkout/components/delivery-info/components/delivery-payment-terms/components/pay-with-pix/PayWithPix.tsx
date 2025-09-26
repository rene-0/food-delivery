import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayWithPixProps = {
  onSelect: () => void
  isSelected: boolean
}

export function PayWithPix({ onSelect, isSelected }: PayWithPixProps) {
  return (
    <div className="mb-3">
      <RadioBox onChange={onSelect} checked={isSelected} value="pix" id="pix" name="payment_type">
        Pagar com pix QRCode
      </RadioBox>
    </div>
  )
}
