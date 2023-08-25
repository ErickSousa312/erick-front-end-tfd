

import styles from '@/styles/Forms/Parecer/Parecer.module.css'
import Label from '@/app/components/forms/labelForms/label'
import FormEntidade from '@/app/components/forms/formParecer/forms'

import {data} from '@/lib/fakeData'

import {GetDataPaciente} from '@/functions/getData/Paciente'

export default async  function Paciente(){
    const data = await GetDataPaciente()
    console.log(data)
    return(
        <div className={styles.MainContainer}>
          <Label label={'Parecer Médico'}></Label>
            <FormEntidade Pacientes={data}/>
        </div>
    )
}