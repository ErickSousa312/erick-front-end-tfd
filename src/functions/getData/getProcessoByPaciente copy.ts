import axios, { AxiosResponse } from 'axios';
import { TypeProcesso } from '@/app/@types/processo';
import { TypeError } from '@/app/@types/errorType';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function getDataProcessoByPaciente(
  slug: [number],
): Promise<TypeProcesso[] | TypeError> {
  return new Promise(async (resolve, reject) => {
    const { user }: any = await getServerSession(authOptions);
    const config = {
      headers: {
        authorization: `Bearer ${user?.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const res: AxiosResponse<any> = await axios.get(
        `${process.env.API_URL}/processos/paciente/${slug[0]}`,
        config,
      );
      const data: TypeProcesso[] = res.data;
      resolve(data);
    } catch (err) {
      reject({ error: 'Erro na requisição1' } as TypeError);
    }
  });
}
