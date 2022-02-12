import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);

  .aboutTextContainer {
    width: 60%;
    margin-top: 250px;
  }

  .aboutMeText {
    width: 80%;
    margin-top: 30px;
  }
`;

export const Skills = styled.div`
  width: 85%;
  margin: 200px auto 0px;

  .skillsContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .allSkills {
    margin-top: 30px;
  }

  .skills {
    margin-top: 15px;
  }
`;

export const Experience = styled.div`
  width: 85%;
  margin: 200px auto 0px;

  .experienceWrapper {
    margin-top: 30px;
  }

  .experienceContent {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 150px;
  }

  .year {
    font-size: 9.375rem;
    width: 60%;
  }

  .experienceDetails {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .workTitle {
    margin-top: 20px;
  }
`;
