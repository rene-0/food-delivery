import { Title } from "@/app/components/title/Title"
import Image from "next/image"

export function PreviewImage() {
	return (
		<div className="hidden md:flex flex-col justify-center items-center">
			{/* Imagem deve mudar conforme o CheckoutItem selecionado */}
			<Image className="max-h-10/12 w-auto" width={1000} height={1000} src="/burger.png" alt="" />
			<div>
				<Title level={2} className="font-black mb-0 text-center text-accent-900/95">
					X-Burger
				</Title>
				<Title level={2} className="font-black">
					18,36 R$
				</Title>
			</div>
		</div>
	)
}