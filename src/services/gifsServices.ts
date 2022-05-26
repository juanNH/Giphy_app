import axios from "axios";
import {
  API_KEY,
  GENERAL_GIFS_URL,
  SEARCH_GIFS_BY_TEXT_URL,
} from "../constants/giphy";
import { GeneralGifsResponse } from "../models/gifs/generalGifsResponse";
import { SearchGifsResponse } from "../models/gifs/searchGifsResponse";
export const getGeneralGifs = async () => {
  const settings = {
    params: {
      api_key: API_KEY,
      limit: 20,
      offset: 5,
      random_id: "e826c9fc5c929e0d6c6d423841a282aa",
      bundle: "messaging_non_clips",
    },
  };
  const { data: generalGifsResponse } = await axios.get<GeneralGifsResponse>(
    GENERAL_GIFS_URL,
    settings
  );

  return generalGifsResponse;
};

export const getGifsByText = async (wordToSearch: string) => {
  const settings = {
    params: {
      api_key: API_KEY,
      q: { wordToSearch },
      limit: 20,
      lang: "en",
      offset: 5,
      random_id: "e826c9fc5c929e0d6c6d423841a282aa",
      bundle: "messaging_non_clips",
    },
  };
  const { data: searchGifsResponse } = await axios.get<SearchGifsResponse>(
    SEARCH_GIFS_BY_TEXT_URL,
    settings
  );

  return searchGifsResponse;
};
