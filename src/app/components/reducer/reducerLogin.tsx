import { TypeLogin } from '@/app/@types/dadosUser';
import { ActionType } from '@/app/@types/actionReducer'

export function reducer(dadosLogin:TypeLogin, action:ActionType) {
    switch (action.type) {
      case 'setUsuario':
        return { ...dadosLogin, userName: action.payload };
      case 'setSenha':
        return { ...dadosLogin, senha: action.payload };
      default:
        throw new Error('Tipo de ação desconhecido.');
    }
  }
