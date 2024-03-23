import { getDataBySlug } from "@/functions/getData/getDataBySlug"
import { TypePaciente } from "@/app/@types/paciente"
import { TypeError } from "@/app/@types/errorType"
import { getDataProcessoBySlug } from "@/functions/getData/getProcessoById"
import { data } from "@/lib/fakeData"
import { TypeProcesso } from '../../../@types/processo';

type T = TypePaciente | TypeError
type A = TypeProcesso | TypeError

export default async function Page({ params }: { params: { slug: [number] } }) {
  let DataPaciente: T
  let DataProcesso: A
  try {
    // Se a promessa for resolvida com sucesso
    const [dataPaciente, dataProcesso]: [T, A] = await Promise.all([
      getDataBySlug(params.slug),
      getDataProcessoBySlug(params.slug)
    ])
    DataPaciente = dataPaciente
    DataProcesso = dataProcesso
  } catch (error) {
    // O código aqui será executado se a promessa for rejeitada (erro)
    console.error("Erro ao buscar dados:", error);
  }
  return (
    <h1>Paciente: {(DataPaciente as TypePaciente)?.NomePaciente}</h1>
  )

}