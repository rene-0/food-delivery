import { Button } from "@/app/components/button/Button"
import { useRouter } from "next/navigation"

export function NoData() {
	const router = useRouter()

	return (
		<div className="size-full flex flex-col items-center justify-center">
			<p className="mb-2">Nenhum produto no carrinho</p>
			<Button onClick={() => router.push('./cardapio')}>Cardápio</Button>
		</div>
	)
}