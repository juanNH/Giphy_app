import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";
import { GeneralGifsResponse } from "../../models/gifs/generalGifsResponse";
import { SearchGifsResponse } from "../../models/gifs/searchGifsResponse";

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


export const searchGifsAddapter = (
  gifsData: SearchGifsResponse
): GeneralGifsAddaptedInterface[] => {
  let generalGifsAddapted:GeneralGifsAddaptedInterface[] = [];

  for (let gif of gifsData.data) {
    generalGifsAddapted.push({
      id: gif.id,
      title: gif.title,
      url: gif.images.fixed_height_downsampled.url,
    });
  }

  return generalGifsAddapted;
};
