export type TypeMedProf={
    _id?: string,
    IdentProfissional: string,
    NomeCompleto: string,
    NumeroRegistro: string,
    UF: string,
    CPF: string,
    DataNascimento: string,
    Cargo: { type: string, required: true},
    CodigoCBO: { type: string, required: true },
    Especialidades: [{
        Nome: { type: string }
    }],
    CentroDeSaude: { type: string, required: true },
    DataCadastro: { type: string, required: true },
    Afastamento: { type: string }
}