'use client'

import styles from '@/styles/Forms/buttons/submit.module.css'
import { useState, ChangeEvent } from 'react';
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { TypeLogin } from '@/app/@types/dadosLogin';
import getTokenSession from '@/functions/getTokenSession';

function ButtonSubmit({data}){
      const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('')
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/processo";

    
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     try {
       const token = await getTokenSession()
        console.log(token )
    setLoading(true)
    //testando rejeição de Promisse
    // const res2 = await Promise.reject(new Error("Erro simulado"));
     const res = await fetch('http://localhost:3004/func/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
       },
       body: JSON.stringify({data}),
     }).then((response)=>{
         console.log(response)
     })
     console.log(res)

    } catch (error) {
      setError('Erro ao autenticar. Por favor, tente novamente.')
    } finally{
      setLoading(false)
    }
  }
    return(
        <button className={styles.buttonSub} onClick={onSubmit}>Salvar</button>
    )
}

export default ButtonSubmit