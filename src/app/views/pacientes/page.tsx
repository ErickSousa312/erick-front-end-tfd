import styles from '@/styles/Forms/MedProf/MedProf.module.css'
import Label from '@/app/components/forms/labelForms/label'
import FormPaciente from '@/app/components/forms/formPaciente/forms'

export default async function Paciente(){
    return(
        <div className={styles.MainContainer}>
          <Label label={'Cadastrar Paciente'}></Label>
            <FormPaciente/>
        </div>
    )
}