import { TypePaciente } from '@/app/@types/paciente';
import { ActionType } from '@/app/@types/actionReducer';
import { Days_One } from 'next/font/google';

export function reducerPaciente(dadosLogin: TypePaciente, action: ActionType) {
  console.log(dadosLogin);
  switch (action.type) {
    case 'setId':
      return { ...dadosLogin, _id: action.payload };
    case 'setDataNascimento':
      return { ...dadosLogin, DataNascimento: action.payload };
    case 'setNumeroCPF':
      return { ...dadosLogin, NumeroCPF: action.payload };
    case 'setNumeroRG':
      return { ...dadosLogin, NumeroRG: action.payload };
    case 'setOrgaoEmissor':
      return { ...dadosLogin, OrgaoEmissor: action.payload };
    case 'setNumeroCartaoSUS':
      return { ...dadosLogin, NumeroCartaoSUS: action.payload };
    case 'setNumeroTituloEleitor':
      return { ...dadosLogin, NumeroTituloEleitor: action.payload };
    case 'setEleitorUF':
      return { ...dadosLogin, EleitorUF: action.payload };
    case 'setNomePaciente':
      return { ...dadosLogin, NomePaciente: action.payload };
    case 'setNomeSocial':
      return { ...dadosLogin, NomeSocial: action.payload };
    case 'setSexo':
      return { ...dadosLogin, Sexo: action.payload };
    case 'setIdade':
      return { ...dadosLogin, Idade: action.payload };
    case 'setRaca':
      return { ...dadosLogin, raca: action.payload };
    case 'setCor':
      return { ...dadosLogin, cor: action.payload };
    case 'setSangue':
      return { ...dadosLogin, Sangue: action.payload };
    case 'setDataCadastro':
      return { ...dadosLogin, DataCadastro: action.payload };
    case 'setNomePaiouResponsavel':
      return { ...dadosLogin, NomePaiouResponsavel: action.payload };
    case 'setNomeMae':
      return { ...dadosLogin, NomeMae: action.payload };
    case 'setEstadoCivil':
      return { ...dadosLogin, EstadoCivil: action.payload };
    case 'setEndereco':
      return { ...dadosLogin, Endereco: action.payload };
    case 'setBairro':
      return { ...dadosLogin, Bairro: action.payload };
    case 'setCidade':
      return { ...dadosLogin, Cidade: action.payload };
    case 'setUF':
      return { ...dadosLogin, UF: action.payload };
    case 'setCEP':
      return { ...dadosLogin, CEP: action.payload };
    case 'setReferencia':
      return { ...dadosLogin, Referencia: action.payload };
    case 'setCelular':
      return { ...dadosLogin, Celular: [{ Numero: action.payload }] };
    case 'setAcompanhantesNome':
      return {
        ...dadosLogin,
        Acompanhantes: [
          {
            ...dadosLogin.Acompanhantes[0],
            NomeAcompanhante: action.payload,
          },
        ],
      };
    case 'setAcompanhantesCPF':
      return {
        ...dadosLogin,
        Acompanhantes: [
          {
            ...dadosLogin.Acompanhantes[0],
            NumeroCPF: action.payload,
          },
        ],
      };

    case 'setAcompanhantesRG':
      return {
        ...dadosLogin,
        Acompanhantes: [
          {
            ...dadosLogin.Acompanhantes[0],
            NumeroRG: action.payload,
          },
        ],
      };
    case 'setAcompanhantesDataNascimento':
      return {
        ...dadosLogin,
        Acompanhantes: [
          {
            ...dadosLogin.Acompanhantes[0],
            DataNascimento: action.payload,
          },
        ],
      };
    case 'setEmail':
      return { ...dadosLogin, Email: action.payload };
    case 'setIdentZona':
      return { ...dadosLogin, identZona: action.payload };
    case 'setTratamentoAtual':
      return { ...dadosLogin, TratamentoAtual: action.payload };
    case 'setOcupacao':
      return { ...dadosLogin, Ocupacao: action.payload };
    case 'setGrauEstudo':
      return { ...dadosLogin, GrauEstudo: action.payload };
    case 'setConta':
      return { ...dadosLogin, Conta: action.payload };
    default:
      throw new Error('Tipo de ação desconhecido.');
  }
}

export const initialStateFuncionario: TypePaciente = {
  DataNascimento: '',
  NumeroCPF: '',
  NumeroRG: '',
  OrgaoEmissor: '',
  NumeroCartaoSUS: null,
  NumeroTituloEleitor: null,
  EleitorUF: '',
  NomePaciente: '',
  NomeSocial: '',
  Sexo: '',
  Idade: null,
  raca: '',
  cor: '',
  Sangue: '',
  DataCadastro: '',
  NomePaiouResponsavel: '',
  NomeMae: '',
  EstadoCivil: '',
  Endereco: '',
  Bairro: '',
  Cidade: '',
  UF: '',
  CEP: null,
  Referencia: '',
  Celular: [
    {
      Numero: null,
    },
  ],
  Acompanhantes: [
    {
      NomeAcompanhante: '',
      NumeroCPF: '',
      NumeroRG: '',
      DataNascimento: '',
    },
  ],
  Email: '',
  identZona: '',
  TratamentoAtual: '',
  Ocupacao: '',
  GrauEstudo: '',
  Conta: null,
};
