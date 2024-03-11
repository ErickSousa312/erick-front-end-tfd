import styles from '@/styles/Forms/Parecer/Parecer.module.css';
import Label from '@/app/components/forms/labelForms/label';
import TablePacientes from '@/app/components/forms/formParecer/table';

import { data } from '@/lib/fakeData';

import { GetDataPaciente } from '@/functions/getData/Paciente';

export default async function Paciente() {
  const data = await GetDataPaciente();
  return (
    <div className={styles.MainContainer}>
      <TablePacientes Pacientes={data} />
    </div>
  );
}
