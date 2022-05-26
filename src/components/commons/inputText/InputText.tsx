import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputTextProps {
  action: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeHolder?: string;
  inputName: string;
}

export const InputStyled = styled.input`
  border: 2px solid ${({theme})=>theme.colors.green.main};
  border-radius: 18px;
  font-size: 16px;
  padding: 8px;
  :focus,
  :active{
    border: 2px solid ${({theme})=>theme.colors.green.light};
    outline: none;
  }
`;

export const InputText = ({ action, label='', inputName, placeHolder='' }: InputTextProps) => {
  return (
    <label>
      {label}
      <InputStyled type="text" placeholder={placeHolder} name={inputName} onChange={(e) => action(e)} />
    </label>
  );
};
