import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: inherit;
  flex-direction: column;
  border-radius: 50px;
  padding: 16px;
  border: 1rem solid ${({ theme }) => theme.colors.green.main};
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const UrlLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
