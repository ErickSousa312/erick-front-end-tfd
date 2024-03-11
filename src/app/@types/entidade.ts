export type TypeEntidade = {
  _id?: number,
  NomeEntidade: string,
  Cidade: string,
  Estado: string,
  Especialidades: [
    {
      Nome: string,
    },
  ],
};
