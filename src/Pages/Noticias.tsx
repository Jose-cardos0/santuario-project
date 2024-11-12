//animações
import { AnimatedSection } from "../tools/Animations/AnimatedSections";
import { AnimatedY } from "../tools/Animations/AnimatedY";

//imgs
import bispo from "../assets/Noticias/bispo.jpg";

//react-router
import { Link } from "react-router-dom";

export function Noticias() {
  return (
    <main className="w-full min-h-screen flex-col items-center justify-center m-auto bg-cutom-gray-strong">
      <section className="bg-center bg-cover bg-no-repeat max-w-7xl flex items-center justify-center m-auto">
        <div
          className="flex-col items-center
         justify-center w-full mm:max-md:px-6 mm:max-md:mb-16"
        >
          <AnimatedSection>
            <div
              className="w-full flex-col items-center
             justify-center mt-40 "
            >
              <div
                className="w-full flex
             items-center justify-center"
              >
                <button
                  className="uppercase
                 bg-custom-button text-white
                px-2 rounded-md mb-2 "
                >
                  notícias
                </button>
              </div>
              <h1
                className="text-5xl
               font-semibold font-roboto text-center mt-3
               mm:max-md:text-4xl"
              >
                Acompanhe-nos no dia a dia!
              </h1>
              <p className=" text-xl text-center font-thin">Últimas notícias</p>
            </div>
            {/*PRIMEIRA NOTICIA */}
            <div
              className="w-full flex-col bg-custom-gray rounded-xl 
            drop-shadow-lg shadow-black mt-16 mm:max-md:mt-8"
            >
              <div className="flex items-center p-10 mm:max-md:flex-col">
                <img
                  className="max-w-52 
                  rounded-md drop-shadow-lg shadow-black mm:max-md:max-w-72"
                  src={bispo}
                  alt=""
                />
                <div className="w-full">
                  <h1
                    className="text-5xl
                   font-semibold font-roboto text-center mt-3 mm:max-md:text-3xl mm:max-md:mt-8"
                  >
                    Visita do Bispo <br /> ao Santuário
                  </h1>
                </div>
              </div>
              <div className="w-full flex items-center justify-center m-auto px-10 pb-10">
                <p className="text-justify">
                  Imagine uma comunidade católica radiante, onde o amor, a
                  harmonia e a fé são vivenciados intensamente. Esta comunidade
                  encontra sua base sólida em Jesus Cristo, visto como o centro
                  de tudo, o Salvador e guia de cada ação e decisão. Santa
                  Faustina, a apóstola da Divina Misericórdia, inspira a todos a
                  viverem com compaixão, praticando o perdão e a bondade, sempre
                  confiando na misericórdia de Deus. Em cada encontro, seja na
                  missa ou nos momentos de oração, o ambiente é acolhedor, com
                  todos os membros se tratando como irmãos. A comunidade se une
                  em várias atividades: catequese para jovens e crianças, grupos
                  de oração que intercedem pelos mais necessitados, e momentos
                  de adoração ao Santíssimo Sacramento, onde a presença de
                  Cristo é sentida de forma profunda. A devoção à Divina
                  Misericórdia, ensinada por Santa Faustina, é praticada com
                  fervor, e o Terço da Misericórdia é rezado diariamente,
                  trazendo uma sensação de paz e união entre todos. Essa
                  comunidade busca ser luz para o mundo, com membros que se
                  dedicam ao próximo e mantêm a esperança viva, testemunhando
                  sua fé em Jesus e inspirando outros a experimentarem o amor de
                  Deus. Cada encontro termina com um espírito renovado de
                  missão: levar aos demais o amor e a misericórdia que eles
                  mesmos experimentam na comunidade.Imagine uma comunidade
                  católica radiante, onde o amor, a harmonia e a fé são
                  vivenciados intensamente. Esta comunidade encontra sua base
                  sólida em Jesus Cristo, visto como o centro de tudo, o
                  Salvador e guia de cada ação e decisão. Santa Faustina, a
                  apóstola da Divina Misericórdia, inspira a todos a viverem com
                  compaixão, praticando o perdão e a bondade, sempre confiando
                  na misericórdia de Deus. Em cada encontro, seja na missa ou
                  nos momentos de oração, o ambiente é acolhedor, com todos os
                  membros se tratando como irmãos. A comunidade se une em várias
                  atividades: catequese para jovens e crianças, grupos de oração
                  que intercedem pelos mais necessitados, e momentos de adoração
                  ao Santíssimo Sacramento, onde a presença de Cristo é sentida
                  de forma profunda. A devoção à Divina Misericórdia, ensinada
                  por Santa Faustina, é praticada com fervor, e o Terço da
                  Misericórdia é rezado diariamente, trazendo uma sensação de
                  paz e união entre todos. Essa comunidade busca ser luz para o
                  mundo, com membros que se dedicam ao próximo e mantêm a
                  esperança viva, testemunhando sua fé em Jesus e inspirando
                  outros a experimentarem o amor de Deus. Cada encontro termina
                  com um espírito renovado de missão: levar aos demais o amor e
                  a misericórdia que eles mesmos experimentam na comunidade.
                </p>
              </div>
              <div className="w-11/12 border-2 border-gray-400 flex items-center justify-center m-auto"></div>
              <div className="w-full flex  items-center justify-end p-10">
                <Link to={"/midias"}>
                  <button
                    className="relative 
                    overflow-hidden
                    flex-shrink-0
                   bg-custom-button
                    text-white py-3 
                    px-4 rounded-lg shadow-sm
                    shadow-black font-light 
                    border-none "
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      ver mídias &rsaquo;
                    </span>
                    <span
                      className="absolute inset-0
              bg-gradient-to-r from-white
               to-black
             transform translate-x-full
              transition-transform
              duration-300 ease-in-out z-0 opacity-20"
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          {/*FIM PRIMEIRA NOTICIA */}
          <AnimatedY>
            <div
              className="w-full flex-col bg-custom-gray rounded-xl 
            drop-shadow-lg shadow-black mt-16 mm:max-md:mt-8"
            >
              <div className="flex items-center p-10 mm:max-md:flex-col">
                <img
                  className="max-w-52 
                  rounded-md drop-shadow-lg shadow-black mm:max-md:max-w-72"
                  src={bispo}
                  alt=""
                />
                <div className="w-full">
                  <h1
                    className="text-5xl
                   font-semibold font-roboto text-center mt-3 mm:max-md:text-3xl mm:max-md:mt-8"
                  >
                    Visita do Bispo <br /> ao Santuário
                  </h1>
                </div>
              </div>
              <div className="w-full flex items-center justify-center m-auto px-10 pb-10">
                <p className="text-justify">
                  Imagine uma comunidade católica radiante, onde o amor, a
                  harmonia e a fé são vivenciados intensamente. Esta comunidade
                  encontra sua base sólida em Jesus Cristo, visto como o centro
                  de tudo, o Salvador e guia de cada ação e decisão. Santa
                  Faustina, a apóstola da Divina Misericórdia, inspira a todos a
                  viverem com compaixão, praticando o perdão e a bondade, sempre
                  confiando na misericórdia de Deus. Em cada encontro, seja na
                  missa ou nos momentos de oração, o ambiente é acolhedor, com
                  todos os membros se tratando como irmãos. A comunidade se une
                  em várias atividades: catequese para jovens e crianças, grupos
                  de oração que intercedem pelos mais necessitados, e momentos
                  de adoração ao Santíssimo Sacramento, onde a presença de
                  Cristo é sentida de forma profunda. A devoção à Divina
                  Misericórdia, ensinada por Santa Faustina, é praticada com
                  fervor, e o Terço da Misericórdia é rezado diariamente,
                  trazendo uma sensação de paz e união entre todos. Essa
                  comunidade busca ser luz para o mundo, com membros que se
                  dedicam ao próximo e mantêm a esperança viva, testemunhando
                  sua fé em Jesus e inspirando outros a experimentarem o amor de
                  Deus. Cada encontro termina com um espírito renovado de
                  missão: levar aos demais o amor e a misericórdia que eles
                  mesmos experimentam na comunidade.Imagine uma comunidade
                  católica radiante, onde o amor, a harmonia e a fé são
                  vivenciados intensamente. Esta comunidade encontra sua base
                  sólida em Jesus Cristo, visto como o centro de tudo, o
                  Salvador e guia de cada ação e decisão. Santa Faustina, a
                  apóstola da Divina Misericórdia, inspira a todos a viverem com
                  compaixão, praticando o perdão e a bondade, sempre confiando
                  na misericórdia de Deus. Em cada encontro, seja na missa ou
                  nos momentos de oração, o ambiente é acolhedor, com todos os
                  membros se tratando como irmãos. A comunidade se une em várias
                  atividades: catequese para jovens e crianças, grupos de oração
                  que intercedem pelos mais necessitados, e momentos de adoração
                  ao Santíssimo Sacramento, onde a presença de Cristo é sentida
                  de forma profunda. A devoção à Divina Misericórdia, ensinada
                  por Santa Faustina, é praticada com fervor, e o Terço da
                  Misericórdia é rezado diariamente, trazendo uma sensação de
                  paz e união entre todos. Essa comunidade busca ser luz para o
                  mundo, com membros que se dedicam ao próximo e mantêm a
                  esperança viva, testemunhando sua fé em Jesus e inspirando
                  outros a experimentarem o amor de Deus. Cada encontro termina
                  com um espírito renovado de missão: levar aos demais o amor e
                  a misericórdia que eles mesmos experimentam na comunidade.
                </p>
              </div>
              <div className="w-11/12 border-2 border-gray-400 flex items-center justify-center m-auto"></div>
              <div className="w-full flex  items-center justify-end p-10">
                <Link to={"/midias"}>
                  <button
                    className="relative 
                    overflow-hidden
                    flex-shrink-0
                   bg-custom-button
                    text-white py-3 
                    px-4 rounded-lg shadow-sm
                    shadow-black font-light 
                    border-none "
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      ver mídias &rsaquo;
                    </span>
                    <span
                      className="absolute inset-0
              bg-gradient-to-r from-white
               to-black
             transform translate-x-full
              transition-transform
              duration-300 ease-in-out z-0 opacity-20"
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedY>
          {/*FIM SEGUNDA NOTICIA */}
          <AnimatedY>
            <div
              className="w-full flex-col bg-custom-gray rounded-xl 
            drop-shadow-lg shadow-black mt-16 mm:max-md:mt-8"
            >
              <div className="flex items-center p-10 mm:max-md:flex-col">
                <img
                  className="max-w-52 
                  rounded-md drop-shadow-lg shadow-black mm:max-md:max-w-72"
                  src={bispo}
                  alt=""
                />
                <div className="w-full">
                  <h1
                    className="text-5xl
                   font-semibold font-roboto text-center mt-3 mm:max-md:text-3xl mm:max-md:mt-8"
                  >
                    Visita do Bispo <br /> ao Santuário
                  </h1>
                </div>
              </div>
              <div className="w-full flex items-center justify-center m-auto px-10 pb-10">
                <p className="text-justify">
                  Imagine uma comunidade católica radiante, onde o amor, a
                  harmonia e a fé são vivenciados intensamente. Esta comunidade
                  encontra sua base sólida em Jesus Cristo, visto como o centro
                  de tudo, o Salvador e guia de cada ação e decisão. Santa
                  Faustina, a apóstola da Divina Misericórdia, inspira a todos a
                  viverem com compaixão, praticando o perdão e a bondade, sempre
                  confiando na misericórdia de Deus. Em cada encontro, seja na
                  missa ou nos momentos de oração, o ambiente é acolhedor, com
                  todos os membros se tratando como irmãos. A comunidade se une
                  em várias atividades: catequese para jovens e crianças, grupos
                  de oração que intercedem pelos mais necessitados, e momentos
                  de adoração ao Santíssimo Sacramento, onde a presença de
                  Cristo é sentida de forma profunda. A devoção à Divina
                  Misericórdia, ensinada por Santa Faustina, é praticada com
                  fervor, e o Terço da Misericórdia é rezado diariamente,
                  trazendo uma sensação de paz e união entre todos. Essa
                  comunidade busca ser luz para o mundo, com membros que se
                  dedicam ao próximo e mantêm a esperança viva, testemunhando
                  sua fé em Jesus e inspirando outros a experimentarem o amor de
                  Deus. Cada encontro termina com um espírito renovado de
                  missão: levar aos demais o amor e a misericórdia que eles
                  mesmos experimentam na comunidade.Imagine uma comunidade
                  católica radiante, onde o amor, a harmonia e a fé são
                  vivenciados intensamente. Esta comunidade encontra sua base
                  sólida em Jesus Cristo, visto como o centro de tudo, o
                  Salvador e guia de cada ação e decisão. Santa Faustina, a
                  apóstola da Divina Misericórdia, inspira a todos a viverem com
                  compaixão, praticando o perdão e a bondade, sempre confiando
                  na misericórdia de Deus. Em cada encontro, seja na missa ou
                  nos momentos de oração, o ambiente é acolhedor, com todos os
                  membros se tratando como irmãos. A comunidade se une em várias
                  atividades: catequese para jovens e crianças, grupos de oração
                  que intercedem pelos mais necessitados, e momentos de adoração
                  ao Santíssimo Sacramento, onde a presença de Cristo é sentida
                  de forma profunda. A devoção à Divina Misericórdia, ensinada
                  por Santa Faustina, é praticada com fervor, e o Terço da
                  Misericórdia é rezado diariamente, trazendo uma sensação de
                  paz e união entre todos. Essa comunidade busca ser luz para o
                  mundo, com membros que se dedicam ao próximo e mantêm a
                  esperança viva, testemunhando sua fé em Jesus e inspirando
                  outros a experimentarem o amor de Deus. Cada encontro termina
                  com um espírito renovado de missão: levar aos demais o amor e
                  a misericórdia que eles mesmos experimentam na comunidade.
                </p>
              </div>
              <div className="w-11/12 border-2 border-gray-400 flex items-center justify-center m-auto"></div>
              <div className="w-full flex  items-center justify-end p-10">
                <Link to={"/midias"}>
                  <button
                    className="relative 
                    overflow-hidden
                    flex-shrink-0
                   bg-custom-button
                    text-white py-3 
                    px-4 rounded-lg shadow-sm
                    shadow-black font-light 
                    border-none "
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      ver mídias &rsaquo;
                    </span>
                    <span
                      className="absolute inset-0
              bg-gradient-to-r from-white
               to-black
             transform translate-x-full
              transition-transform
              duration-300 ease-in-out z-0 opacity-20"
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedY>
          {/*FIM TERCEIRA NOTICIA */}
        </div>
      </section>
    </main>
  );
}
