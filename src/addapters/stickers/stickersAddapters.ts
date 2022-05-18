import { GeneralStickersAddaptedInterface } from "../../models/stickers/addaptedGeneralStickers";
import { GeneralStickersResponse } from "../../models/stickers/generalStickersResponse";

export const generalStickersAddapter = (
  stickersData: GeneralStickersResponse
): GeneralStickersAddaptedInterface[] => {
  let generalStickersAddapted: GeneralStickersAddaptedInterface[] = [];

  for (let sticker of stickersData.data) {
    generalStickersAddapted.push({
      id: sticker.id,
      title: sticker.title,
      url: sticker.images.original.url,
    });
  }

  return generalStickersAddapted;
};
