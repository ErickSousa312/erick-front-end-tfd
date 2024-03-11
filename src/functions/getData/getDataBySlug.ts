import axios, { AxiosResponse } from 'axios';
import { TypePaciente } from '@/app/@types/paciente';
import { TypeError } from '@/app/@types/errorType';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function getDataBySlug(
  slug: [number],
): Promise<TypePaciente | TypeError> {
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
        `${process.env.API_URL}/pacientes/${slug[0]}`,
        config,
      );
      const data: TypePaciente = res.data;
      resolve(data);
    } catch (err) {
      reject({ error: err } as TypeError);
    }
  });
}
