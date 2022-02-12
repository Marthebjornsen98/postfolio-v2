import styled from "styled-components";
import media from "styled-media-query";

export const ProjectContainer = styled.div`
  width: 85%;
  margin: auto;

  .projectCard {
    margin-top: 300px;
  }

  .projectText {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  .projectSplit {
    display: flex;
    justify-content: space-between;
  }

  .projectNumbAndCategory {
    width: 350px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .projectTitle {
    display: flex;
    max-width: 600px;
    flex-direction: column;
    justify-content: flex-end;
  }

  .projectYearAndDesc {
    width: 350px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: end;
  }

  .projectImg {
    width: 100%;
    height: 800px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  ${media.lessThan("991px")`
    .projectCard {
      margin-top: 150px;
    }

    .projectText {
      flex-direction: column;
    }

    .projectSplit {
      flex-direction: column-reverse;
    }

    .projectTitle {
      margin-bottom: 50px;
    }

    .title {
      font-size: 4rem;
    }

    .projectNumbAndCategory {
      width: 100%;
      height: 70px;
      margin-bottom: 40px;
    }

    .projectYearAndDesc {
      width: 100%;
      height: 70px;
      text-align: start;
    }

    .projectImg {
      width: 100%;
      height: 600px;
     }
  `}

  ${media.lessThan("medium")`
    width: 90%;
  `}

  ${media.lessThan("380px")`
  .title {
      font-size: 3rem;
    }
  `}
`;
