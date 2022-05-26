import { useCallback, useEffect, useState } from "react";
import {
  generalGifsAddapter,
  searchGifsAddapter,
} from "../addapters/gifs/gifsAddapters";
import { GeneralGifsAddaptedInterface } from "../models/gifs/addaptedGeneralGifs";
import { getGeneralGifs, getGifsByText } from "../services/gifsServices";

export const useGifs = (text: string) => {
  const [generalGifs, setGeneralGifs] = useState<
    GeneralGifsAddaptedInterface[]
  >([]);

  const getGifsBySearch = useCallback(async (text: string) => {
    if (text) {
      const searchGifs: GeneralGifsAddaptedInterface[] = searchGifsAddapter(
        await getGifsByText(text)
      );
      setGeneralGifs(searchGifs);
    }
  }, []);

  const getGifs = useCallback(async () => {
    const generalGifs: GeneralGifsAddaptedInterface[] = generalGifsAddapter(
      await getGeneralGifs()
    );
    setGeneralGifs(generalGifs);
  }, []);

  useEffect(() => {
    if (!generalGifs.length) getGifs();
  }, [generalGifs, getGifs]);

  return {
    generalGifs,
    getGifsBySearch,
  };
};
