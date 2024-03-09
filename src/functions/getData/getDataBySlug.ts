import axios, { AxiosResponse } from 'axios';
import { TypePaciente } from '@/app/@types/paciente';
import { TypeError } from '@/app/@types/errorType';

export async function getDataBySlug(
  slug: [number],
): Promise<TypePaciente | TypeError> {
  return new Promise(async (resolve, reject) => {
    try {
      const res: AxiosResponse<any> = await axios.get(
        `${process.env.API_URL}/paciente/${slug[0]}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN_API}`,
          },
        },
      );
      const data: TypePaciente = res.data;
      resolve(data);
    } catch (err) {
      reject({ error: 'Erro na requisição' } as TypeError);
    }
  });
}
