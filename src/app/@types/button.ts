import { Dispatch } from "react";

export type TypeButton = {
  icon: React.ElementType,
  size: number,
  texto: string,
  color: string,
  onClick?: string,
  isOpen: boolean,
};

export type TypeButtonForms = {
  tamanho: string,
  tipo: string,
  label: string,
  placeholder: string,
};
