import { Button } from "@/app/components/button/Button"
import { SocialLinks } from "@/app/components/social-links/SocialLinks"
import { Title } from "@/app/components/title/Title"
import { RadioBox } from "./components/radio-box/RadioBox"

export function ContactForm() {
  return (
    <div>
      <div className="mb-5">
        <Title level={2}>Envie um e-mail</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaecati, velit sunt nulla veniam, deleniti, quibusdam assumenda dolore
          voluptatem consectetur ullam. Eveniet dolores nesciunt optio sunt voluptatem. Nobis, odit repellendus.
        </p>
      </div>
      <div className="mb-10">
        <Title className="text-2xl mb-1" level={2}>
          Ou mande uma mensagem pelas redes sociáis:
        </Title>
        <SocialLinks />
      </div>
      <div className="mb-5">
        <div className="flex flex-col mb-5">
          <span className="text-3xl font-bold">Nome completo:</span>
          <input
            placeholder="Renê Nunes Colombaro"
            className="p-2 rounded-md min-w-0 mr-2 outline-none bg-primary-50 border-2 border-accent-950 font-semibold"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-5">
          <span className="text-3xl font-bold">E-mail:</span>
          <input
            placeholder="rene.colombaro@hotmail.com"
            className="p-2 rounded-md min-w-0 mr-2 outline-none bg-primary-50 border-2 border-accent-950 font-semibold"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-5">
          <span className="text-3xl font-bold">Telefone:</span>
          <input
            placeholder="+55 14 981401696"
            className="p-2 rounded-md min-w-0 mr-2 outline-none bg-primary-50 border-2 border-accent-950 font-semibold"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-5">
        <RadioBox id="events" name="reason">
          Eventos
        </RadioBox>
        <RadioBox id="questions" name="reason">
          Duvidas e perguntas
        </RadioBox>
        <RadioBox id="complain" name="reason">
          Reclamação
        </RadioBox>
        <RadioBox id="suggestion" name="reason">
          Sugestão
        </RadioBox>
        <RadioBox id="others" name="reason">
          Outros
        </RadioBox>
      </div>
      <div className="flex justify-end">
        <Button className="px-14">Enviar</Button>
      </div>
    </div>
  )
}
