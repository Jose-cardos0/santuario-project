import fundacao from "../assets/Midias/funcacao.png";

//motion
import { motion } from "framer-motion";

export function Midias() {
  return (
    <main className="w-full min-h-screen flex-col items-center justify-center m-auto bg-cutom-gray-strong">
      <section className="bg-center bg-cover bg-no-repeat max-w-7xl flex items-center justify-center m-auto">
        <div className="w-full flex-col items-center justify-center mt-40 ">
          <div
            className="w-full flex
           items-center justify-center"
          >
            <button
              className="uppercase
               bg-custom-button text-white
              px-2 rounded-md mb-2 "
            >
              mídia digital
            </button>
          </div>
          <h1 className="text-5xl font-semibold font-roboto text-center mt-3">
            Álbuns de recordações
          </h1>
          <div className="w-full flex-col items-center justify-center mt-16">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-custom-gray rounded-md shadow-md
              h-auto w-full shadow-black mb-6 "
            >
              <div className="w-full flex items-center p-3 gap-3">
                <div>
                  <img
                    className="max-w-52 shadow-md shadow-black rounded-md"
                    src={fundacao}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h1 className="font-roboto font-light text-3xl ">
                    Fotos do dia 16/01/2024 - Pedra fundamental.
                  </h1>
                  <p className="font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere ut architecto impedit repudiandae amet vero ad
                    mollitia cumque sapiente incidunt? Accusantium quisquam
                    atque numquam neque expedita eum cum ea rem!
                  </p>
                  <div className="w-full flex  items-center justify-end">
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
            </motion.div>
            {/*INICIA OUTRO GRID */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-custom-gray rounded-md shadow-md
              h-auto w-full shadow-black mb-6 "
            >
              <div className="w-full flex items-center p-3 gap-3">
                <div>
                  <img
                    className="max-w-52 shadow-md shadow-black rounded-md"
                    src={fundacao}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h1 className="font-roboto font-light text-3xl ">
                    Fotos do dia 16/01/2024 - Pedra fundamental.
                  </h1>
                  <p className="font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere ut architecto impedit repudiandae amet vero ad
                    mollitia cumque sapiente incidunt? Accusantium quisquam
                    atque numquam neque expedita eum cum ea rem!
                  </p>
                  <div className="w-full flex  items-center justify-end">
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
            </motion.div>
            {/*INICA OUTRO GRID */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-custom-gray rounded-md shadow-md
              h-auto w-full shadow-black mb-6 "
            >
              <div className="w-full flex items-center p-3 gap-3">
                <div>
                  <img
                    className="max-w-52 shadow-md shadow-black rounded-md"
                    src={fundacao}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h1 className="font-roboto font-light text-3xl ">
                    Fotos do dia 16/01/2024 - Pedra fundamental.
                  </h1>
                  <p className="font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere ut architecto impedit repudiandae amet vero ad
                    mollitia cumque sapiente incidunt? Accusantium quisquam
                    atque numquam neque expedita eum cum ea rem!
                  </p>
                  <div className="w-full flex  items-center justify-end">
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
            </motion.div>
            {/*INICIA OUTRO GRID */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-custom-gray rounded-md shadow-md
              h-auto w-full shadow-black mb-6 "
            >
              <div className="w-full flex items-center p-3 gap-3">
                <div>
                  <img
                    className="max-w-52 shadow-md shadow-black rounded-md"
                    src={fundacao}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h1 className="font-roboto font-light text-3xl ">
                    Fotos do dia 16/01/2024 - Pedra fundamental.
                  </h1>
                  <p className="font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere ut architecto impedit repudiandae amet vero ad
                    mollitia cumque sapiente incidunt? Accusantium quisquam
                    atque numquam neque expedita eum cum ea rem!
                  </p>
                  <div className="w-full flex  items-center justify-end">
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
            </motion.div>
            {/*fim grid */}
          </div>
        </div>
      </section>
    </main>
  );
}
