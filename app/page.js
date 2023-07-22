'use client'

import Image from 'next/image'
import styled from 'styled-components';
import styles from '@/styles/login/Login.module.css'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Btn from '@/app/components/login/Button/button'
import axios from 'axios';
import { Reducer, useReducer } from 'react';
import { redirect } from 'next/navigation';

function reducer(dadosLogin, action) {
  switch (action.type) {
    case 'setUsuario':
      console.log(dadosLogin.usuario)
      return { ...dadosLogin, usuario: action.payload };
    case 'setSenha':
      return { ...dadosLogin, senha: action.payload };
    default:
      throw new Error('Tipo de ação desconhecido.');
  }
}


export default function Login(){

  const [dadosLogin, dispath] = useReducer(reducer,{
    usuario :"",
    senha:""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fazer a chamada para a API para autenticar o usuário
      await axios.post('http://localhost:3004/login/signIn/',{
          userName: "erick.gaia3",
          password: "mssg170878"
      },{ next: { revalidate: 10 } })
      .then((response)=>{
        const { token } = response.data;
        localStorage.setItem('token', token);
        console.log(token)
      })

      if (response.ok) {
        console.log(response.token )
        // Autenticação bem-sucedida, receber o token de acesso
        
        console.log(token)

        // Armazenar o token no localStorage para uso posterior
        localStorage.setItem('token', token);

        // Redirecionar para a rota protegida ou página principal
        // Exemplo: router.push('/rota-protegida');7
      } else {
        // Lidar com erros de autenticação, exibir mensagem de erro, etc.
      }
    } catch (error) {
      // Lidar com erros de requisição ou da API
    }
  };

  const cookieview = ()=>{
    const tokenFromStorage = localStorage.getItem('token');
    console.log(tokenFromStorage)
  }

  return (
  <div className={styles.mainContainer}>
      <div className={styles.container}>
        <section>
        <form method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="usuario"
              value={dadosLogin.usuario}
              onChange={(e)=> dispath({type: 'setUsuario', payload: e.target.value})}
              placeholder="Nome de usuário"
            />
            <input
              type="password"
              name="senha"
              value={dadosLogin.senha}
              onChange={(e)=> dispath({type: 'setSenha', payload: e.target.value})}
              placeholder="Senha"
            />
            <button type="submit">Login</button>
          </form>
          <button onClick={cookieview}>verCookie</button>
        </section>
      </div>
  </div>

  )
}

export async function getServerSideProps(context) {// Parse dos cookies da requisição
  const tokenFromCookie = cookies.token || '';
  console.log('oiiii')
  const shouldRedirect = !tokenFromCookie; // Se não houver token no cookie, redirecionar

  if (shouldRedirect) {
    return {
      redirect: {
        destination: '/pages/processo',
        permanent: false, // Redirecionamento temporário (302)
      },
    };
  }

  // Se não houver redirecionamento, retorne os dados para a página normalmente
  return {
    props: {
      // Dados a serem passados como props para a página
    },
  };
}