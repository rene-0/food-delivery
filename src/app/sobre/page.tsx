import { HeartFilled, RiseOutlined, StarFilled, UserOutlined } from "@ant-design/icons"
import { Title } from "../components/title/Title"
import { StatisticsCard } from "./components/Statistcs"

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="mb-5 rounded p-10 w-7/12">
        <div className="mb-20">
          <Title className="mb-5" level={1}>
            Some big title here!
          </Title>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente rem quis voluptatem numquam asperiores facilis assumenda aperiam
            labore! Quidem magni, fuga autem perferendis culpa ratione tenetur obcaecati officia voluptates hic. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ducimus, quasi asperiores rem quas impedit voluptatem magnam voluptatibus quod dolor quae fuga possimus
            ipsum delectus similique nisi totam? Magni, cum voluptatum!
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta ipsam quae eos esse magnam, totam culpa! Quaerat dolor id impedit
            molestias tempora qui maxime vitae, cum velit ratione delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            doloremque, minus vero deleniti et eius mollitia quasi enim corporis, nesciunt quas qui iste rem aut dolorem ex provident iure rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo dolorem suscipit corporis nemo assumenda voluptates sequi
            voluptatibus soluta ducimus! Perferendis odio aliquid exercitationem, quae nemo dolorem eum praesentium laudantium?
          </p>
        </div>
        <div className="mb-20">
          <Title className="mb-5" level={2}>
            Nossas conquistas
          </Title>
          <div className="flex">
            <StatisticsCard icon={HeartFilled} title="Lanches vendidos">
              mais de <b className="text-accent-950">12mil</b> lanches
            </StatisticsCard>
            <StatisticsCard icon={UserOutlined} title="Clientes atendidos">
              <b className="text-accent-950">4mil</b> clientes atendidos
            </StatisticsCard>
            <StatisticsCard icon={RiseOutlined} title="Média de avaliação">
              <b>83.6 %</b> de avaliações
            </StatisticsCard>
            <StatisticsCard icon={StarFilled} title="Anos de atuação">
              mais de <b>5 anos</b> de atuação
            </StatisticsCard>
          </div>
        </div>
        <div className="mb-20">
          <Title className="mb-5" level={2}>
            Galeria
          </Title>
          <div className="flex flex-wrap">
            <img alt="image" src="https://placehold.co/1920x1080" />
            <img alt="image" className="w-1/2" src="https://placehold.co/1920x1080" />
            <img alt="image" className="w-1/2" src="https://placehold.co/1920x1080" />
            <img alt="image" className="w-1/2" src="https://placehold.co/1920x1080" />
            <img alt="image" className="w-1/2" src="https://placehold.co/1920x1080" />
            <img alt="image" src="https://placehold.co/1960x768" />
          </div>
        </div>
      </div>
    </div>
  )
}
