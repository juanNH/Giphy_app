import axios from "axios";
import { API_KEY, GENERAL_STICKERS_URL } from "../constants/giphy";
import { GeneralStickersResponse } from "../models/stickers/generalStickersResponse";
export const getGeneralStickers = async () => {
  const settings = {
    params: {
      api_key: API_KEY,
      limit: 20,
      offset: 5,
      rating: "g",
      random_id: "e826c9fc5c929e0d6c6d423841a282aa",
      bundle: "messaging_non_clips",
    },
  };
  const { data: generalGifsResponse } =
    await axios.get<GeneralStickersResponse>(GENERAL_STICKERS_URL, settings);

  return generalGifsResponse;
};
