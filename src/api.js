import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "32dc4b3bc05bac57e70db66b64d774c6",
    language: "ko-kr",
  },
});

export const movieApi = {};
export const tvApi = {};
