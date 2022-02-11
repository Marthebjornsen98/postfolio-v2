import { HeaderWrapper } from "./HeaderWrapper.style";
import { Link, animateScroll as scroll } from "react-scroll";

const navElements = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About",
    link: "#about",
  },
];

const Header = () => {
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
            <ul className="navElmWrapperr">
              {navElements.map(({ title, link }) => (
                <li key={title}>
                  <Link
                    className="navElm"
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {title}
                  </Link>
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
