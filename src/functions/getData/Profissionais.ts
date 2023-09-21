import axios, { AxiosResponse } from "axios";
import { TypeEntidade } from "@/app/@types/entidade";
import { TypeError } from "@/app/@types/errorType";

export async function getMed(slug: [number]): Promise<TypeEntidade | TypeError> {
  return new Promise(async (resolve, reject) => {
    try {
      const res: AxiosResponse<any> = await axios.get(`${process.env.API_URL}/paciente/${slug[0]}`);
      const data: TypeEntidade = res.data;
      console.log(data)
      resolve(data);
    } catch (err) {
      reject({ error: "Erro na requisição" } as TypeError);
    }
  });
}
