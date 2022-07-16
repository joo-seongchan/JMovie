import { useEffect } from "react";
import { tvApi } from "../../../api";

export const TEpisodeGroup = () => {
  useEffect(() => {
    const epdata = async () => {
      try {
        console.log(await tvApi.tDetail(68398));
        console.log(await tvApi.tSeason(68398, 1));
      } catch (error) {
        console.log(error);
      }
    };
    epdata();
  }, []);
  return <div>TEpisodeGroup</div>;
};
