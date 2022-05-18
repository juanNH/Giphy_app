import axios from "axios";
import { API_KEY, GENERAL_GIFS_URL } from "../constants/giphy";
import { GeneralGifsResponse } from "../models/gifs/generalGifsResponse";
export const getGeneralGifs = async () => {
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
  const { data: generalGifsResponse }= await axios.get<GeneralGifsResponse>(
    GENERAL_GIFS_URL,
    settings
  );

  return generalGifsResponse
};
