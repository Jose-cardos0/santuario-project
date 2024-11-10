//imgs
import bgCronograma from "../assets/Cronograma/bgCronograma.png";
import whats from "../assets/Cronograma/wpp.png";
import logowhite from "../assets/Cronograma/logoWhite.png";

export function Cronograma() {
  return (
    <main className="w-full h-screen bg-cutom-gray-strong flex items-center justify-center m-auto">
      <section
        className="flex-col w-full flex
       items-center justify-center m-auto"
      >
        <div
          className="w-full flex
         items-center justify-center"
        >
          <button
            className="uppercase
             bg-custom-button text-white
            px-2 rounded-md mb-2 "
          >
            cronograma
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bgCronograma})` }}
          className="w-10/12 p-10 h-auto rounded-md 
          shadow-lg shadow-black bg-center 
          bg-cover bg-no-repeat"
        >
          <div className="overflow-x-auto ">
            <table
              className="min-w-full border-collapse
              rounded-lg shadow-md "
            >
              <thead className="bg-white">
                <tr>
                  <th
                    className="px-4 py-2
                   text-left font-semibold text-gray-900"
                  >
                    Dia
                  </th>
                  <th
                    className="px-4 py-2
                   text-left font-semibold text-gray-900"
                  >
                    Hora
                  </th>
                  <th
                    className="px-4 py-2 
                  text-left font-semibold text-gray-900"
                  >
                    Clérigo
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white bg-opacity-50">
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Segunda-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Terça-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Quarta-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Quinta-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Sexta-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Sábado-feira</td>
                  <td className="px-4 py-2 text-gray-900">07:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-900">Domingo-feira</td>
                  <td className="px-4 py-2 text-gray-900">11:00 am</td>
                  <td className="px-4 py-2 text-gray-900">Padre João</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex items-center justify-between mt-20">
              <div>
                <img className="max-w-36" src={whats} alt="" />
              </div>
              <div>
                <img className="max-w-36" src={logowhite} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
