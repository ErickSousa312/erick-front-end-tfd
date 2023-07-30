'use client'
import styles from '@/styles/login/Login.module.css'
import FormFields from "./components/formLogin"
import Image from 'next/image'
import { useState } from 'react'

import { signIn, signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { LoginForm } from "@/app/components/button.component";


// async function handleSubmit(): Promise<number>{
//     return setTimeout((promise)=>{},3000)
// }

// function GetDATA(){
//     return new Promise((resolve)=>{
//       setTimeout(()=>{resolve('erick')},3000)
//     })
//  }
export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";


    const onSurmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        const res = await signIn("credentials", {
            username: 'erick.gaia3',
            password: 'mssg170878',
          });
          console.log(res)
    }

    return (
        <main className={styles.mainContainer}>
            <section className={styles.container}>                
            <div className={styles.image}>
            <Image src={'/logo.png'} width={250} height={110}  alt="Logo TFD Marabá" priority={true}/>
            </div> 
            <div className={styles.divForm}></div>
            <div >
                    <input className={styles.inputs} placeholder="Usuario"></input>
                    <input className={styles.inputs} placeholder="Senha" type='password'></input>
                    <button className={styles.buttonLogin} onClick={onSurmit}>Login</button>
                   <LoginForm></LoginForm>
                <div>
      </div>
            </div>

            </section>
        </main>
    )
  }