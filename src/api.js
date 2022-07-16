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
  mTopRated: () => api.get("movie/top_rated"),
  mNowPlaying: () => api.get("movie/now_playing"),
  mUpComming: () => api.get("movie/upcoming"),
  mDetail: (id) => api.get(`movie/${id}`),
  mVideo: (id) => api.get(`movie/${id}/videos`),
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
  tTopRated: () => api.get("tv/top_rated"),
  tOnTheAir: () => api.get("tv/airing_today"),
  tDetail: (id) => api.get(`tv/${id}`),
  tVideo: (id) => api.get(`tv/${id}/videos`),
  tSeason: (tvid, id) => api.get(`tv/${tvid}/season/${id}`),
  tEpisodeGroups: (id) => api.get(`tv/${id}/episode_groups`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};
