//api https://liturgia.up.railway.app/

import { useEffect, useState } from "react";

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

  return (
    <section
      className="flex items-center justify-center
     m-auto h-screen bg-cutom-gray-strong"
    >
      {dataProps ? (
        <div
          className="font-roboto
         max-w-3xl mt-28 bg-custom-gray p-8 rounded-lg shadow-lg 
         "
        >
          <div>
            <h1>Data: {dataProps?.data}</h1>
            <p className="border-b-2 border-gray-300"></p>
            <h1 className="my-4">
              <strong className="text-2xl">Liturgia:</strong> <br />
              <strong className="font-extralight">{dataProps?.liturgia}</strong>
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
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
