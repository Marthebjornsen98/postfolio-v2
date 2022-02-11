import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  margin-bottom: 600px;

  .heroContentContainer {
    margin: auto;
    padding-top: 200px;
  }

  .heroBgImgContainer {
    width: 84%;
    position: absolute;
    top: 110px;
    left: 0px;
    display: flex;
    justify-content: flex-end;
  }

  .heroBgImg {
    width: 74%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
