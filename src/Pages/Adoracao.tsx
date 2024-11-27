//api https://liturgia.up.railway.app/

import { useEffect, useState } from "react";

import { AnimatedY } from "../tools/Animations/AnimatedY";

import { PiShareFatBold } from "react-icons/pi";

interface propsSalmos {
  referencia: string;
  refrao: string;
  texto: string;
}

interface propsEvangelio {
  referencia: string;
  texto: string;
  titulo: string;
}

interface propsPrimeiraLeitura {
  referencia: string;
  titulo: string;
  texto: string;
  segundaLeitura: string;
}

interface propsAntifonas {
  ofertorio: string;
  entrada: string;
  comunhao: string;
}

interface propsResponse {
  data: string;
  cor: string;
  liturgia: string;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraleitura: propsPrimeiraLeitura;
  salmo: propsSalmos;
  evangelho: propsEvangelio;
  antifonas: propsAntifonas;
}

export function Adoracao() {
  const [dataProps, setDataProps] = useState<propsResponse | null>(null);

  useEffect(() => {
    async function conectApi() {
      const response = await fetch("https://liturgia.up.railway.app/");

      const data = await response.json();

      console.log(data);
      setDataProps(data);
      console.log(dataProps?.data);
    }

    conectApi();
  }, []);

  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent("Confira esta liturgia!");
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message} ${url}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="flex items-center justify-center
     m-auto h-full bg-cutom-gray-strong mm:max-md:px-5"
    >
      {dataProps ? (
        <AnimatedY>
          <div
            className="font-roboto
         max-w-3xl my-48 bg-custom-gray p-8 rounded-lg shadow-lg 
          mm:max-md:my-32 mm:max-md:shadow-none
         "
          >
            <div className="">
              <div className="flex items-center justify-between">
                <button
                  className="flex items-center
                 bg-green-500 rounded-md px-2 font-bold
                  text-white mb-2 shadow-md"
                >
                  Cor litúrgica: {dataProps?.cor}
                </button>
                <button onClick={handleShare} className="cursor-pointer	">
                  <PiShareFatBold color="#043C6B" size={30} />
                </button>
              </div>
              <h1>Data: {dataProps?.data}</h1>
              <p className="border-b-2 border-gray-300"></p>
              <h1 className="my-4">
                <strong className="text-2xl">Liturgia:</strong> <br />
                <strong className="font-extralight">
                  {dataProps?.liturgia}
                </strong>
              </h1>
              <div>
                <p>{dataProps?.dia}</p>
                <p>{dataProps?.oferendas}</p>
                <p>{dataProps?.comunhao}</p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="mb-4">
                <strong className="text-2xl">Salmo:</strong> <br />
                <strong className="font-extralight">
                  {dataProps?.salmo.referencia}
                </strong>
              </h1>
              <div>
                <p className="mb-4">
                  <strong>Refrão:</strong> <br />
                  {dataProps?.salmo.refrao}
                </p>
                <p>{dataProps?.salmo.texto}</p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="mb-4">
                <strong className="text-2xl">Evangelho:</strong> <br />
                <strong className="font-extralight">
                  {dataProps?.evangelho.referencia}
                </strong>
              </h1>
              <div>
                <p className="mb-4">
                  <strong>Título:</strong> <br />
                  {dataProps?.evangelho.titulo}
                </p>
                <p>{dataProps?.evangelho.texto}</p>
              </div>
            </div>
          </div>
        </AnimatedY>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
