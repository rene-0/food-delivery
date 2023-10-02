import Link from "next/link"
import { Button } from "../components/button/Button"
import { Input } from "../components/input/Input"
import { Title } from "../components/title/Title"

export default function Login() {
  return (
    <div className="flex flex-col p-36 items-center justify-center text-secondary-950/70">
      <div className="py-10 px-5 w-5/12 bg-primary-100 shadow-md">
        <div className="flex flex-col items-center mb-5">
          <Title level={1}>Bem-vindo de volta!</Title>
          <p className="text-xl text-secondary-950/50">Faça login com seu e-mail e senha:</p>
        </div>
        <div className="px-20">
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-2xl font-bold mb-1">
              E-mail:
            </label>
            <Input placeholder="rene.colombaro@hotmail.com" type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-2xl font-bold mb-1">
              Senha:
            </label>
            <Input placeholder="**********" type="password" />
          </div>
          <div className="my-12">
            <Button className="w-full">Entrar</Button>
          </div>
        </div>
        <div>
          <p className="font-semibold text-center">
            Não tem uma conta?{" "}
            <Link className="text-accent-950" href="./">
              Crie uma!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
