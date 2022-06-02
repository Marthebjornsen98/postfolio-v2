import { AboutContainer, Skills, Experience } from "./About.style";
import SkillsData from "../data/skillsData.json";
import ExperienceData from "../data/experienceData.json";
import Link from "next/link";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <div className="aboutTextContainer">
          <h3>A bit about me</h3>
          <p className="aboutMeText">
            Hi! My name is Marthe Bjørnsen, i am a 23 year old desinger from
            Horten, Norway. I have a bachelors degree in graphic design from
            Høyskolen Kristiania in Oslo. During this period I also worked
            freelance, one project I did was with The Innovtaion Effect and
            NBBL. I worked as a designer in a 8 week long project where we made
            a digital HUB.
          </p>
          <p className="aboutMeText">
            After my bachelors degree I started on two years of front end
            development at Noroff in Oslo, I´ll finish my degree in June this
            year (2022). For the last year and a half i´ve been working as an
            intern in the design department at Gjensidige Forsikring. I work
            with Gjensidige´s profile, where I make digital and print content
            for all sorts of plattforms.
          </p>
          <p className="aboutMeText">
            I love being creative, during the last year I have got a passion
            with sewing. If I set my mind to something I always see it through.
          </p>
        </div>
      </AboutContainer>
      <Skills>
        <h3>Skills</h3>
        <div className="skillsContainer">
          {SkillsData.map(({ id, title, skills }) => (
            <div className="skillsCategory" key={id}>
              <h2>{title}</h2>
              <div className="allSkills">
                {skills.map((allSkills, index) => (
                  <p key={index} className="skills">
                    {allSkills}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Skills>
      <Experience id="experience">
        <div className="experienceContainer">
          <h3>Experience</h3>
          <div className="experienceWrapper">
            {ExperienceData.map(
              ({ id, year, company, workTitle, description, date, link }) => (
                <div className="experienceContent" key={id}>
                  <h2 className="year">{year}</h2>
                  <div className="experienceDetails">
                    <Link href={link} passHref>
                      <h3 className="company">{company}</h3>
                    </Link>
                    <h5 className="workTitle">{workTitle}</h5>
                    <p>{description}</p>
                    <p>{date}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Experience>
    </>
  );
};

export default About;
