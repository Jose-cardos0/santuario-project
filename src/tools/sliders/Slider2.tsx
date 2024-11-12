import { useEffect, useState } from "react";
import noticia1 from "../../assets/Home/noticia1.jpg";

export function Slider2() {
  const [isWidth, setIsWidth] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setIsWidth(true);
      } else {
        setIsWidth(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full 
      h-auto flex items-center justify-center
      gap-3"
    >
      <div
        className="w-1/2 flex-col 
         items-start justify-start mm:max-md:w-full"
      >
        <button
          className="uppercase bg-custom-button text-white
          px-2 rounded-md mb-2 mm:max-md:text-sm"
        >
          notícias
        </button>
        <h1
          className="text-5xl font-semibold font-roboto
         mb-2 "
        >
          Notícias do santuário <br />
          Divina Misericórdia!
        </h1>
        <p className="mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          incidunt facilis quisquam quasi iure esse dolor distinctio rerum ipsum
          excepturi accusantium eum quas numquam quia, rem veritatis quis
          nostrum corrupti.
        </p>
        {isWidth === true ? (
          <img
            className="w-full max-h-48 my-6
             object-cover rounded-lg 
           cursor-pointer 
            hover:scale-105 transition duration-300 hover:rounded-lg"
            src={noticia1}
            alt=""
          />
        ) : (
          ""
        )}
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
         overflow-hidden 
         rounded-lg py-20 mm:max-md:hidden "
      >
        <img
          className="w-full max-h-48 
            object-cover rounded-lg 
          cursor-pointer 
           hover:scale-105 transition duration-300 hover:rounded-lg"
          src={noticia1}
          alt=""
        />
      </div>
    </div>
  );
}
