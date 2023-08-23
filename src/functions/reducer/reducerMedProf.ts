import { TypeMedProf } from "@/app/@types/medProf";
import { ActionType } from "@/app/@types/actionReducer";

export function reducerMedProf(dadoslogin: TypeMedProf, action: ActionType){
    switch(action.type){
        case 'setId':
      return {
        ...dadoslogin,
        _id: action.payload,
      };
    case 'setIdentiProfissional':
      return {
        ...dadoslogin,
        IdentProfissional: action.payload,
      };
    case 'setNomeCompleto':
      return {
        ...dadoslogin,
        NomeCompleto: action.payload,
      };
    case 'setNumeroRegistro':
      return {
        ...dadoslogin,
        NumeroRegistro: action.payload,
      };
    case 'setUF':
      return {
        ...dadoslogin,
        UF: action.payload,
      };
    case 'setCPF':
      return {
        ...dadoslogin,
        CPF: action.payload,
      };
    case 'setDataNascimento':
      return {
        ...dadoslogin,
        DataNascimento: action.payload,
      };
    case 'setCargo':
      return {
        ...dadoslogin,
        Cargo: action.payload,
      };
    case 'setCodigoCBO':
      return {
        ...dadoslogin,
        CodigoCBO: action.payload,
      };
    case 'addEspecialidade':
      return {
        ...dadoslogin, Especialidades: [ { Nome: action.payload }],
      };
    case 'setCentroDeSaude':
      return {
        ...dadoslogin,
        CentroDeSaude: action.payload,
      };
    case 'setDataCadastro':
      return {
        ...dadoslogin,
        DataCadastro: action.payload,
      };
    case 'setAfastamento':
      return {
        ...dadoslogin,
        Afastamento: action.payload,
      };
    default:
      return dadoslogin;
    }
}

export const initialStateFuncionario : TypeMedProf = {
  IdentProfissional: null,
  NomeCompleto: '',
  NumeroRegistro: '',
  UF: '',
  CPF: '',
  DataNascimento: '',
  Cargo: '',
  CodigoCBO:'',
  Especialidades: [{
      Nome: ''
  }],
  CentroDeSaude: '',
  DataCadastro: '',
  Afastamento: ''
}