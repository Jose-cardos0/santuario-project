import { useState, useEffect, useRef } from "react";
import headerlogo from "../assets/Header/header.svg";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  const menuRef = useRef<HTMLDivElement | null>(null);

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
    </header>
  );
}
