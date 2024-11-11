import fundadora from "../assets/Fundadora/fundadora.png";
import familiaDantas from "../assets/Fundadora/familiaDants.png";

//animações
import { AnimatedSection } from "../tools/Animations/AnimatedSections";
import { AnimatedNegative } from "../tools/Animations/AnimatedNegative";
import { AnimatedY } from "../tools/Animations/AnimatedY";

export function Fundadora() {
  return (
    <main className="w-full h-auto bg-cutom-gray-strong flex items-center justify-center m-auto">
      <section className="max-w-7xl flex-col items-center justify-center mt-40">
        <AnimatedY>
          <div
            className="w-full flex
         items-center justify-center"
          >
            <button
              className="uppercase
             bg-custom-button text-white
            px-2 rounded-md mb-2 "
            >
              fundadora
            </button>
          </div>
          <h1 className="text-5xl font-semibold font-roboto text-center">
            Conheça Janea Maria, nossa fundadora!
          </h1>
          <p className=" text-xl text-center font-thin">Uma história de fé.</p>
          <div className="w-full">
            <img className="w-full" src={fundadora} alt="Janea Maria" />
          </div>
        </AnimatedY>
        <AnimatedSection>
          <h1 className="text-5xl font-semibold font-roboto text-center mt-14">
            A mãe de toda uma geração!
          </h1>
          <div className="w-full flex items-center justify-center m-auto mt-14">
            <p className=" max-w-3xl">
              Imagine uma comunidade católica radiante, onde o amor, a harmonia
              e a fé são vivenciados intensamente. Esta comunidade encontra sua
              base sólida em Jesus Cristo, visto como o centro de tudo, o
              Salvador e guia de cada ação e decisão. Santa Faustina, a apóstola
              da Divina Misericórdia, inspira a todos a viverem com compaixão,
              praticando o perdão e a bondade, sempre confiando na misericórdia
              de Deus. Em cada encontro, seja na missa ou nos momentos de
              oração, o ambiente é acolhedor, com todos os membros se tratando
              como irmãos. A comunidade se une em várias atividades: catequese
              para jovens e crianças, grupos de oração que intercedem pelos mais
              necessitados, e momentos de adoração ao Santíssimo Sacramento,
              onde a presença de Cristo é sentida de forma profunda. A devoção à
              Divina Misericórdia, ensinada por Santa Faustina, é praticada com
              fervor, e o Terço da Misericórdia é rezado diariamente, trazendo
              uma sensação de paz e união entre todos. Essa comunidade busca ser
              luz para o mundo, com membros que se dedicam ao próximo e mantêm a
              esperança viva, testemunhando sua fé em Jesus e inspirando outros
              a experimentarem o amor de Deus. Cada encontro termina com um
              espírito renovado de missão: levar aos demais o amor e a
              misericórdia que eles mesmos experimentam na comunidade.Imagine
              uma comunidade católica radiante, onde o amor, a harmonia e a fé
              são vivenciados intensamente. Esta comunidade encontra sua base
              sólida em Jesus Cristo, visto como o centro de tudo, o Salvador e
              guia de cada ação e decisão. Santa Faustina, a apóstola da Divina
              Misericórdia, inspira a todos a viverem com compaixão, praticando
              o perdão e a bondade, sempre confiando na misericórdia de Deus. Em
              cada encontro, seja na missa ou nos momentos de oração, o ambiente
              é acolhedor, com todos os membros se tratando como irmãos. A
              comunidade se une em várias atividades: catequese para jovens e
              crianças, grupos de oração que intercedem pelos mais necessitados,
              e momentos de adoração ao Santíssimo Sacramento, onde a presença
              de Cristo é sentida de forma profunda. A devoção à Divina
              Misericórdia, ensinada por Santa Faustina, é praticada com fervor,
              e o Terço da Misericórdia é rezado diariamente, trazendo uma
              sensação de paz e união entre todos. Essa comunidade busca ser luz
              para o mundo, com membros que se dedicam ao próximo e mantêm a
              esperança viva, testemunhando sua fé em Jesus e inspirando outros
              a experimentarem o amor de Deus. Cada encontro termina com um
              espírito renovado de missão: levar aos demais o amor e a
              misericórdia que eles mesmos experimentam na comunidade.
            </p>
          </div>
        </AnimatedSection>
        <div className="w-full overflow-hidden">
          <AnimatedNegative>
            <img
              className="w-full"
              src={familiaDantas}
              alt="santuario da divina misericordia"
            />
          </AnimatedNegative>
        </div>
      </section>
    </main>
  );
}
