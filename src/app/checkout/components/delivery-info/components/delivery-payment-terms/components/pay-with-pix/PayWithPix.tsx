import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PayWithPixProps = {
  onSelect: () => void
}

export function PayWithPix({ onSelect }: PayWithPixProps) {
  return (
    <div className="mb-3">
      <RadioBox onChange={onSelect} defaultChecked value="pix" id="pix" name="payment_type">
        Pagar com pix QRCode
      </RadioBox>
    </div>
  )
}
