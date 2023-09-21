import axios, { AxiosResponse } from "axios";
import { TypeProcesso } from "@/app/@types/processo";
import { TypeError } from "@/app/@types/errorType";

export async function getDataProcessoBySlug(slug: [number]): Promise<TypeProcesso | TypeError> {
  return new Promise(async (resolve, reject) => {
    try {
      const res: AxiosResponse<any> = await axios.get(`${process.env.API_URL}/processo/parecer/${slug[0]}`,{         
          headers: {
            Authorization: `Bearer ${process.env.TOKEN_API}`
          }});
      const data: TypeProcesso = res.data;
      resolve(data);
    } catch (err) {
      reject({ error: "Erro na requisição1" } as TypeError);
    }
  });
}
