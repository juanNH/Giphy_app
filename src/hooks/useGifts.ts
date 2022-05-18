import { useCallback, useEffect, useState } from "react"
import { generalGifsAddapter } from "../addapters/gifs/gifsAddapters";
import { GeneralGifsAddaptedInterface } from "../models/gifs/addaptedGeneralGifs";
import { getGeneralGifs } from "../services/gifsServices";

export const useGifts = () => {
    
    const [generalGifs, setGeneralGifs] = useState<GeneralGifsAddaptedInterface[]>();

    const getGifs = useCallback(async () => {
        const generalGifs:GeneralGifsAddaptedInterface[] = generalGifsAddapter(await getGeneralGifs())
        setGeneralGifs(generalGifs)
    },[])

    useEffect(() => {
        getGifs();
      }, [getGifs]);

    return{
        generalGifs
    }
}