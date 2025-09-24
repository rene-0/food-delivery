"use client"
import { Button } from "@/app/components/button/Button"
import { Input } from "@/app/components/input/Input"
import { PasswordInputWithEye } from "@/app/components/password-input-with-eye/password-input-with-eye"
import { Title } from "@/app/components/title/Title"
import { AuthContext } from "@/app/context/AuthProvide"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { phoneNumberMaskReplacer } from "@/helpers/phone-number-mask-replacer"
import { useRouter } from "next/navigation"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

type UpdateUserResponse = {
	name: string
	email: string
	phoneNumber: string
	accessToken: {
		token: string
		expiresIn: number
	}
}

export function UserFrom() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const { name: oldName, email: oldEmail, phoneNumber: oldPhoneNumber, isAuthenticated, setUser, decodeToken } = useContext(AuthContext)
	const router = useRouter()

	const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(phoneNumberMaskReplacer(event.currentTarget.value))
	}

	const updateUser = async () => {
		if (password !== passwordConfirmation) {
			toast.error("Senha em confirmação de senha são diferentes")
		}

		try {
			const user = await AxiosHttpHelper.request<UpdateUserResponse>({
				method: "PUT",
				url: "/users",
				data: {
					name,
					...(password ? { password } : {}),
					phoneNumber: phoneNumber.replace(/\D/g, "")
				}
			})
			setUser(oldUser => ({
				...oldUser,
				name: user.name,
				phoneNumber: user.phoneNumber
			}))
			decodeToken(user.accessToken.token)
			toast.success("Usuário atualizado com sucesso")
		} catch (error) {
			toast.error("Erro ao atualizar o usuário")
		}
	}

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('./')
		}
		setName(oldName || '')
		setEmail(oldEmail || '')
		setPhoneNumber(phoneNumberMaskReplacer(oldPhoneNumber || ''))
	}, [])

	return (
		<div>
			<div className="text-center sm:text-lef flex flex-col items-center mb-5">
				<Title level={1}>Atualizar conta</Title>
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
						placeholder="email@email.com"
						type="text"
						disabled
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
					<PasswordInputWithEye
						value={passwordConfirmation}
						onChange={(event) => setPasswordConfirmation(event.currentTarget.value)}
						placeholder="**********"
					/>
				</div>
				<div className="mt-5">
					<Button onClick={updateUser} className="w-full">Atualizar conta</Button>
				</div>
			</div>
		</div>
	)
}