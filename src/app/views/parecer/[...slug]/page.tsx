import { getDataBySlug } from '@/functions/getData/getDataBySlug';
import { TypePaciente } from '@/app/@types/paciente';
import { TypeError } from '@/app/@types/errorType';
import { getDataProcessoByPaciente } from '@/functions/getData/getProcessoByPaciente';
import { data } from '@/lib/fakeData';
import { TypeProcesso } from '../../../@types/processo';
import { GetDataPaciente } from '@/functions/getData/Paciente';
import Label from '@/app/components/forms/labelForms/label';
import styles from '@/styles/Forms/Parecer/components/Forms.module.css';

type T = TypePaciente | TypeError;
type A = TypeProcesso[] | TypeError;

export default async function Page({ params }: { params: { slug: [number] } }) {
  console.log(params.slug);
  let DataPaciente: T;
  let DataProcessos: A;
  try {
    const dataPaciente: T = await getDataBySlug(params.slug);
    const dataProcessos: A = await getDataProcessoByPaciente(params.slug);
    DataProcessos = dataProcessos;
    DataPaciente = dataPaciente;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
  return (
    <view className={styles.MainContainer}>
      <Label label={'Parecer Médico'}></Label>
      <h1>Paciente: {(DataPaciente as TypePaciente)?.NomePaciente}</h1>
      <select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </view>
  );
}
