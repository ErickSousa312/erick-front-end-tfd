import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

import styles from '@/styles/default_layout/MainContainer.module.css';
import App2 from '@/app/components/testUI/App';

export default async function DashBoard() {
  // const erick = await GetDATA()
  return (
    <div className="w-full h-11/12  animated  self-center justify-center items-center inset-0 z-50 outline-none focus:outline-none">
      <App2></App2>
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
