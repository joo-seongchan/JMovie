import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { HomeLeft } from "./HomeLeft";
import { HomeRight } from "./HomeRight";

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: block;
  }
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
      <PageTitle title={"Home"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {moviedata && (
            <Container>
              <HomeLeft img1={moviedata[5]} img2={moviedata[6]} />
              <HomeRight img1={tvdata[2]} img2={tvdata[15]} />
            </Container>
          )}
        </>
      )}
    </div>
  );
};
