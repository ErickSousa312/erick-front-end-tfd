import styles from '@/styles/Forms/Funcionarios/Funcionario.module.css'
import InputForm from '@/app/components/inputs/InputForm'

export default async function Funcionarios(){

    return(
        <div className={styles.MainContainer}>
            <section className={styles.section1}>
            <InputForm
            tamanho="40%"
            tipo="text"
            label='Nome Completo'
            placeholder="Guilherme Alves da Silva Guajajara"
          />

          <InputForm
            tamanho="20%"
            tipo="text"
            label="Fantasia / Apelido"
            placeholder="Guajajara"
          />
          <InputForm
            tamanho="20%"
            tipo="text"
            label="CPF"
            placeholder="123.456.789-01"
          />
            </section>
        </div>
    )
}