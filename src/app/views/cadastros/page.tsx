import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

import styles from '@/styles/default_layout/MainContainer.module.css';
import Link from 'next/link';

export default async function DashBoard() {
  // const erick = await GetDATA()
  return (
    <div className=" space-y-4  animated fadeIn faster  self-center justify-center items-center inset-0 z-50 outline-none focus:outline-none">
      <div className="flex flex-col p-8 bg-white shadow-small hover:shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg> */}
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">Cadastar Entidade</div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                Realize o cadastro de uma nova Entidade. Ex: hospitais,
                clinicas...
              </p>
            </div>
          </div>
          <Link href={'cadastros/entidades'}>
            <button className="flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm hover:shadow-md active:shadow-small active:bg-emerald-700 active:shadow-none font-medium tracking-wider border-green-500 text-white rounded-full">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-white shadow-small hover:shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg> */}
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">
                Cadastrar Funcionário
              </div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                Realize o cadastro de um novo Funcionário
              </p>
            </div>
          </div>
          <Link href={'cadastros/funcionarios'}>
            <button className="flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm hover:shadow-md active:shadow-small active:bg-emerald-700 active:shadow-none font-medium tracking-wider border-green-500 text-white rounded-full">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// }
// function GetDATA() {
//   return new Promise((resolve) => {
//     // Simulando o tempo de espera para a resposta da Promise
//     setTimeout(() =>{

//       resolve('erick2');
//     }, 2000);
//   });
// }

// async function loadData() {
//   const [paciente, parecer] = await Promise.all(
//     [data1(),
//     data2()]
//   )
//   return { paciente, parecer };
// }
