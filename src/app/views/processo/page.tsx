
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth'

import styles from '@/styles/default_layout/MainContainer.module.css'


type User = {
  user:{
    id:number,
    userName: string
    token:string
  }
};

export default async function DashBoard() {
  // const erick = await GetDATA()
  return (
    <div className={styles.aa}>
      <p>oi</p>
    </div>
  )

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