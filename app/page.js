'use client'

import Image from 'next/image'
import styled from 'styled-components';
import styles from '@/styles/login/Login.module.css'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Btn from '@/components/login/Button/button'


export default function Login(){
  return (
    <div className={styles.mainContainer}>
    <div className={styles.forms}>
        <h1 style={{fontWeight: "900", fontSize: "43px", marginTop:"2.5em", color:"rgb(0 55 255);"}}>LOGIN</h1>
        <h3 className={styles.h3Forms}>Faça login para participar de votações <br /> ou<br /> Criar uma votação</h3>
        <div className={styles.inputs}>
        </div>
        <div className={styles.OU}>
          <div className={styles.linha2}></div>
        </div>
      <Btn 
          shadow={"5px 5px 12px rgba(0,0,0,30%)"}
          backgroundColor={'white'}
          border={'none'}
          margintop={"2em"}
          adding={"10px 20px"}
          cor={"black"}
          servidor={"google"}>
          <FcGoogle className={styles.iconGoogle} size={27}></FcGoogle> Entar com o google
      </Btn>
      <Btn 
          shadow={"5px 5px 12px rgba(0,0,0,30%)"}
          backgroundColor={'white'}
          border={'none'}
          margintop={"0em"}
          adding={"10px 20px"}
          cor={"black"}
          servidor={"github"}>
          <FaGithub className={styles.iconGoogle} size={27}></FaGithub> Entar com o google
      </Btn>
    </div>
  </div>

  )
}

const StyledBackground = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center; 
`;

const StyleIMG = styled(Image)`
background-size: cover;
background-position: center;
object-fit: cover;
object-position: center;
`