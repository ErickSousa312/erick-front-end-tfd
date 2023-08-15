import { TypeEntidade } from "@/app/@types/entidade";
import { ActionType } from "@/app/@types/actionReducer";

export function reducerEntidade(dadosLogin:TypeEntidade, action: ActionType){
    switch (action.type){
        case 'setId':
            return {
              ...dadosLogin,
              _id: action.payload,
            };
          case 'setNomeEntidade':
            return {
              ...dadosLogin,
              NomeEntidade: action.payload,
            };
          case 'setCidade':
            return {
              ...dadosLogin,
              Cidade: action.payload,
            };
          case 'setEstado':
            return {
              ...dadosLogin,
              Estado: action.payload,
            };
        case'setEspecialidade':{
            return {...dadosLogin, Especialidades:[{Nome:action.payload}]}
        }
          default:
            return dadosLogin;        
    }

}


export const initialStatEntidade : TypeEntidade = {
  NomeEntidade: '',
  Cidade: '',
  Estado: '',
  Especialidades: [{
      Nome: ''
  }]
}