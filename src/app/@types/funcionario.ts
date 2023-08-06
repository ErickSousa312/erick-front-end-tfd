export type TypeFuncionario= {
    _id?:number,
    nomeFuncionario:string,
    CPF: string,
    Rg: number,
    NumeroMatricula: number,
    NumeroPortaria: number,
    Cidade: string,
    UfCidade :string,
    CEP: string,
    Celular: [{
        Numero: number
    }],
    AtividadeExercida: string,
    DataNascimento: string,
    CentroDeSaude: string,
    DataCadastro: string,
    Observacao: string
}