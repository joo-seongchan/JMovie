import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "32dc4b3bc05bac57e70db66b64d774c6",
    language: "ko-kr",
  },
});

export const movieApi = {
  mLatest: () => api.get("movie/latest"),
  mPopular: () => api.get("movie/popular"),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
export const tvApi = {
  tLatest: () => api.get("tv/latest"),
  tPopular: () => api.get("tv/popular"),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};
