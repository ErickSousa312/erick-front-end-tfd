import { getDataBySlug } from "@/functions/getData/getDataBySlug"
import { TypePaciente } from "@/app/@types/paciente"
import { TypeError } from "@/app/@types/errorType"
import { getDataProcessoBySlug } from "@/functions/getData/getProcessoById"
import { getDataEntidadeBySlug } from "@/functions/getData/getEntidadeById"
import { data } from "@/lib/fakeData"
import { TypeProcesso } from '../../../@types/processo';
import { TypeEntidade } from '../../../@types/entidade';


type T = TypePaciente | TypeError
type A = TypeProcesso | TypeError
type E = TypeEntidade | TypeError

export default async function Page({ params }: { params: { slug: [number] } }) {
  let DataPaciente: T
  let DataProcesso: A
  let DataEntidade: E
  try {
    // Se a promessa for resolvida com sucesso
    const [dataPaciente, dataProcesso, dataEntidade]: [T, A, E] = await Promise.all([
      getDataBySlug(params.slug),
      getDataProcessoBySlug(params.slug),
      getDataEntidadeBySlug(params.slug)
    ])
    DataPaciente = dataPaciente
    DataProcesso = dataProcesso
    DataEntidade = dataEntidade
  } catch (error) {
    // O código aqui será executado se a promessa for rejeitada (erro)
    console.error("Erro ao buscar dados:", error);
  }
  return (
    <h1>Paciente: {(DataPaciente as TypePaciente)?.NomePaciente}</h1>
  )

}