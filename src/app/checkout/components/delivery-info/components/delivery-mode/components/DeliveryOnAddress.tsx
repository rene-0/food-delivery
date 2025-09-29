"use client"
import { Input } from "@/app/components/input/Input"
import { RadioBox } from "@/app/components/radio-box/RadioBox"
import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { ChangeEvent, useContext } from "react"

type DeliveryOnAddressProps = {
	onSelect: (mode: "delivery" | "get") => any
}

export function DeliveryOnAddress({ onSelect }: DeliveryOnAddressProps) {
	const { checkout, setCheckout } = useContext(CheckoutContext)
	const isDelivery = checkout.delivery.type === "delivery"

	const onChangeStreet = (event: ChangeEvent<HTMLInputElement>) => {
		if (!isDelivery) {
			return
		}
		const street = event.currentTarget.value
		setCheckout(oldCheckout => ({
			...oldCheckout,
			delivery: {
				...oldCheckout.delivery,
				street: event.target.value,
			}
		}))
	}

	const onChangeNeighborhood = (event: ChangeEvent<HTMLInputElement>) => {
		if (!isDelivery) {
			return
		}
		setCheckout(oldCheckout => ({
			...oldCheckout,
			delivery: {
				...oldCheckout.delivery,
				neighborhood: event.target.value,
			}
		}))
	}

	const onChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
		if (!isDelivery) {
			return
		}
		setCheckout(oldCheckout => ({
			...oldCheckout,
			delivery: {
				...oldCheckout.delivery,
				number: event.target.value,
			}
		}))
	}

	return (
		<div className="col-span-12 lg:col-span-6 mb-2 lg:mb-0">
			<RadioBox checked={isDelivery} onChange={() => onSelect("delivery")} value="delivery" id="delivery" name="receiving_type">
				Entregar no endereço
			</RadioBox>
			<div className={`grid gap-1 grid-cols-12 ${isDelivery ? "" : "opacity-40 grayscale"} transition-all`}>
				<div className="flex flex-col col-span-12">
					<label className="text-2xl font-bold">
						Rua:
					</label>
					<Input onChange={onChangeStreet} value={checkout.delivery?.street || ''} disabled={!isDelivery} />
				</div>
				<div className="flex flex-col col-span-6">
					<label className="text-2xl font-bold">
						Número:
					</label>
					<Input onChange={onChangeNumber} value={checkout.delivery?.number || ''} disabled={!isDelivery} />
				</div>
				<div className="flex flex-col col-span-6">
					<label className="text-2xl font-bold">
						Bairro:
					</label>
					<Input onChange={onChangeNeighborhood} value={checkout.delivery?.neighborhood || ''} disabled={!isDelivery} />
				</div>
			</div>
		</div>
	)
}