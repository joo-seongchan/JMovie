import { useState, useEffect } from "react";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";

const Wrap = styled.div`
  padding: 50px 100px;
`;

const SeasonWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 20px;
`;
const Season = styled.div`
  width: 100%;
  height: 350px;
`;
const Poster = styled.div`
  width: 100%;
  height: 85%;
`;
const SeasonTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const TEpisodeGroup = ({ id, detailDb }) => {
  const [seasonDb, setSeasonDb] = useState(detailDb.seasons);
  const [seasonDetailDb, setSeasonDetaildb] = useState("");

  // console.log(seasonDb);
  useEffect(() => {
    const epdata = async () => {
      try {
        const { data } = await tvApi.tSeason(id, seasonDb[0].season_number);
        setSeasonDetaildb(data);
      } catch (error) {
        console.log(error);
      }
    };
    epdata();
  }, []);
  console.log(seasonDetailDb);

  return (
    <Wrap>
      <SeasonWrap>
        {seasonDb.map((data) => (
          <Season key={data.id}>
            <Poster
              style={{
                background: `url(${imgUrl}${data.poster_path}) no-repeat center/cover `,
              }}
            ></Poster>
            <SeasonTitle>{data.name}</SeasonTitle>
          </Season>
        ))}
      </SeasonWrap>
      {/* <EpWrap></EpWrap> */}
    </Wrap>
  );
};
