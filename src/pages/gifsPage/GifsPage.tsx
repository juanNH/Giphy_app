import { ChangeEvent, useState } from "react";
import { FormSubmit, Gif, InputText } from "../../components/commons";
import { useGifs } from "../../hooks/";
import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";
import { FormSection, GifPage, GridContainer, GridItem } from "./gifsPageStyles";
export const GifsPage = () => {
  const [searchGifs, setSearchGifs] = useState<string>("");
  const { generalGifs: gifs, getGifsBySearch } = useGifs("");

  const handleChangeSearchGifs = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchGifs(value);
  };

  return (
    <GifPage>
      <h1 style={{color:"red"}}>GifPage</h1>
      <FormSection
        onSubmit={(e) => {
          e.preventDefault();
          getGifsBySearch(searchGifs);
        }}
      >
        <InputText action={handleChangeSearchGifs} inputName="search" placeHolder="Escriba un gif!" />
        <FormSubmit text="Buscar" />
      </FormSection>
      <GridContainer>
        {gifs?.map((gif: GeneralGifsAddaptedInterface) => (
          <GridItem key={gif.id}>
            <Gif url={gif.url} title={gif.title} />
          </GridItem>
        ))}
      </GridContainer>
    </GifPage>
  );
};
