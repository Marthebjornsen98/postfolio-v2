import { HeroContainer } from "./Hero.style";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <div className="heroContentContainer">
          <h1>
            Hi! Im Marthe,
            <span className="next-line">a designer that codes.</span>
          </h1>
          <div className="heroBgImgContainer">
            <div
              className="heroBgImg"
              style={{ backgroundImage: `url(/img/hero-background_dark.jpg)` }}
            />
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

export default Hero;
