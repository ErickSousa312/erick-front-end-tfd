import Image from 'next/image'
import styles from './page.module.css'
import { useContext } from 'react'
import MyContext from '../context/context'
import useToken from '@/functions/getTokenLocalStorage'
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth'

export default async function DashBoard() {
  const session = await getServerSession(authOptions);
  console.log(session );

  const erick = await GetDATA()
  return (
    <>oi</>
  )
}
function GetDATA() {
  return new Promise((resolve) => {
    // Simulando o tempo de espera para a resposta da Promise
    setTimeout(() =>{

      resolve('erick');
    }, 1000);
  });
}