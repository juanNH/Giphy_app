import { ChangeEvent, useState } from "react";
import { FormSubmit, InputText, Sticker, Title } from "../../components/commons";
import { useStickers } from "../../hooks";
import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";
import { GridItem } from "../gifsPage/gifsPageStyles";
import { FormSection, GridContainer, StickerPage } from "./stickersPageStyles";

export const StickersPage = () => {
  const [searchSticker, setSearchSticker] = useState<string>("");

  const { generalStickers: stickers, getStickersBySearch } = useStickers("");

  const handleChangeSearchSticker = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchSticker(value);
  };
  return (
    <StickerPage>
      <Title>StickersPage</Title>
      <FormSection
        onSubmit={(e) => {
          e.preventDefault();
          getStickersBySearch(searchSticker);
        }}
      >
        <InputText
          action={handleChangeSearchSticker}
          inputName="search"
          placeHolder="Escriba un sticker!"
        />
        <FormSubmit text="Buscar" />
      </FormSection>
      <GridContainer>
        {stickers?.map((stickers: GeneralGifsAddaptedInterface) => (
          <GridItem key={stickers.id}>
            <Sticker url={stickers.url} title={stickers.title} />
          </GridItem>
        ))}
      </GridContainer>
    </StickerPage>
  );
};
