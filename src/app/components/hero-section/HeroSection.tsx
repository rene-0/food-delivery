import Image from "next/image"
import { Button } from "../button/Button"
import { Title } from "../title/Title"
import "./hero-section.css"

export function HeroSection() {
  return (
    <div className="flex mb-20 flex-col-reverse px-2 lg:px-10 xl:px-20 lg:flex-row">
      <div className="w-12/12 text-center lg:text-left lg:w-7/12">
        <div className="establishment-info flex flex-col justify-between h-full">
          <div>
            <Title level={1} className="mb-4 text-secondary-950/80">
              Estamos <span className="text-accent-950">abertos!!!</span>
            </Title>
            <p className="text-secondary-50 px-10 mb-10 text-justify lg:mb-32 lg:px-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eum earum itaque debitis labore at, autem nihil, ipsa unde reprehenderit
              pariatur quas, laborum maxime. Laboriosam est inventore debitis eos neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illo, et! Numquam in quas qui. Eaque culpa illo sed, inventore illum enim fuga, error commodi iusto voluptatum nostrum perferendis,
              vitae tempora.
            </p>
          </div>
          <div className="px-10 lg:px-0">
            <div>
              <Title level={5} className="text-4xl font-black mb-2">
                Horários de atendimento:
              </Title>
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <div className="text-3xl font-black text-accent-950">Almoço</div>
                  <div className="text-3xl font-black text-accent-950/70">07:30-13:30</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-secondary-950/70">Janta</div>
                  <div className="text-3xl font-black text-secondary-950/50">14:30-18:00</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-between mt-10">
              <Button className="bg-secondary-950 hover:bg-secondary-950 hover:opacity-50 p-3 mr-2 mb-2">Reserve uma mesa</Button>
              <Button className="bg-accent-950 p-3 mb-2">Veja o cardápio</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-12/12 mb-5 flex flex-col justify-center items-center lg:mb-0 lg:w-5/12">
        <Image className="w-full" src="/burger.png" alt="burger" width={550} height={550} />
        <div className="bottom-0 text-center">
          <Title level={2} className="font-black mb-0 text-accent-900/95">
            X-Burger
          </Title>
          <Title level={2} className="font-black text-secondary-950/75">
            18,36 R$
          </Title>
        </div>
      </div>
    </div>
  )
}
