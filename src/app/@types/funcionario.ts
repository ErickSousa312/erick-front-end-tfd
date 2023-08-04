export type typeFuncionario= {
    _id?:number,
    nomeFuncionario:string,
    CPF: String,
    Rg: Number,
    NumeroMatricula: Number,
    NumeroPortaria: Number,
    Cidade: String,
    UfCidade :String,
    CEP: String,
    Celular: [{
        Numero: Number
    }],
    AtividadeExercida: String
    DataNascimento: String,
    CentroDeSaude: String,
    DataCadastro: String,
    Observação: String
}