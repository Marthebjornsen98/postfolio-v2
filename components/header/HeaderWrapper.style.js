import styled from "styled-components";
import media from "styled-media-query";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: var(--primary-color);
  z-index: 100;

  nav {
    width: 85%;
    height: 100px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }

  .logoContainer {
    width: 20%;
  }

  .logo {
    font-size: 1.25rem;
    font-weight: var(--bold);
    color: var(--secondary-color);
  }

  .navElmContainer {
    width: 25%;
  }

  .navElmWrapper {
    display: flex;
    justify-content: space-between;
  }

  .navElm {
    font-weight: 500;

    &:hover {
      cursor: pointer;
      font-weight: var(--bold);
    }
  }

  .isActive {
    font-weight: var(--bold);
  }

  ${media.lessThan("991px")`
    .logoContainer {
      width: 50%;
    }

    .logo {
      font-size: 1rem;
    }

    .navElmContainer {
      width: 50%;
    }
  `}

  ${media.lessThan("medium")`
    nav {
      width: 90%;
    }
  `}

  ${media.lessThan("small")`

    nav {
      height: 80px;
    }

    .logoContainer {
        width: auto;
      }

    .navElmContainer {
        width: 50%;
        font-size: 0.875rem;
      }
  `}
`;
