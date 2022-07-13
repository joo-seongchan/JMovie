import { useEffect, useState } from "react";
import { tvApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
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
      <PageTitle title={"TV Shows"} />
      <ScrollTop />
      {loading ? <Loading /> : <TDetailBg db={tPop} db2={tTop} db3={tOnAir} />}
    </>
  );
};
