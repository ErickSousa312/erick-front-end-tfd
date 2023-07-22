
import Image from 'next/image'

import { HiHome, HiDownload, HiUpload, HiDocumentReport } from "react-Icons/hi";
import { MdEditDocument, MdOutlineSettings } from "react-Icons/md";
import { RiArrowUpDownLine } from "react-Icons/ri";
import { BiLogOut } from "react-Icons/bi";

import styles from '@/styles/default_layout/SideBar.module.css'
import FunctionButton from './FunctionButton'

export default function SideBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <Image src={'/logo.png'}  alt="Logo TFD Marabá" fill= 'true' loading="lazy" />
      </div>
      <section className={styles.section}>
        <div className={styles.buttons}>
          <FunctionButton icon={HiHome} size={20} text="Home" color="#0B1145" />
          <FunctionButton
            icon={MdEditDocument}
            size={20}
            text="Cadastros"
            color="#0B1145"
          />
          <FunctionButton
            icon={HiDownload}
            size={20}
            text="Receber Processos"
            color="#0B1145"
          />
          <FunctionButton
            icon={RiArrowUpDownLine}
            size={20}
            text="Liberar Processos"
            color="#0B1145"
          />
          <FunctionButton
            icon={HiUpload}
            size={20}
            text="Devolver Processos"
            color="#0B1145"
          />
          <FunctionButton
            icon={HiDocumentReport}
            size={20}
            text="Relatórios"
            color="#026306"
          />
        </div>
       
      </section>
      <footer className={styles.footer}>
          <div className={styles.buttonsFotter}>
            <BiLogOut size={25} color="#FFF" />
          </div>
          <div  className={styles.buttonsFotter}>
            <MdOutlineSettings size={25} color="#FFF" />
          </div>
          
        </footer>
    </nav>
  )
}