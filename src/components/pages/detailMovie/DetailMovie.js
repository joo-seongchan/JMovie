import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { MDetailBg } from "./MDetailBg";

export const DetailMovie = () => {
  const [mnow, setMnow] = useState();
  const [mtop, setMtop] = useState();
  const [mpop, setMpop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: mPop },
        } = await movieApi.mPopular();
        setMpop(mPop);
        const {
          data: { results: mTop },
        } = await movieApi.mTopRated();
        setMtop(mTop);
        const {
          data: { results: mNow },
        } = await movieApi.mNowPlaying();
        setMnow(mNow);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  return (
    <>
      <PageTitle title={"Movies"} />
      <ScrollTop />
      {loading ? <Loading /> : <MDetailBg db={mnow} db2={mtop} db3={mpop} />}
    </>
  );
};
