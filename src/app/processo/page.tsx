import Image from 'next/image'
import styles from './page.module.css'
import { useContext } from 'react'
import MyContext from '../context/context'
import useToken from '@/functions/getTokenLocalStorage'

export default async function DashBoard() {

  const erick = await GetDATA()
  console.log(erick)
  return (
    <>oi {erick}</>
  )
}
function GetDATA() {
  return new Promise((resolve) => {
    // Simulando o tempo de espera para a resposta da Promise
    setTimeout(() =>{

      resolve('erick');
    }, 3000);
  });
}