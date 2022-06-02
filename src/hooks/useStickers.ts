import { useCallback, useEffect, useState } from "react";
import {
  generalGifsAddapter,
  searchGifsAddapter,
} from "../addapters/gifs/gifsAddapters";
import { GeneralStickersAddaptedInterface } from "../models/stickers/addaptedGeneralStickers";
import { getGeneralGifs, getGifsByText } from "../services/gifsServices";

export const useStickers= (text: string) => {
  const [generalStickers, setGeneralStickers] = useState<
    GeneralStickersAddaptedInterface[]
  >([]);

  const getStickersBySearch = useCallback(async (text: string) => {
    if (text) {
      const searchGifs: GeneralStickersAddaptedInterface[] = searchGifsAddapter(
        await getGifsByText(text)
      );
      setGeneralStickers(searchGifs);
    }
  }, []);

  const getStickers = useCallback(async () => {
    const generalGifs: GeneralStickersAddaptedInterface[] = generalGifsAddapter(
      await getGeneralGifs()
    );
    setGeneralStickers(generalGifs);
  }, []);

  useEffect(() => {
    if (!generalStickers.length) getStickers();
  }, [generalStickers, getStickers]);

  return {
    generalStickers,
    getStickersBySearch,
  };
};
