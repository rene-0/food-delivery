import Image from "next/image"
import Link from "next/link"
import { NavButtons } from "../nav-buttons/NavButtons"

export function DesktopNav() {
  return (
    <div className="w-full py-8 hidden lg:flex justify-between items-center px-20">
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
        <NavButtons />
      </div>
    </div>
  )
}
