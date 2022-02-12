import styled from "styled-components";

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

  .projectNumbAndCategory {
    width: 350px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .projectTitle {
    display: flex;
    width: 600px;
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
`;
