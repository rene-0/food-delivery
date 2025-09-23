"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { Button } from "../components/button/Button"
import { Input } from "../components/input/Input"
import { Title } from "../components/title/Title"
import { AuthContext } from "../context/AuthProvide"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isAuthenticated, login } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('./conta')
    }
  }, [isAuthenticated, router])

  return (
    <div className="flex flex-col min-h-[900px] px-5 sm:p-14 lg:p-36 items-center justify-center text-secondary-950/70">
      <div className="py-5 px-2 sm:py-10 sm:px-5 min:w-5/12 bg-primary-100 shadow-md">
        <div className="text-center sm:text-lef flex flex-col items-center mb-5">
          <Title level={1}>Bem-vindo de volta!</Title>
          <p className="text-xl text-secondary-950/50">Faça login com seu e-mail e senha:</p>
        </div>
        <div className="px-0 lg:px-20">
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
              Senha:
            </label>
            <Input
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              placeholder="**********"
              type="password"
            />
          </div>
          <div className="my-12">
            <Button onClick={() => login(email, password)} className="w-full">Entrar</Button>
          </div>
        </div>
        <div>
          <p className="font-semibold text-center">
            Não tem uma conta?{" "}
            <Link className="text-accent-950" href="./cadastro">
              Crie uma!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
