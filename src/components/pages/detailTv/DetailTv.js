import { useEffect, useState } from "react";
import { tvApi } from "../../../api";
import { Loading } from "../../Loading";
import { TDetailBg } from "./TDetailBg";

export const DetailTv = () => {
  const [tPop, setTPop] = useState();
  const [tTop, setTTop] = useState();
  const [tOnAir, setTOnAir] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: tPop },
        } = await tvApi.tPopular();
        setTPop(tPop);
        const {
          data: { results: tTop },
        } = await tvApi.tTopRated();
        setTTop(tTop);
        const {
          data: { results: tOnAir },
        } = await tvApi.tOnTheAir();
        setTOnAir(tOnAir);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);
  console.log(tPop);
  return (
    <>
      {loading ? <Loading /> : <TDetailBg db={tPop} db2={tTop} db3={tOnAir} />}
    </>
  );
};
