import { GifStyled } from "./GifStyles";

interface GifProps {
  url: string;
  title: string;
}

export const Gif = ({ url, title }: GifProps) => {
  return <GifStyled src={url} alt={title} />;
};
