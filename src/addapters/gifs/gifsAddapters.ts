import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";
import { GeneralGifsResponse } from "../../models/gifs/generalGifsResponse";

export const generalGifsAddapter = (
  gifsData: GeneralGifsResponse
): GeneralGifsAddaptedInterface[] => {
  let generalGifsAddapted:GeneralGifsAddaptedInterface[] = [];

  for (let gif of gifsData.data) {
    generalGifsAddapted.push({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    });
  }

  return generalGifsAddapted;
};
