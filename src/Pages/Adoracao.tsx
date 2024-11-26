//api https://liturgia.up.railway.app/

import { useEffect } from "react";

interface propsSalmos {
  referencia: string;
  refrao: string;
  texto: string;
}

interface propsPrimeiraLeitura {
  referencia: string;
  titulo: string;
  texto: string;
  segundaLeitura: string;
}

interface propsResponse {
  data: string;
  liturgia: string;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraleitura: propsPrimeiraLeitura;
  salmo: propsSalmos;
}

export function Adoracao() {
  useEffect(() => {
    async function conectApi() {
      const response = await fetch("https://liturgia.up.railway.app/");

      const data = await response.json();

      console.log(data);
    }

    conectApi();
  });

  return <div>Adoração</div>;
}
