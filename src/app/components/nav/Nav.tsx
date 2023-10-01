import { ShoppingOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button/Button"

export default function Nav() {
  return (
    <nav className="w-full py-8 flex justify-between px-20">
      <Link href="./">
        <Image src="/logo.svg" alt="logo" width={250} height={150} />
      </Link>
      <div className="flex">
        <div className="flex items-center mr-10">
          <Link
            className="text-lg font-black text-secondary-950/75 mr-0 py-1 px-8 rounded-full hover:text-accent-950 ease-in-out duration-300"
            href="./"
          >
            Home
          </Link>
          <Link
            className="text-lg font-black text-secondary-950/75 mr-0 py-1 px-8 rounded-full hover:text-accent-950 ease-in-out duration-300"
            href="./cardapio"
          >
            Cardápio
          </Link>
          <Link
            className="text-lg font-black text-secondary-950/75 mr-0 py-1 px-8 rounded-full hover:text-accent-950 ease-in-out duration-300"
            href="./sobre"
          >
            Sobre
          </Link>
          <Link
            className="text-lg font-black text-secondary-950/75 mr-0 py-1 px-8 rounded-full hover:text-accent-950 ease-in-out duration-300"
            href="./contato"
          >
            Contato
          </Link>
        </div>
        <div className="flex items-center">
          <Button className="text-white p-0 h-10 w-10 rounded-full bg-accent-950 mr-10">
            <ShoppingOutlined />
          </Button>
          <div>
            <Link className="text-lg text-white font-semibold mr-0 py-2 px-8 rounded-full cursor-pointer bg-accent-950  drop-shadow-md" href="/login">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
