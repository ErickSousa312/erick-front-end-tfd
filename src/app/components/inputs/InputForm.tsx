'use client'
import styled from "styled-components";

import { TypeButtonForms } from "@/app/@types/button";


const InputForm = ({ tamanho, tipo, label, placeholder }:TypeButtonForms) => {
  
  return (
    <InputContainer style={{ width: tamanho }}>
      <Title>{label}</Title>
      <InputElement type={tipo} placeholder={placeholder} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  height: 4rem;
  margin: 0.4rem;
`;

const Title = styled.p`
  color: #0b1145;
  font-size: 14px;
`;

const InputElement = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 14px;
  font-weight: bold;
  padding-left: 0.8rem;
`;

export default InputForm;
