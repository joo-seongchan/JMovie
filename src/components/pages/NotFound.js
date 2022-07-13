import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle } from "../PageTitle";
import { ScrollTop } from "../../ScrollTop";
import { mainStyle } from "../../styles/globalStyle";

const Wrap = styled.div`
  width: 99vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 100px;
  color: ${mainStyle.pointColor.red};
`;
const SubTitle = styled.div`
  font-size: 60px;
  margin: 20px 0;
  color: ${mainStyle.pointColor.red};
`;
const Text = styled.div`
  font-size: 20px;
  text-align: center;
  letter-spacing: 0px;
  line-height: 30px;
  margin-top: 20px;
  color: ${mainStyle.color.p};
`;
const Button = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${mainStyle.pointColor.red};
  margin-top: 50px;
  a {
    font-size: 28px;
    color: ${mainStyle.pointColor.red};
  }
`;

export const NotFound = () => {
  return (
    <Wrap>
      <PageTitle title={"Error"} />
      <ScrollTop />
      <Title>404 ERROR</Title>
      <SubTitle>Not Found</SubTitle>
      <Text>
        페이지가 존재하지 않거나 사용할수 없는 페이지 입니다.
        <br />
        입력하신 주소가 정확한지 다시한번 확인해주세요.
      </Text>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </Wrap>
  );
};
