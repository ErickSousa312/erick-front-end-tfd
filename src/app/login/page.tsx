
import styles from '@/styles/login/Login.module.css'
import FormFields from "./components/formLogin"
import Image from 'next/image'

async function handleSubmit(): Promise<number>{
    return setTimeout((promise)=>{},3000)
}

function GetDATA(){
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve('erick')},3000)
    })
  }
export default async function Login() {
    // const a = await GetDATA();
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className={styles.mainContainer}>
            <section className={styles.container}>                
            <div className={styles.image}>
            <Image src={'/logo.png'} width={250} height={110}  alt="Logo TFD Marabá" priority={true}/>
            </div> 
            <div className={styles.divForm}></div>
            <div >
                <form className={styles.form}>
                    <input className={styles.inputs} placeholder="Usuario"></input>
                    <input className={styles.inputs} placeholder="Senha" type='password'></input>
                    <button className={styles.buttonLogin}>Login</button>
                </form>
            </div>

            </section>
        </main>
    )
  }