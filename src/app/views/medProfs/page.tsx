import styles from '@/styles/Forms/MedProf/MedProf.module.css';
import Label from '@/app/components/forms/labelForms/label';
import FormMedProf from '@/app/components/forms/formMedProf/form';

export default async function Funcionarios() {
  return (
    <div className={styles.MainContainer}>
      <Label label={'Cadastrar Médico/Profissional'}></Label>
      <FormMedProf />
    </div>
  );
}
