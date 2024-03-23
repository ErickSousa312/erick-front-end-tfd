import { TypeProcesso } from '@/app/@types/processo';
import { ActionType } from '@/app/@types/actionReducer';

export function reducerProcesso(dadosLogin: TypeProcesso, action: ActionType) {
  switch (action.type) {
    case 'setId':
      return {
        ...dadosLogin,
        _id: action.payload,
      };
    case 'setIdPaciente':
      return {
        ...dadosLogin,
        IdPaciente: action.payload,
      };
    case 'setDataViagem':
      return {
        ...dadosLogin,
        DataViagem: action.payload,
      };
    case 'setDataAgendamento':
      return {
        ...dadosLogin,
        DataAgendamento: action.payload,
      };
    case 'setPrevisaoRetorno':
      return {
        ...dadosLogin,
        PrevisaoRetorno: action.payload,
      };
    case 'setTipoAtendimento':
      return {
        ...dadosLogin,
        TipoAtendimento: action.payload,
      };
    case 'setEspecialidade':
      return {
        ...dadosLogin,
        Especialidade: action.payload,
      };
    case 'setIdFuncionamento':
      return {
        ...dadosLogin,
        IdFuncionario: action.payload,
      };
    case 'setIdMedico':
      return {
        ...dadosLogin,
        IdMedico: action.payload,
      };
    case 'setEntidade':
      return {
        ...dadosLogin,
        Entidade: action.payload,
      };
    case 'setLocalOrigem':
      return {
        ...dadosLogin,
        LocalOrigem: action.payload,
      };
    case 'setLocalAtendimento':
      return {
        ...dadosLogin,
        LocalAtendimento: action.payload,
      };
    case 'setDestino':
      return {
        ...dadosLogin,
        Destino: action.payload,
      };
    case 'setTipoDeslocamento':
      return {
        ...dadosLogin,
        TipoDeslocamento: action.payload,
      };
    case 'setEmpresaTransporte':
      return {
        ...dadosLogin,
        EmpresaTransporte: action.payload,
      };
    case 'setTotalPassagem':
      return {
        ...dadosLogin,
        TotalPassagem: action.payload,
      };
    case 'setIdentTrajeto':
      return {
        ...dadosLogin,
        IdentTrajeto: action.payload,
      };
    case 'setObsAtendimento':
      return {
        ...dadosLogin,
        ObsAtendimento: action.payload,
      };
    case 'setObsPassagemAerea':
      return {
        ...dadosLogin,
        ObsPassagemAerea: action.payload,
      };
    case 'setCretatedAt':
      return {
        ...dadosLogin,
        createdAt: action.payload,
      };
    default:
      return dadosLogin;
  }
}
