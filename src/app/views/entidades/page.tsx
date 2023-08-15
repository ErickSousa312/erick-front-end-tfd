import styles from '@/styles/Forms/Entidades/Entidade.module.css'
import Label from '@/app/components/forms/labelForms/label'
import FormEntidade from '@/app/components/forms/formEntidade/form'

export default async function Entidades(){

    return(
        <div className={styles.MainContainer}>
          <Label label={'Cadastrar Entidade'}></Label>
            <FormEntidade/>
        </div>
    )
}