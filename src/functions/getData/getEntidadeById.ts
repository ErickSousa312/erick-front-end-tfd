import axios, { AxiosResponse } from "axios";
import { TypeEntidade } from "@/app/@types/entidade";
import { TypeError } from "@/app/@types/errorType";

export async function getDataEntidadeBySlug(slug: [number]): Promise<TypeEntidade | TypeError> {
  return new Promise(async (resolve, reject) => {
    try {
      const res: AxiosResponse<any> = await axios.get(`${process.env.API_URL}/entid/${slug[0]}`,{         
          headers: {
            Authorization: `Bearer  ${process.env.TOKEN_API}`
          }});
      const data: TypeEntidade = res.data;
      resolve(data);
    } catch (err) {
      reject({ error: "Erro na requisição1" } as TypeError);
    }
  });
}
