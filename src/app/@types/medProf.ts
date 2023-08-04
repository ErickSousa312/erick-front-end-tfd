export type TypeMedProf={
    _id?: string,
    IdentProfissional: string,
    NomeCompleto: string,
    NumeroRegistro: string,
    UF: number,
    CPF: string,
    DataNascimento: string,
    Cargo: { type: String, required: true},
    CodigoCBO: { type: String, required: true },
    Especialidades: [{
        Nome: { type: String }
    }],
    CentroDeSaude: { type: String, required: true },
    DataCadastro: { type: String, required: true },
    Afastamento: { type: String }
}