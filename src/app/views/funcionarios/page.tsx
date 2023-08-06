import styles from '@/styles/Forms/Funcionarios/Funcionario.module.css'
import InputForm from '@/app/components/inputs/InputForm'
import FormFuncionario from '@/app/components/forms/formFuncionario/form'

export default async function Funcionarios(){

    return(
        <div className={styles.MainContainer}>
          <h1 className={styles.label}>Cadastrar Funcionário</h1>
          <div className={styles.hrLine}></div>
            <FormFuncionario/>
        </div>
    )
}