import { HeaderWrapper } from "./HeaderWrapper.style";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const navElements = [
    {
      id: "1",
      title: "Home",
      link: "#home",
    },
    {
      id: "2",
      title: "Projects",
      link: "#projects",
    },
    {
      id: "3",
      title: "About",
      link: "#about",
    },
  ];
  return (
    <>
      <HeaderWrapper>
        <nav>
          <div className="logoContainer">
            <a href="#" className="logo" onClick={() => scroll.scrollToTop()}>
              Bjornsen Design
            </a>
          </div>
          <ul className="navElmWrapper">
            {navElements.map(({ id, title, link }) => (
              <li key={id}>
                <a href={link} className="navElm">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
