import { getDataBySlug } from '@/functions/getData/getDataBySlug';
import { TypePaciente } from '@/app/@types/paciente';
import { TypeError } from '@/app/@types/errorType';
import { getDataProcessoBySlug } from '@/functions/getData/getProcessoById';
import { data } from '@/lib/fakeData';
import { TypeProcesso } from '../../../@types/processo';
import { GetDataPaciente } from '@/functions/getData/Paciente';

type T = TypePaciente | TypeError;
type A = TypeProcesso | TypeError;

export default async function Page({ params }: { params: { slug: [number] } }) {
  console.log(params.slug);
  let DataPaciente: T;
  let DataProcesso: A;
  try {
    // Se a promessa for resolvida com sucesso
    const dataPaciente: T = await getDataBySlug(params.slug);
    DataPaciente = dataPaciente;
  } catch (error) {
    // O código aqui será executado se a promessa for rejeitada (erro)
    console.error('Erro ao buscar dados:', error);
  }
  return <h1>Paciente: {(DataPaciente as TypePaciente)?.NomePaciente}</h1>;
}
