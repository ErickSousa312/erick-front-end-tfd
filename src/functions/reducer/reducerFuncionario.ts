import { TypeFuncionario } from "@/app/@types/funcionario";
import { ActionType } from '@/app/@types/actionReducer'

export function reducerFuncionario(dadosLogin: TypeFuncionario, action: ActionType) {
    console.log(dadosLogin)
    switch (action.type) {
        case 'set_id':
            return { ...dadosLogin, _id: action.payload };
        case 'setNomeFuncionario':
            return { ...dadosLogin, nomeFuncionario: action.payload };
        case 'setCPF':
            return { ...dadosLogin, CPF: action.payload };
        case 'setRg':
            return { ...dadosLogin, Rg: action.payload };
        case 'setNumeroMatricula':
            return { ...dadosLogin, NumeroMatricula: action.payload };
        case 'setNumeroPortaria':
            return { ...dadosLogin, NumeroPortaria: action.payload };
        case 'setCidade':
            return { ...dadosLogin, Cidade: action.payload };
        case 'setUfCidade':
            return { ...dadosLogin, UfCidade: action.payload };
        case 'setCEP':
            return { ...dadosLogin, CEP: action.payload };
        case 'setCelular':
            return { ...dadosLogin, Celular: [...dadosLogin.Celular, { Numero: action.payload }] };
        case 'setAtividadeExercida':
            return { ...dadosLogin, AtividadeExercida: action.payload };
        case 'setDataNascimento':
            return { ...dadosLogin, DataNascimento: action.payload };
        case 'setCentroDeSaude':
            return { ...dadosLogin, CentroDeSaude: action.payload };
        case 'setDataCadastro':
            return { ...dadosLogin, DataCadastro: action.payload };
        case 'setObservacao':
            return { ...dadosLogin, Observacao: action.payload };
        default:
            throw new Error('Tipo de ação desconhecido.');
    }
}

export const initialStateFuncionario : TypeFuncionario = {
    nomeFuncionario: '',
    CPF: '',
    Rg: 0,
    NumeroMatricula: 0,
    NumeroPortaria: 0,
    Cidade: '',
    UfCidade: '',
    CEP: '',
    Celular: [{
        Numero: 0
    }],
    AtividadeExercida: '',
    DataNascimento: '',
    CentroDeSaude: '',
    DataCadastro: '',
    Observacao: '',
}