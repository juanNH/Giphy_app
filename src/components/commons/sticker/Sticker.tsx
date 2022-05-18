import { StickerStyled } from "./StickerStyled";

interface StickerProps {
  url: string;
  title: string;
}

export const Sticker = ({ url, title }: StickerProps) => {
  return <StickerStyled src={url} alt={title} />;
};
