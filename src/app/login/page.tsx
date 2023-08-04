'use client'
import styles from '@/styles/login/Login.module.css'
import Image from 'next/image'
import FormLogin from './components/formLogin';

export default function Login() {

  return (
    <main className={styles.mainContainer}>
      <section className={styles.container}>
        <div className={styles.image}>
          <Image src={'/logo.png'} width={240} height={110} alt="Logo TFD Marabá" priority={true} />
        </div>
        <div className={styles.divForm}></div>
        <div >
          <FormLogin></FormLogin>
        </div>

      </section>
    </main>
  )
}