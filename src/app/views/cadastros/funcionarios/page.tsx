import styles from '@/styles/Forms/Funcionarios/Funcionario.module.css'
import InputForm from '@/app/components/inputs/InputForm'
import FormFuncionario from '@/app/components/forms/formFuncionario/form'
import Label from '@/app/components/forms/labelForms/label'

export default async function Funcionarios(){

    return(
        <div className={styles.MainContainer}>
          <Label label={'Cadastrar Funcionário'}></Label>
          <div className={styles.hrLine}></div>
            <FormFuncionario/>
        </div>
    )
}