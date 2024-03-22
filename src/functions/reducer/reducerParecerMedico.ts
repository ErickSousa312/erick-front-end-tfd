import { TypeParecerMedicoAssSocial } from '@/app/@types/parecer';
import { ActionType } from '@/app/@types/actionReducer';

export function reducerParecer(
  dadosLogin: TypeParecerMedicoAssSocial,
  action: ActionType,
) {
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
    case 'setIdProcesso':
      return {
        ...dadosLogin,
        IdProcesso: action.payload,
      };
    case 'setEntidade':
      return {
        ...dadosLogin,
        Entidade: action.payload,
      };
    case 'setTranscriParicaoMedico':
      return {
        ...dadosLogin,
        TranscriParicaoMedico: action.payload,
      };
    case 'setNumeroPortaria':
      return {
        ...dadosLogin,
        NumeroPortaria: action.payload,
      };
    case 'setJustificativa':
      return {
        ...dadosLogin,
        Justificativa: action.payload,
      };
    default:
      return dadosLogin;
  }
}

export const initialStateParecer: TypeParecerMedicoAssSocial = {
  IdPaciente: null,
  IdProcesso: '',
  Entidade: '',
  TranscriParicaoMedico: '',
  NumeroPortaria: null,
  Justificativa: '',
};
