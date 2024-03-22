import { getDataBySlug } from '@/functions/getData/getDataBySlug';
import { TypePaciente } from '@/app/@types/paciente';
import { TypeError } from '@/app/@types/errorType';
import { getDataProcessoByPaciente } from '@/functions/getData/getProcessoByPaciente';
import { TypeProcesso } from '../../../@types/processo';
import Label from '@/app/components/forms/labelForms/label';
import styles from '@/styles/Forms/Parecer/components/Forms.module.css';
import FormParecer from '@/app/components/forms/formParecer/forms';

type T = TypePaciente | TypeError;
type A = TypeProcesso[] | TypeError;

export default async function Page({ params }: { params: { slug: [number] } }) {
  const [dataPaciente, dataProcessos]: [T, A] = await Promise.all([
    getDataBySlug(params.slug),
    getDataProcessoByPaciente(params.slug),
  ]);

  return (
    <div className={styles.MainContainer}>
      <section>
        <Label label={'Parecer Médico'}></Label>
        <section className={styles.section2Container}>
          <h3>Paciente: {(dataPaciente as TypePaciente)?.NomePaciente}</h3>
          <h3>Selecione um processo:</h3>
          <select name="Selecione um processo">
            {(dataProcessos as TypeProcesso[])?.map((item, index) => (
              <option key={index} value={item._id}>
                {item._id}
              </option>
            ))}
          </select>
        </section>
      </section>
      <FormParecer />
    </div>
  );
}
