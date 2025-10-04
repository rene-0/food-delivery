import { Input } from "@/app/components/input/Input"
import { RadioBox } from "@/app/components/radio-box/RadioBox"
import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { ChangeEvent, useContext } from "react"

type PayWithCreditCardProps = {
  onSelect: () => void
}

export function PayWithCreditCard({ onSelect }: PayWithCreditCardProps) {
  const { checkout, setCheckout } = useContext(CheckoutContext)
  const isCreditCard = checkout.payment.type === "credit_card"

  const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckout(oldCheckout => ({
      ...oldCheckout,
      payment: {
        ...oldCheckout.payment,
        cardNumber: event.target.value
      }
    }))
  }

  const changeCardHolder = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckout(oldCheckout => ({
      ...oldCheckout,
      payment: {
        ...oldCheckout.payment,
        holder: event.target.value
      }
    }))
  }

  const changeExpirationDate = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckout(oldCheckout => ({
      ...oldCheckout,
      payment: {
        ...oldCheckout.payment,
        expirationDate: event.target.value
      }
    }))
  }

  const changeCvc = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckout(oldCheckout => ({
      ...oldCheckout,
      payment: {
        ...oldCheckout.payment,
        cvc: event.target.value
      }
    }))
  }

  return (
    <div className="mb-3">
      <RadioBox onChange={onSelect} checked={isCreditCard} value="credit_card" id="credit_card" name="payment_type">
        Pagar online no cartão
      </RadioBox>
      <div className={`grid gap-1 grid-cols-12 ${isCreditCard ? "" : "opacity-40 grayscale"} transition-all`}>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold">
            Número do cartão:
          </label>
          <Input onChange={changeCardNumber} disabled={!isCreditCard} />
        </div>
        <div className="flex flex-col col-span-12">
          <label className="text-2xl font-bold">
            Nome do titular:
          </label>
          <Input onChange={changeCardHolder} disabled={!isCreditCard} />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold">
            Validade:
          </label>
          <Input onChange={changeExpirationDate} disabled={!isCreditCard} />
        </div>
        <div className="flex flex-col col-span-6">
          <label className="text-2xl font-bold">
            CVC:
          </label>
          <Input onChange={changeCvc} disabled={!isCreditCard} />
        </div>
      </div>
    </div>
  )
}
