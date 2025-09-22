import { Button } from "@/app/components/button/Button"
import { CheckoutItem } from "@/app/components/checkout-item-composition"
import { Title } from "@/app/components/title/Title"

type SummaryItemsProps = {
	incrementStep: () => void
}

export function SummaryItems({ incrementStep }: SummaryItemsProps) {
	return (
		<div className="flex flex-col p-5 mb-1 justify-between bg-primary-100 shadow h-full">
			<div className="flex shrink flex-col min-h-0">
				<Title className="shrink-0 text-5xl mb-2" level={5}>
					Resumo:
				</Title>
				<div className="shrink overflow-y-auto pb-1">
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
					<CheckoutItem.Root>
						<CheckoutItem.Header name="X-Burger" price={18.36} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
						<CheckoutItem.Ingredients
							ingredients={[
								{ id: '1', name: 'Salada', checked: true },
								{ id: '2', name: 'Cebola', checked: true },
								{ id: '3', name: 'Tomate', checked: true },
								{ id: '4', name: 'Hamburger', checked: true },
								{ id: '5', name: 'Presunto', checked: true },
								{ id: '6', name: 'Queijo', checked: true },
							]}
						/>
					</CheckoutItem.Root>
				</div>
			</div>
			<div className="shrink-0 flex flex-col items-center md:items-end md:flex-row justify-between mt-5">
				<div className="text-4xl font-black text-accent-950">98,37 R$</div>
				<div>
					<Button onClick={incrementStep}>Continuar</Button>
				</div>
			</div>
		</div>
	)
}