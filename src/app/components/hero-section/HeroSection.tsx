import Image from "next/image"
import { Button } from "../button/Button"
import { Title } from "../title/Title"
export function HeroSection() {
  return (
    <div className="flex mb-20 px-20">
      <div className="w-7/12">
        <div className="w-7/12">
          <Title level={1} className="mb-4 text-secondary-950/80">
            Estamos <span className="text-accent-950">abertos!</span>
          </Title>
          <p className="text-secondary-50 mb-32 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eum earum itaque debitis labore at, autem nihil, ipsa unde reprehenderit
            pariatur quas, laborum maxime. Laboriosam est inventore debitis eos neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            et! Numquam in quas qui. Eaque culpa illo sed, inventore illum enim fuga, error commodi iusto voluptatum nostrum perferendis, vitae
            tempora.
          </p>
          <div>
            <Title level={5} className="text-4xl font-black mb-2">
              Horários de atendimento:
            </Title>
            <div className="flex justify-between">
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
          <div className="flex justify-between mt-10">
            <Button className="bg-secondary-950 p-3">Reserve uma mesa</Button>
            <Button className="bg-accent-950 p-3">Veja o cardápio</Button>
          </div>
        </div>
      </div>
      <div className="w-5/12 relative flex flex-col justify-center items-center">
        <Image className="w-full" src="/burger.png" alt="burger" width={550} height={550} />
        <div className="bottom-0 text-center">
          <Title level={2} className="font-black text-accent-900/95">
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
