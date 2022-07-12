import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { Loading } from "../../Loading";
import { DetailBg } from "./DetailBg";
import { DetailMlist } from "./DetailMlist";

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
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailBg db={mnow} db2={mtop} db3={mpop} />
          {/* <DetailMlist /> */}
        </>
      )}
    </>
  );
};
