import styled from "styled-components";

interface FormSubmitProps {
  text: string;
  label?: string;
}
export const InputSearch = styled.input`
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.green.main};
  border-radius: 18px;
  :focus,
  :active{
    border: 2px solid ${({ theme }) => theme.colors.green.light};
  } 

`;

export const FormSubmit = ({ text, label }: FormSubmitProps) => {
  return (
    <label>
      {label}
      <InputSearch type="submit" value={text} />
    </label>
  );
};
