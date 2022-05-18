import { useEffect, useState } from "react";
import { Gif } from "../../components/commons";
import { useGifts } from "../../hooks/";
import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";

export const GifsPage = () => {
  const [gifs, setGifs] = useState<GeneralGifsAddaptedInterface[]>();
  const { generalGifs } = useGifts();
  useEffect(() => {
    setGifs(generalGifs);
  }, [generalGifs]);

  return (
    <div>
      GifPage
      <div>
        {gifs?.map((gif: GeneralGifsAddaptedInterface) => (
          <div key={gif.id}>
            <Gif url={gif.url} title={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
