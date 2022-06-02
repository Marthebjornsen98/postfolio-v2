import styled from "styled-components";
import media from "styled-media-query";

export const HeroContainer = styled.div`
  width: 85%;
  margin: auto;

  .heroContentContainer {
    margin: auto;
    padding-top: 250px;
    margin-bottom: 500px;
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

  ${media.lessThan("991px")`
    .heroContentContainer {
        margin-bottom: 450px;
      }

      .heroBgImgContainer {
        width: 100%;
      }
      
      .heroBgImg {
        width: 77%;
        height: 600px;
      }
  `}

  ${media.lessThan("medium")`
    width: 90%;

    .heroBgImg {
        width: 90%;
        height: 500px;
      }
  `}

  ${media.lessThan("small")`
    width: 90%;

    .heroBgImg {
        width: 100%;
        height: 75vh;
      }
  `}
`;
