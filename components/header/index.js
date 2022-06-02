import { HeaderWrapper } from "./HeaderWrapper.style";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  // const [navElm, setNavElm] = useState();

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
    {
      id: "4",
      title: "Experience",
      link: "#experience",
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
            {navElements.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <Link href={link} passHref>
                    <a className="navElm">{title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
