import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";

const Container = styled.div`
  padding: 0 100px;
`;

const Title = styled.div`
  font-size: 100px;
  color: ${mainStyle.pointColor.red};
  text-align: center;
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 1px solid ${mainStyle.color.sub};
  font-size: 20px;
  border-radius: 50px;
  margin: 100px 0;
  &::placeholder {
    font-size: 22px;
  }
`;
const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;
const MainTitle = styled.div`
  width: 50%;
  font-size: 36px;
  padding-left: 15px;
  color: ${mainStyle.pointColor.red};
  &:last-child {
    color: ${mainStyle.pointColor.green};
  }
`;

const Section = styled.section`
  display: flex;
  margin-bottom: 100px;
`;

const Wrap = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin-right: 10px;
  padding: 10px;
  /* background-color: ${mainStyle.pointColor.red}; */
  &:nth-child(2) {
    margin-right: 0;
    margin-left: 10px;
    /* background-color: ${mainStyle.pointColor.green}; */
  }
`;

const Con = styled.div`
  a {
    display: block;
    width: 100%;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 400px;
`;

const ConTitle = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 10px;
  text-align: center;
`;

export const Search = () => {
  const [msearchterm, setMsearchterm] = useState();
  const [tsearchterm, setTsearchterm] = useState();
  const [loading, setLoading] = useState();
  const [titleloading, setTitleloading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchData = async () => {
    const { search: term } = getValues();
    setLoading(true);
    setTitleloading(true);
    try {
      const {
        data: { results: mdata },
      } = await movieApi.search(term);

      if (mdata.length <= 0) {
        setError("result", {
          message: "영화가 없어요...!",
        });
      } else {
        setMsearchterm(mdata);
      }

      const {
        data: { results: tdata },
      } = await tvApi.search(term);

      if (mdata.length <= 0) {
        setError("results", {
          message: "TV Show가 없어요...!",
        });
      } else {
        setTsearchterm(tdata);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(msearchterm);
  console.log(tsearchterm);
  //   console.log(loading);
  return (
    <Container>
      <Title>J MOVIE</Title>
      <form onSubmit={handleSubmit(searchData)}>
        <Input
          {...register("search", {
            required: "내용은 필수 입니다.",
            onChange() {
              clearErrors("result");
            },
          })}
          type="text"
          placeholder="영화 검색..."
        />
      </form>
      {loading ? (
        <Loading />
      ) : (
        <>
          {titleloading ? (
            <TitleWrap>
              <MainTitle>Movies</MainTitle>
              <MainTitle>Tv Showes</MainTitle>
            </TitleWrap>
          ) : (
            ""
          )}

          <Section>
            <Wrap>
              {msearchterm && (
                <>
                  {msearchterm.map((term) => (
                    <Con key={term.id}>
                      <Link to="#">
                        <Bg
                          style={{
                            background: `url(${imgUrl}${term.poster_path}) no-repeat center/cover `,
                          }}
                        />
                        <ConTitle>{term.title}</ConTitle>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </Wrap>
            <Wrap>
              {tsearchterm && (
                <>
                  {tsearchterm.map((term) => (
                    <Con key={term.id}>
                      <Link to="#">
                        <Bg
                          style={{
                            background: `url(${imgUrl}${term.poster_path}) no-repeat center/cover `,
                          }}
                        />
                        <ConTitle>{term.name}</ConTitle>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </Wrap>
          </Section>
        </>
      )}
    </Container>
  );
};
