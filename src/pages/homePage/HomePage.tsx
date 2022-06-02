import { Title } from "../../components/commons";
import { Container, InfoBox, UrlLink } from "./HomePageStyles";

export const HomePage = () => {
  return (
    <Container>
      <InfoBox>
        <Title>Stickers/Gifs app</Title>
        <p>Proyecto giphy, hecho con Typescript, Styled-components.</p>
        <p>Prueba los siguientes Links!</p>
        <UrlLink to="/gifs">Gifs</UrlLink>
        <UrlLink to="/stickers"> Stickers</UrlLink>
      </InfoBox>
    </Container>
  );
};
