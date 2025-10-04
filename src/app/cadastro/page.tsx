"use client"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { phoneNumberMaskReplacer } from "@/helpers/phone-number-mask-replacer"
import { ChangeEvent, useContext, useState } from "react"
import { toast } from "react-toastify"
import { Button } from "../components/button/Button"
import { Input } from "../components/input/Input"
import { PasswordInputWithEye } from "../components/password-input-with-eye/password-input-with-eye"
import { Title } from "../components/title/Title"
import { AuthContext } from "../context/AuthProvide"

type CreateUserResponse = {
	id: string
	email: string
	phoneNumber: string
}

export default function SignUp() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const { login } = useContext(AuthContext)

	const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(phoneNumberMaskReplacer(event.currentTarget.value))
	}

	const createUser = async () => {
		if (password !== passwordConfirmation) {
			toast.error("Senha em confirmação de senha são diferentes")
		}

		try {
			await AxiosHttpHelper.request<CreateUserResponse>({
				method: "POST",
				url: "/users",
				data: {
					name,
					email,
					password,
					phoneNumber: phoneNumber.replace(/\D/g, "")
				}
			})
			await login(email, password)
		} catch (error) {
			toast.error("Erro ao fazer cadastro")
		}
	}

	return (
		<div className="flex flex-col min-h-[900px] px-5 sm:p-14 lg:p-36 items-center justify-center text-secondary-950/70">
			<div className="py-5 px-2 sm:py-5 sm:px-5 min:w-5/12 bg-primary-100 shadow-md">
				<div className="text-center sm:text-lef flex flex-col items-center mb-5">
					<Title level={1}>Cadastro de conta</Title>
				</div>
				<div className="px-0 lg:px-5">
					<div className="flex flex-col mb-5">
						<label className="text-2xl font-bold mb-1">
							Nome:
						</label>
						<Input
							value={name}
							onChange={(event) => setName(event.currentTarget.value)}
							placeholder="Nome do usuário"
							type="text"
						/>
					</div>
					<div className="flex flex-col mb-5">
						<label className="text-2xl font-bold mb-1">
							E-mail:
						</label>
						<Input
							value={email}
							onChange={(event) => setEmail(event.currentTarget.value)}
							placeholder="email@email.com"
							type="text"
						/>
					</div>
					<div className="flex flex-col mb-5">
						<label className="text-2xl font-bold mb-1">
							Número de telefone:
						</label>
						<Input
							value={phoneNumber}
							onChange={handlePhoneNumber}
							placeholder="+99 99 99999-9999"
							type="text"
						/>
					</div>
					<div className="flex flex-col mb-5">
						<label className="text-2xl font-bold mb-1">
							Senha:
						</label>
						<PasswordInputWithEye
							value={password}
							onChange={(event) => setPassword(event.currentTarget.value)}
							placeholder="**********"
						/>
					</div>
					<div className="flex flex-col mb-5">
						<label className="text-2xl font-bold mb-1">
							Confirmar senha:
						</label>
						<Input
							value={passwordConfirmation}
							onChange={(event) => setPasswordConfirmation(event.currentTarget.value)}
							placeholder="**********"
							type="password"
						/>
					</div>
					<div className="my-12">
						<Button onClick={createUser} className="w-full">Criar conta</Button>
					</div>
				</div>
			</div>
		</div>
	)
}