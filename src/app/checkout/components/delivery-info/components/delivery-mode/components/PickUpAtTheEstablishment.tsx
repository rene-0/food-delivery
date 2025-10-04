import { RadioBox } from "@/app/components/radio-box/RadioBox"

type PickUpAtTheEstablishmentProps = {
	selectedMode: "delivery" | "get"
	onSelect: (mode: "delivery" | "get") => any
}

export function PickUpAtTheEstablishment({ selectedMode, onSelect }: PickUpAtTheEstablishmentProps) {
	const isPickUp = selectedMode === "get"
	return (
		<div className="col-span-12 lg:col-span-6 lg:pl-2">
			<RadioBox checked={isPickUp} id="get" onChange={() => onSelect("get")} value="get" name="receiving_type">
				Retirar no estabelecimento
			</RadioBox>
			<div className={`${isPickUp ? "" : "opacity-40 grayscale"} transition-all`}>
				<p className="font-bold text-xl">Esperamos você buscar seu pedido</p>
				<p className="text-lg">Enviaremos uma mensagem para você quando estiver pronto!</p>
				<p className="text-xl font-bold">R. Humaitá, 176 - Vila Santa Terezinha</p>
			</div>
		</div>
	)
}