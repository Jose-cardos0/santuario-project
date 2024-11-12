import bgNossaHistoria from "../assets/NossaHistoria/bgHistoria.png";
import fundadores from "../assets/NossaHistoria/fundadores.png";
import footerBg from "../assets/Footer/bgFooter.png";
import pixCod from "../assets/Footer/pixCode.png";
import pixFrase from "../assets/Footer/pixFrase.png";
import santuarioPng from "../assets/Home/santuarioPng.png";

//slider
import { SliderHistoria } from "../tools/SlidersHistoria";

//video
import capa2Animation from "../assets/Home/capa2_animation.mp4";

//animações
import { AnimatedSection } from "../tools/Animations/AnimatedSections";
import { AnimatedNegative } from "../tools/Animations/AnimatedNegative";

export function NossaHistoria() {
  return (
    <main className="w-full h-auto flex-col items-center justify-center m-auto">
      <section
        style={{ backgroundImage: `url(${bgNossaHistoria})` }}
        className="bg-center bg-cover bg-no-repeat w-full flex items-center justify-center"
      >
        <AnimatedSection>
          <div className="max-w-7xl flex-col items-center justify-center mt-40 ">
            <div
              className="w-full flex
         items-center justify-center"
            >
              <button
                className="uppercase
             bg-custom-button text-white
            px-2 rounded-md mb-2 "
              >
                nossa história
              </button>
            </div>
            <h1 className="text-5xl font-semibold font-roboto text-center mt-3">
              História do Santuário da Divina Misericórdia
            </h1>
            <div className="w-full flex items-center justify-center m-auto mt-14">
              <p className="w-full mb-14 text-justify mm:max-md:px-8">
                Imagine uma comunidade católica radiante, onde o amor, a
                harmonia e a fé são vivenciados intensamente. Esta comunidade
                encontra sua base sólida em Jesus Cristo, visto como o centro de
                tudo, o Salvador e guia de cada ação e decisão. Santa Faustina,
                a apóstola da Divina Misericórdia, inspira a todos a viverem com
                compaixão, praticando o perdão e a bondade, sempre confiando na
                misericórdia de Deus. Em cada encontro, seja na missa ou nos
                momentos de oração, o ambiente é acolhedor, com todos os membros
                se tratando como irmãos. A comunidade se une em várias
                atividades: catequese para jovens e crianças, grupos de oração
                que intercedem pelos mais necessitados, e momentos de adoração
                ao Santíssimo Sacramento, onde a presença de Cristo é sentida de
                forma profunda. A devoção à Divina Misericórdia, ensinada por
                Santa Faustina, é praticada com fervor, e o Terço da
                Misericórdia é rezado diariamente, trazendo uma sensação de paz
                e união entre todos. Essa comunidade busca ser luz para o mundo,
                com membros que se dedicam ao próximo e mantêm a esperança viva,
                testemunhando sua fé em Jesus e inspirando outros a
                experimentarem o amor de Deus. Cada encontro termina com um
                espírito renovado de missão: levar aos demais o amor e a
                misericórdia que eles mesmos experimentam na comunidade.Imagine
                uma comunidade católica radiante, onde o amor, a harmonia e a fé
                são vivenciados intensamente. Esta comunidade encontra sua base
                sólida em Jesus Cristo, visto como o centro de tudo, o Salvador
                e guia de cada ação e decisão. Santa Faustina, a apóstola da
                Divina Misericórdia, inspira a todos a viverem com compaixão,
                praticando o perdão e a bondade, sempre confiando na
                misericórdia de Deus. Em cada encontro, seja na missa ou nos
                momentos de oração, o ambiente é acolhedor, com todos os membros
                se tratando como irmãos. A comunidade se une em várias
                atividades: catequese para jovens e crianças, grupos de oração
                que intercedem pelos mais necessitados, e momentos de adoração
                ao Santíssimo Sacramento, onde a presença de Cristo é sentida de
                forma profunda. A devoção à Divina Misericórdia, ensinada por
                Santa Faustina, é praticada com fervor, e o Terço da
                Misericórdia é rezado diariamente, trazendo uma sensação de paz
                e união entre todos. Essa comunidade busca ser luz para o mundo,
                com membros que se dedicam ao próximo e mantêm a esperança viva,
                testemunhando sua fé em Jesus e inspirando outros a
                experimentarem o amor de Deus. Cada encontro termina com um
                espírito renovado de missão: levar aos demais o amor e a
                misericórdia que eles mesmos experimentam na comunidade.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-custom-gray">
        <div
          className="w-full flex
         items-center justify-center"
        >
          <button
            className="uppercase
             bg-custom-button text-white
            px-2 rounded-md mb-2 mt-14 "
          >
            carrossel de fotos
          </button>
        </div>
        <h1 className="text-5xl font-semibold font-roboto text-center my-3 mb-10">
          Acompanhe a realização da nossa missão
        </h1>
        <AnimatedSection>
          <div className="max-w-7xl h-auto flex items-center justify-center m-auto ">
            <SliderHistoria />
          </div>
        </AnimatedSection>
      </section>
      <section
        className="w-full h-auto flex items-center
       justify-center m-auto bg-cutom-gray-strong overflow-hidden  "
      >
        <AnimatedNegative>
          <div
            className="max-w-7xl flex items-center justify-center
           m-auto gap-16 mt-10 overflow-hidden mm:max-md:flex-col
            mm:max-md:px-8 mm:max-md:mt-16"
          >
            <div>
              <img
                className="drop-shadow-lg shadow-black"
                src={fundadores}
                alt=""
              />
            </div>
            <div
              className="w-full flex items-center 
            justify-center m-auto mt-14 overflow-hidden mm:max-md:mt-0"
            >
              <p className="w-full mb-14 text-justify">
                Imagine uma comunidade católica radiante, onde o amor, a
                harmonia e a fé são vivenciados intensamente. Esta comunidade
                encontra sua base sólida em Jesus Cristo, visto como o centro de
                tudo, o Salvador e guia de cada ação e decisão. Santa Faustina,
                a apóstola da Divina Misericórdia, inspira a todos a viverem com
                compaixão, praticando o perdão e a bondade, sempre confiando na
                misericórdia de Deus. Em cada encontro, seja na missa ou nos
                momentos de oração, o ambiente é acolhedor, com todos os membros
                se tratando como irmãos. A comunidade se une em várias
                atividades: catequese para jovens e crianças, grupos de oração
                que intercedem pelos mais necessitados, e momentos de adoração
                ao Santíssimo Sacramento, onde a presença de Cristo é sentida de
                forma profunda. A devoção à Divina Misericórdia, ensinada por
                Santa Faustina, é praticada com fervor, e o Terço da
                Misericórdia é rezado diariamente, trazendo uma sensação de paz
                e união entre todos.
              </p>
            </div>
          </div>
        </AnimatedNegative>
      </section>
      <section
        className="w-full h-auto flex items-center justify-center m-auto
       bg-cutom-gray-strong overflow-hidden "
      >
        <AnimatedNegative>
          <div
            className="max-w-7xl
           flex-col items-center justify-center
            m-auto gap-16 mt-10 mb-16 overflow-hidden mm:max-md:mt-0"
          >
            <div
              className="w-full flex
         items-center justify-center"
            >
              <button
                className="uppercase
             bg-custom-button text-white
            px-2 rounded-md mb-2 mt-14 "
              >
                projeto
              </button>
            </div>
            <h1
              className="text-5xl font-semibold
             font-roboto text-center my-3 mb-10 mm:max-md:px-8"
            >
              Apresentação do projeto
            </h1>
            <div className="w-full flex items-center justify-center mm:max-md:px-8">
              <video
                className="shadow-md shadow-black rounded-xl"
                src={capa2Animation}
                controls
                autoPlay
                loop
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </AnimatedNegative>
      </section>
      <footer
        style={{ backgroundImage: `url(${footerBg})` }}
        className="w-full h-auto bg-cover bg-center bg-no-repeat flex 
        items-center justify-center m-auto"
      >
        <div className="max-w-7xl flex items-center justify-between p-10 mm:max-md:flex-col">
          <img className="max-w-md mm:max-md:w-80" src={santuarioPng} alt="" />
          <div className="flex items-center justify-center mm:max-md:flex-col">
            <img src={pixFrase} alt="" />
            <img className="mm:max-md:hidden" src={pixCod} alt="" />
          </div>
        </div>
      </footer>
    </main>
  );
}
