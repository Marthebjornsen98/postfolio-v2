import { HeaderWrapper } from "./HeaderWrapper.style";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

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

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <HeaderWrapper>
        <nav>
          <div className="logoContainer">
            <a href="#" className="logo" onClick={() => scroll.scrollToTop()}>
              Bjornsen Design
            </a>
          </div>
          <div className="navElmContainer">
            <ul className="navElmWrapper">
              {navElements.map(({ id, title, link }) => (
                <li key={id} onClick={handleToggle}>
                  <a href={link} className={isActive ? "isActive" : "navElm"}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
