import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../../../api";
import { Loading } from "../../Loading";
import { HomeLeft } from "./HomeLeft";
import { HomeRight } from "./HomeRight";

const Container = styled.div`
  display: flex;
`;

export const Home = () => {
  const [moviedata, setMoviedata] = useState();
  const [tvdata, setTvdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: mData },
        } = await movieApi.mPopular();
        setMoviedata(mData);
        const {
          data: { results: tData },
        } = await tvApi.tPopular();

        setTvdata(tData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {moviedata && (
            <Container>
              <HomeLeft img1={moviedata[1]} img2={moviedata[2]} />
              <HomeRight img1={tvdata[2]} img2={tvdata[7]} />
            </Container>
          )}
        </>
      )}
    </div>
  );
};
