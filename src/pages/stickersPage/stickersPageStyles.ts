import styled from "styled-components";
import { InputSearch, InputStyled } from "../../components/commons";

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  border: 5px solid ${({ theme }) => theme.colors.third};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screenSize.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StickerItem = styled.div``;

export const StickerPage = styled.div`
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  ${InputStyled} {
    width: 600px;
    padding: 1rem;
    border-width: 5px;
    font-size: 21px;
    @media (max-width: ${({ theme }) => theme.screenSize.sm}) {
      border-width: 2px;
      padding: 0.5rem;
      font-size: 17px;
      width: 80vw;
    }
  }
  ${InputSearch} {
    margin: 1rem;
    width: 400px;
    padding: 0.8rem;
    font-size: 20px;
    border-width: 4px;
    @media (max-width: ${({ theme }) => theme.screenSize.sm}) {
      border-width: 2px;
      font-size: 16px;
      padding: 0.5rem;
      width: 30vw;
    }
  }
`;
