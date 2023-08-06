export type TypeProcesso = {
    _id?: string,
    IdPaciente: number,
    DataViagem: Date,
    DataAgendamento: Date,
    PrevisaoRetorno: Date,
    TipoAtendimento: string,
    Especialidade: string,
    IdFuncionario: number,
    IdMedico: number,
    Entidade: number,
    LocalOrigem: string,
    LocalAtendimento: string,
    Destino: string,
    TipoDeslocamento: string,
    EmpresaTransporte: string,
    TotalPassagem: {
        ida: number
        volta: number
    },
    IdentTrajeto: string,
    ObsAtendimento: string,
    ObsPassagemAerea: string,
    createdAt: Date,
}