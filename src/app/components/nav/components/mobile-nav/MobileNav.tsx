"use client"
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { NavButtons } from "../nav-buttons/NavButtons"

export function MobileNav() {
  const [isNavActive, setIsNavActive] = useState(false)

  const maskRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (maskRef.current && !maskRef.current.contains(event.target as Node)) {
      setIsNavActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="lg:hidden fixed top-0 left-0 z-50">
      <div className="flex items-center justify-center p-4 size-10 cursor-pointer text-white bg-accent-950" onClick={() => setIsNavActive(!isNavActive)}>
        <MenuOutlined />
      </div>
      <div data-active={isNavActive} className="hidden data-[active=true]:block size-full fixed top-0 left-0 z-40 bg-black/50">
        <div className="data-[active=true]:translate-x-0 data-[active=false]:-translate-x-full transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-64 bg-primary-200 shadow-lg p-5 flex flex-col" data-active={isNavActive} ref={maskRef}>
          <div>
            <Image src="/logo.svg" alt="logo" width={250} height={150} />
          </div>
          <div className="flex flex-col mt-5">
            <Link
              className="text-lg font-black text-secondary-950/75 mr-0 py-1 rounded-full hover:text-accent-950 ease-in-out duration-300"
              href="./"
            >
              Home
            </Link>
            <Link
              className="text-lg font-black text-secondary-950/75 mr-0 py-1 rounded-full hover:text-accent-950 ease-in-out duration-300"
              href="./cardapio"
            >
              Cardápio
            </Link>
            <Link
              className="text-lg font-black text-secondary-950/75 mr-0 py-1 rounded-full hover:text-accent-950 ease-in-out duration-300"
              href="./sobre"
            >
              Sobre
            </Link>
            <Link
              className="text-lg font-black text-secondary-950/75 mr-0 py-1 rounded-full hover:text-accent-950 ease-in-out duration-300"
              href="./contato"
            >
              Contato
            </Link>
          </div>
          <NavButtons />
        </div>
      </div>
    </div>
  )
}
