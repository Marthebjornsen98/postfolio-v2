import Data from "../data/data.json";
import Link from "next/link";
import { ProjectContainer } from "./Projects.style";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        {Data.map(({ id, title, year, description, category, image, link }) => (
          <div className="projectCard" key={id}>
            <div className="projectText">
              <div className="projectSplit">
                <div className="projectNumbAndCategory">
                  <h3>{id}</h3>
                  <p>{category}</p>
                </div>
                <div className="projectTitle">
                  <Link href={link} passHref>
                    <h1 className="title">{title}</h1>
                  </Link>
                </div>
              </div>
              <div className="projectYearAndDesc">
                <h3>{year}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div
              className="projectImg"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
