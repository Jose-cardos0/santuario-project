//animações
import { AnimatedSection } from "../tools/Animations/AnimatedSections";
import { AnimatedY } from "../tools/Animations/AnimatedY";

import { SliderHistoria } from "../tools/SlidersHistoria";

//routerdom
import { Link } from "react-router-dom";

//img
import pix from "../assets/Doar/pix.png";

export function QueroAjudar() {
  return (
    <main
      className="w-full h-auto
     bg-cutom-gray-strong flex items-center justify-center m-auto"
    >
      <section
        className="max-w-7xl w-full flex-col items-center
       justify-center m-auto mt-40 mm:max-md:px-8"
      >
        <AnimatedSection>
          <div className="w-full flex items-center justify-center">
            <button
              className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2 "
            >
              DESEJA AJUDAR?
            </button>
          </div>
          <h1
            className="text-5xl font-semibold font-roboto text-center
          mm:max-md:text-3xl"
          >
            Desde já agradecemos sua ajuda!
          </h1>
          <p className=" text-xl text-center font-thin mm:max-md:text-sm">
            Ajude-nos a realizar uma obra de Deus
          </p>
          <div
            className="w-full flex items-center 
        justify-center mt-20 gap-4 mm:max-md:flex-col "
          >
            <div className="flex-col justify-center mm:max-md:px-8">
              <h1 className="font-roboto text-end text-3xl font-bold mm:max-md:text-2xl mm:max-md:text-center mm:max-md:-mt-8">
                Faça uma doação e ajude na <br />
                construção do Santuário da <br />
                Divina Misericórdia.
              </h1>
              <div className="flex items-end justify-end ">
                <button
                  className="text-center bg-custom-button
               text-white font-roboto py-5 px-24 mt-3 rounded-md drop-shadow-2xl "
                >
                  <p className="text-2xl font-bold">CHAVE PIX:</p>
                  <p className="text-2xl font-bold">50871648000101</p>
                  <p className="text-sm font-thin">
                    Nome: ASSOCIACAO CATÓLICA <br />
                    NOSSA SENHORA DE FÁTIMA.
                  </p>
                </button>
              </div>
            </div>
            <div>
              <img
                className="max-w-64"
                src={pix}
                alt="doar para o santuario da divina misericordia"
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedY>
          <div
            className="flex-col items-center justify-center m-auto
         mt-28 mm:max-md:mt-16"
          >
            <div className="max-w-7xl flex items-center justify-center">
              <button
                className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2 "
              >
                acompanhe nosso projeto
              </button>
            </div>
            <div className="flex-col items-center justify-center">
              <div className="mm:max-md:w-96 mm:max-md:-ml-7">
                <SliderHistoria />
              </div>
              <div
                className="w-full flex items-end justify-end mb-20 
            mm:max-md:items-center
             mm:max-md:justify-center
              mm:max-md:-mt-16"
              >
                <div
                  className="text-end mr-16 
              mm:max-md:text-center
               mm:max-md:mr-0 mm:max-md:flex
                mm:max-md:items-center mm:max-md:gap-2 "
                >
                  <p
                    className="text-5xl font-semibold 
                  font-roboto text-end
          mm:max-md:text-lg mm:max-md:text-end mm:max-md:max-w-48
           mm:max-md:leading-4"
                  >
                    Conheça o projeto do santuário da divina misericórdia
                  </p>
                  <button
                    className="relative
                    overflow-hidden
                    flex-shrink-0
                    bg-custom-button
                    text-white py-3 
                    px-4 rounded-lg shadow-sm
                    shadow-black font-light 
                    border-none mm:max-md:mt-4 "
                  >
                    <Link to={"/nossahistoria"}>
                      <span
                        className="relative z-10 flex 
                    items-center justify-center"
                      >
                        ver mais &rsaquo;
                      </span>
                    </Link>
                    <span
                      className="absolute inset-0
              bg-gradient-to-r from-white
              to-black
             transform translate-x-full
              transition-transform
              duration-300 ease-in-out z-0 opacity-20"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedY>
      </section>
    </main>
  );
}
