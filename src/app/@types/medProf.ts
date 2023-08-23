export type TypeMedProf={
    _id?: string,
    IdentProfissional: number,
    NomeCompleto: string,
    NumeroRegistro: string,
    UF: string,
    CPF: string,
    DataNascimento: string,
    Cargo: string,
    CodigoCBO: string,
    Especialidades: [{
        Nome: string 
    }],
    CentroDeSaude: string,
    DataCadastro: string,
    Afastamento: string
}