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
  evangelio: propsEvangelio;
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
    <section className=" flex items-center justify-center m-auto w-screen h-screen">
      {dataProps ? (
        <div className="font-roboto max-w-3xl flex-col items-center justify-center m-auto">
          <h1>Data: {dataProps?.data}</h1>
          <h1 className="mb-4">Liturgia: {dataProps?.liturgia}</h1>
          <div>
            <p>{dataProps?.dia}</p>
            <p>{dataProps?.oferendas}</p>
            <p>{dataProps?.comunhao}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
