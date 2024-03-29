import { TypeLogin } from '@/app/@types/dadosLogin';
import { ActionType } from '@/app/@types/actionReducer';

export function reducerLogin(dadosLogin: TypeLogin, action: ActionType) {
  switch (action.type) {
    case 'setUsuario':
      return { ...dadosLogin, userName: action.payload };
    case 'setSenha':
      return { ...dadosLogin, senha: action.payload };
    default:
      throw new Error('Tipo de ação desconhecido.');
  }
}
