import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { SocialLinks } from "../social-links/SocialLinks"
import { Title } from "../title/Title"
import { LabelIcon } from "./components/LabelIcon"

export function Footer() {
  return (
    <footer className="bg-secondary-800 text-cyan-50 px-10 py-5 flex justify-between flex-wrap">
      <div>
        <Link href="">
          <Image src="/logo_inverted.svg" alt="logo" width={250} height={150} />
        </Link>
        <div>
          <SocialLinks />
        </div>
      </div>
      <div>
        <Title level={5} className="text-4xl text-primary-50 mb-1">
          Contato
        </Title>
        <LabelIcon icon={EnvironmentFilled} labelText="R. Humaitá, 176 - Vila Santa Terezinha" />
        <LabelIcon icon={PhoneFilled} labelText="+00 00 00000-0000" />
        <LabelIcon icon={MailFilled} labelText="email@email.com" />
      </div>
      <div>
        <Title level={5} className="text-4xl text-primary-50 mb-1">
          Sobre
        </Title>
        <Link href="" className="text-primary-50 block">
          Sobre
        </Link>
        <Link href="" className="text-primary-50 block">
          Perguntas frequentes
        </Link>
        <Link href="" className="text-primary-50 block">
          Nossa história
        </Link>
      </div>
    </footer>
  )
}
