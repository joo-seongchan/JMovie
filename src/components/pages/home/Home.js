import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { HomeLeft } from "./HomeLeft";

export const Home = () => {
  const [moviedata, setMoviedata] = useState();
  const [tvdata, setTvdata] = useState();

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: mData },
        } = await movieApi.mPopular();
        setMoviedata(mData);
        const {
          data: { results: tData },
        } = await movieApi.tPopular();
        setTvdata(tData);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);
  // console.log();
  return (
    <>
      {moviedata && (
        <HomeLeft
          img1={moviedata[0].poster_path}
          img2={moviedata[1].poster_path}
        />
      )}
    </>
  );
};
