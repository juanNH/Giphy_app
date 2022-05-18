import { useCallback, useEffect, useState } from "react";
import { generalStickersAddapter } from "../addapters/stickers/stickersAddapters";
import { GeneralStickersAddaptedInterface } from "../models/stickers/addaptedGeneralStickers";
import { getGeneralStickers } from "../services/stickersServices";

export const useStickers = () => {
    
    const [generalStickers, setGeneralStickers] = useState<GeneralStickersAddaptedInterface[]>();


    const getStickers = useCallback(async () => {
        const generalStickers:GeneralStickersAddaptedInterface[] = generalStickersAddapter(await getGeneralStickers())
        setGeneralStickers(generalStickers)
    },[])

    useEffect(() => {
        getStickers();
      }, [getStickers]);

    return {
        generalStickers
    }
}