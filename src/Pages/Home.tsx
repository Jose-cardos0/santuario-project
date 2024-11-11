// import bgHome from "../assets/Home/bgHome.svg";
// import animationHome from "../assets/Home/capa1_animation.mp4";
//router
import { Link } from "react-router-dom";

//img
import { SlidersNoticias } from "../tools/SlidersNoticias";
//imgGrids
import grid1 from "../assets/Home/jesusGrid.png";
import grid2 from "../assets/Home/grid2.png";
import grid3 from "../assets/Home/grid3.png";
import grid4 from "../assets/Home/grid4.png";
import bgComunidade from "../assets/Home/bgComunidade.png";
import midia1 from "../assets/Home/midias1.png";
import midia2 from "../assets/Home/midias2.png";
import midia3 from "../assets/Home/midias3.png";
import capa2Animation from "../assets/Home/capa2_animation.mp4";
import footerBg from "../assets/Footer/bgFooter.png";
import pixCod from "../assets/Footer/pixCode.png";
import pixFrase from "../assets/Footer/pixFrase.png";
import santuarioPng from "../assets/Home/santuarioPng.png";

export function Home() {
  return (
    <main>
      <section
        className="relative min-w-full min-h-height-full-96px
       overflow-hidden bg-black"
      >
        <video
          className="absolute top-0 bottom-0 left-0
           w-full mt-24 object-cover z-0   "
          autoPlay
          loop
          muted
        >
          <source src={capa2Animation} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div
          className="relative z-10 
        flex items-center justify-center m-auto w-full h-screen max-w-7xl"
        >
          <div className="absolute left-0 ">
            <h1 className="text-white text-4xl font-roboto font-bold">
              Santuário da <br />
              <span className="text-8xl">
                Divina <br /> Misericórdia
              </span>
            </h1>
            <p className="text-white">Faça parte dessa história de fé.</p>
          </div>
        </div>
      </section>
      {/*INICIO CARROSCEL */}
      <section
        className="
       w-full h-auto flex items-center
       justify-center m-auto bg-custom-gray"
      >
        <SlidersNoticias />
      </section>
      {/*INICIO DO GRID */}
      <section
        className="bg-cutom-gray-strong
       w-full h-auto flex items-center
       justify-center m-auto py-14"
      >
        <div className="flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <button
              className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2 "
            >
              agenda
            </button>
          </div>
          <h1 className="text-5xl font-semibold font-roboto text-center">
            Venha conhecer nossa comunidade católica
          </h1>
          <p className=" text-xl text-center font-thin">
            Particide das nossas missas e orações
          </p>
          <div className="max-w-7xl h-auto mt-6">
            <div className="w-full grid grid-cols-4 gap-8">
              <div className="relative">
                <img
                  className="w-full bg-cover drop-shadow-lg
                   shadow-black cursor-pointer 
                   "
                  src={grid1}
                  alt=""
                />
                <div className="absolute bottom-5 left-4">
                  <p className="font-semibold text-custom-button text-2xl mb-2">
                    Cronograma
                  </p>
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
                    <Link to={"/cronograma"}>
                      <span className="relative z-10 flex items-center justify-center">
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
              <div className="relative">
                <img
                  className="w-full bg-cover drop-shadow-lg
                   shadow-black cursor-pointer 
                   "
                  src={grid2}
                  alt=""
                />
                <div className="absolute bottom-5 left-4">
                  <p className="font-semibold text-custom-button text-2xl mb-2">
                    Eventos
                  </p>
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
                      ver mais &rsaquo;
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
                </div>
              </div>
              <div className="relative">
                <img
                  className="w-full bg-cover drop-shadow-lg
                   shadow-black cursor-pointer 
                   "
                  src={grid3}
                  alt=""
                />
                <div className="absolute bottom-5 left-4">
                  <p className="font-semibold text-custom-button text-2xl mb-2">
                    Adoração
                  </p>
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
                      ver mais &rsaquo;
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
                </div>
              </div>
              <div className="relative">
                <img
                  className="w-full bg-cover drop-shadow-lg
                   shadow-black cursor-pointer 
                   "
                  src={grid4}
                  alt=""
                />
                <div className="absolute bottom-5 left-4">
                  <p className="font-semibold text-custom-button text-2xl mb-2">
                    Outros
                  </p>
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
                      ver mais &rsaquo;
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*INICIO NOSSA HISTORIA */}
      <section
        style={{ backgroundImage: `url(${bgComunidade})` }}
        className="min-w-full 
       h-auto flex item justify-center m-auto
        bg-custom-gray py-14 bg-cover bg-center bg-no-repeat
       "
      >
        <div className="relative h-auto">
          <div className="w-full flex items-center justify-center">
            <button
              className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2 "
            >
              comunidade
            </button>
          </div>
          <div className="max-w-7xl">
            <p className="text-justify mt-8 w-2/3 font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, sequi! Iure ratione dolorem adipisci explicabo aperiam
              aut facere, ut aspernatur hic, officia maiores, dolores iusto
              ducimus ipsam delectus necessitatibus quaerat. Atque, dicta
              laborum voluptatem quis placeat numquam temporibus maxime quae,
              iste perferendis, animi itaque laboriosam quam porro ullam ipsum.
              Excepturi voluptatibus dignissimos possimus eum tenetur aut vitae
              error voluptate nobis? Veritatis nobis repellendus expedita
              aliquid quis esse earum minus perspiciatis consequuntur non? Quo
              reiciendis maxime assumenda odio atque velit harum, nam alias ut
              culpa sapiente dolorum mollitia, iusto iure! Fugit. Voluptatum
              sint ratione, quaerat quod in deleniti hic dignissimos id quam
              exercitationem rem, delectus, libero veniam atque sunt aperiam
              assumenda eligendi nostrum. Iste odio dolore amet consequatur
              deserunt culpa ducimus! Facilis, ullam atque nobis illum iste
              voluptatum quisquam doloribus magnam maiores hic incidunt
              asperiores officia, qui aliquam. Ut eos velit excepturi corrupti,
              totam ipsum expedita magnam assumenda, aut sed dolorem. Ab iusto
              autem earum, rem deleniti laboriosam saepe sunt accusantium esse
              sapiente. Culpa a nisi, quos facilis saepe cum est magni
              asperiores quisquam quibusdam animi natus veritatis, consequatur
              obcaecati ab? Asperiores cum eos consequatur architecto
              dignissimos a in repellat? Fuga, nemo, ullam ratione eveniet
              voluptates libero, deserunt labore fugit accusantium dolores quas.
              Excepturi, ea odit. Est et unde nisi repudiandae. Tenetur earum
              exercitationem assumenda cupiditate quia asperiores placeat
              reiciendis quidem, quae, delectus aliquam vitae sapiente illum
              recusandae nihil vel molestiae vero explicabo et? Provident harum
              numquam neque eligendi error impedit. Voluptatum delectus fugit
              sunt corporis, excepturi reprehenderit, ipsum maxime iste sit eius
              dolor provident facere eveniet similique, perspiciatis magnam?
              Doloribus modi, sapiente repudiandae temporibus impedit totam
              possimus earum vel explicabo? Pariatur nam voluptate impedit,
              exercitationem aut libero quibusdam asperiores dolor quod iure
              minima, facere ex qui itaque vitae totam sunt! Praesentium sint
              dignissimos ullam neque impedit corporis perferendis quod
              voluptatem. Quis beatae error reprehenderit magnam tempora,
              placeat aperiam doloribus asperiores neque dolorem in
              exercitationem architecto sunt enim expedita nostrum corrupti
              velit labore quas animi autem esse. Adipisci veritatis quam
            </p>
          </div>
        </div>
      </section>
      {/*IMAGENS */}
      <section
        className="bg-cutom-gray-strong pb-12
           "
      >
        <div className="w-full flex items-center justify-center ">
          <button
            className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2 mt-14"
          >
            mídias
          </button>
        </div>
        <h1 className="font-roboto font-semibold text-5xl text-center mt-5">
          Albuns de fotos e vídeos
        </h1>
        <p className=" text-xl text-center font-thin">
          Acompanhe nossos eventos
        </p>
        <div
          className="max-w-7xl h-auto  
        grid grid-cols-3 items-center 
        justify-center m-auto relative mt-14 gap-14"
        >
          <div className="mb-52 cursor-pointer hover:scale-105 transition duration-500">
            <img className="" src={midia1} alt="" />
          </div>
          <div className="mt-40 cursor-pointer hover:scale-105 transition duration-500">
            <img className="" src={midia2} alt="" />
          </div>
          <div className=" cursor-pointer hover:scale-105 transition duration-500">
            <img className="" src={midia3} alt="" />
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundImage: `url(${footerBg})` }}
        className="w-full h-auto bg-cover bg-center bg-no-repeat flex items-center justify-center m-auto"
      >
        <div className="max-w-7xl flex items-center justify-between p-10">
          <img className="max-w-md" src={santuarioPng} alt="" />
          <div className="flex items-center justify-center">
            <img src={pixFrase} alt="" />
            <img className="" src={pixCod} alt="" />
          </div>
        </div>
      </footer>
    </main>
  );
}
