// import bgHome from "../assets/Home/bgHome.svg";
import animationHome from "../assets/Home/capa1_animation.mp4";

//img
import noticia1 from "../assets/Home/noticia1.jpg";
//imgGrids
import grid1 from "../assets/Home/jesusGrid.png";

export function Home() {
  return (
    <main>
      <section className="relative min-w-full min-h-height-full-96px overflow-hidden">
        <video
          className="absolute top-0 left-0
           w-full object-cover z-0 blur-sm"
          autoPlay
          loop
          muted
        >
          <source src={animationHome} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div
          className="relative z-10 
        flex items-center justify-center m-auto w-full h-screen"
        >
          <div className="absolute top-52 left-20 right-0 ">
            <h1 className="text-white text-4xl font-roboto font-bold">
              Santuário da <br />
              <span className="text-9xl">
                Divina <br /> Misericórdia
              </span>
            </h1>
            <p className="text-white">Faça parte dessa história de fé.</p>
          </div>
        </div>
      </section>
      {/*INICIO CARROSCEL */}
      <section
        className="bg-custom-gray
       w-full h-auto flex items-center
       justify-center m-auto py-14"
      >
        <div
          className="max-w-7xl 
        max-h-60 flex items-center justify-center
        gap-3"
        >
          <div
            className="w-1/2 h-full flex-col
           items-start justify-start "
          >
            <button
              className="uppercase bg-custom-button text-white
            px-2 rounded-md mb-2"
            >
              notícias
            </button>
            <h1 className="text-5xl font-semibold font-roboto mb-2">
              Notícias do santuário <br />
              Divina Misericórdia!
            </h1>
            <p className="mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              incidunt facilis quisquam quasi iure esse dolor distinctio rerum
              ipsum excepturi accusantium eum quas numquam quia, rem veritatis
              quis nostrum corrupti.
            </p>
            <button
              className="relative 
            overflow-hidden
             flex-shrink-0
      bg-custom-button
      text-white py-3 
      px-14 rounded-md shadow-sm
      shadow-black font-light 
       border-none "
            >
              <span className="relative z-10 flex items-center justify-center">
                VEJA MAIS &rsaquo;
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
          <div
            className="w-1/2 h-full
           overflow-hidden drop-shadow-2xl
           rounded-lg shadow-black "
          >
            <img
              className="w-full max-h-48 
              object-cover rounded-lg 
            cursor-pointer
             hover:scale-105 transition duration-300"
              src={noticia1}
              alt=""
            />
          </div>
        </div>
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
          <div className="max-w-7xl h-auto">
            <div className="w-full grid grid-cols-4">
              <div>
                <img className="w-full bg-cover" src={grid1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
