import styled from "styled-components";

const RightWrap = styled.div``;

const TvImgWrap = styled.div``;

const MenuWrap = styled.div``;

const MovieMenu = styled.div``;

const MainMenu = styled.div``;

const SubMenuWrap = styled.div``;

const Sub2Menu = styled.div``;

const TvMenu = styled.div``;

export const HomeRight = () => {
  return (
    <RightWrap>
      <TvImgWrap>
        <img />
        <img />
      </TvImgWrap>
      <MenuWrap>
        <MovieMenu>
          <MainMenu></MainMenu>
          <SubMenuWrap>
            <div></div>
            <div></div>
          </SubMenuWrap>
          <Sub2Menu></Sub2Menu>
        </MovieMenu>
        <TvMenu>
          <MainMenu></MainMenu>
          <SubMenuWrap>
            <div></div>
            <div></div>
          </SubMenuWrap>
          <Sub2Menu></Sub2Menu>
        </TvMenu>
      </MenuWrap>
    </RightWrap>
  );
};
