import { useState, useEffect, useRef } from "react";
import headerlogo from "../assets/Header/header.svg";
import { Link } from "react-router-dom";

//animações
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWidth, setIsWidth] = useState<boolean>(false);
  console.log(isOpen);

  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="w-full min-h-24
     bg-custom-gray flex items-center 
     justify-center 
     shadow-2xl shadow-black
    fixed z-50"
    >
      {isWidth === true ? (
        <section
          className=" w-11/12 flex items-center 
        justify-between"
        >
          <div className={isOpen ? "w-7 bg-slate-200" : "w-7"}>
            <div onClick={() => setIsOpen((prev) => !prev)}>
              <div className="">
                <div className="border-2 border-gray-500 w-full mb-1"></div>
                <div className="border-2 border-gray-500 w-full mb-1"></div>
                <div className="border-2 border-gray-500 w-full"></div>
              </div>
            </div>
          </div>
          {isOpen === true ? (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute flex items-center
               justify-center h-screen w-8/12
                bg-custom-gray top-24 left-0 ring-0 shadow-xl
                 shadow-black"
            >
              <div className="w-full text-center -mt-56">
                <Link to={"/"}>
                  <div
                    className="flex items-center 
                  justify-center mb-5"
                  >
                    <img
                      onClick={handleOptionClick}
                      className="max-w-40 max-h-16"
                      src={headerlogo}
                      alt=""
                    />
                  </div>
                </Link>
                <Link to={"/"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black font-thin "
                  >
                    Comunidade
                  </p>
                </Link>
                <Link to={"/cronograma"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black  font-thin"
                  >
                    Cronogramas
                  </p>
                </Link>
                <Link to={"/fundadora"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black font-thin "
                  >
                    Fundadora
                  </p>
                </Link>
                <Link to={"/nossahistoria"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black  font-thin"
                  >
                    Nossa história
                  </p>
                </Link>
                <Link to={"/midias"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black  font-thin"
                  >
                    Mídias
                  </p>
                </Link>
                <Link to={"/noticias"}>
                  <p
                    onClick={handleOptionClick}
                    className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 text-black  font-thin"
                  >
                    Notícias
                  </p>
                </Link>
              </div>
            </motion.div>
          ) : (
            ""
          )}
          <Link to={"/"}>
            <div className="flex items-center justify-center m-auto w-full">
              <img className="max-w-32 max-h-16" src={headerlogo} alt="" />
            </div>
          </Link>
          <button
            className="relative 
            overflow-hidden
             flex-shrink-0
      bg-custom-button
      text-white py-3 
      px-2 rounded-md shadow-sm
      shadow-black font-light 
       border-none "
          >
            <span className="relative z-10">DOAR</span>
            <span
              className="absolute inset-0
              bg-gradient-to-r from-white
               to-black
             transform translate-x-full
              transition-transform
              duration-300 ease-in-out z-0 opacity-20"
            ></span>
          </button>
        </section>
      ) : (
        <div className="w-8/12 flex items-center justify-center gap-8">
          <Link to={"/"}>
            <div className="flex-shrink">
              <img className="max-w-40 max-h-16" src={headerlogo} alt="" />
            </div>
          </Link>
          <div>
            <nav>
              <ul
                className="uppercase flex items-center
             justify-between gap-8 font-light"
              >
                <div ref={menuRef}>
                  <li
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="font-roboto text-sm hover:bg-slate-200 
              cursor-pointer py-2 px-1 rounded-md relative"
                  >
                    comunidade
                  </li>
                  {isOpen === true ? (
                    <div
                      className="flex-col items-start
                     justify-center
                   absolute bg-custom-gray
                    rounded-lg z-50 shadow-black shadow-lg w-40"
                    >
                      <Link to={"/fundadora"}>
                        <p
                          onClick={handleOptionClick}
                          className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 "
                        >
                          fundadora
                        </p>
                      </Link>
                      <Link to={"/nossahistoria"}>
                        <p
                          onClick={handleOptionClick}
                          className="hover:bg-slate-200 
                      w-full cursor-pointer px-4 py-1 "
                        >
                          história
                        </p>
                      </Link>
                      <p
                        onClick={handleOptionClick}
                        className="hover:bg-slate-200  
                     w-full cursor-pointer px-4 py-1 hover:rounded-xl "
                      >
                        Endereço
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link to={"/noticias"}>
                  <li
                    className="font-roboto text-sm hover:bg-slate-200 
              cursor-pointer py-2 px-1 rounded-md"
                  >
                    notícias
                  </li>
                </Link>
                <Link to={"/midias"}>
                  <li
                    className="font-roboto text-sm hover:bg-slate-200 
              cursor-pointer py-2 px-1 rounded-md"
                  >
                    mídias
                  </li>
                </Link>
                <li
                  className="font-roboto text-sm hover:bg-slate-200 
              cursor-pointer py-2 px-1 rounded-md"
                >
                  agendas
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <button
              className="relative 
            overflow-hidden
             flex-shrink-0
      bg-custom-button
      text-white py-3 
      px-2 rounded-md shadow-sm
      shadow-black font-light 
       border-none "
            >
              <span className="relative z-10">QUERO AJUDAR</span>
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
      )}
    </header>
  );
}
