import styled from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.div`
  width: 85%;
  margin: 200px auto 0px;
  padding: 90px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .chatContainer {
    width: 35%;
  }

  .emailBtn {
    border: var(--white-btn-border);
    border-radius: var(--border-radius);
    width: fit-content;
    padding: 6px 25px 8px;
    margin-top: 40px;

    &:hover {
      cursor: pointer;
      background-color: var(--secondary-color);
      color: var(--primary-color);
      font-weight: var(--semi-bold);
    }
  }

  .footerDescription {
    margin-top: 20px;
  }

  .footerLinks {
    width: 45%;
    display: flex;
    justify-content: space-between;
  }

  .footerList {
    margin-top: 30px;
  }

  .footerItem {
    margin-top: 20px;

    &:hover {
      font-weight: var(--semi-bold);
    }
  }

  ${media.lessThan("991px")`

  .chatContainer {
    width: 50%;
  }

  .footerList {
    margin-top: 20px;
  }

  .footerLinks {
    width: 30%;
    flex-direction: column;
  }

  .footerContainer {
    margin-bottom: 50px;
  }

  .footerItem {
    margin-top: 10px;
`}

  ${media.lessThan("medium")`

    width: 90%;
    margin: 0px auto;
    padding: 50px 0px;
    flex-direction: column;
    align-items: flex-start;

    .chatContainer {
      width: 90%;
    }
    
    .footerLinks {
      margin-top: 70px;
      width: 90%;
      flex-direction: row;
    }
    `}

    ${media.lessThan("small")`

    .chatContainer {
      width: 100%;
    }

    .footerLinks {
      margin-top: 70px;
      width: 100%;
      flex-direction: column;
    }
  `}
`;
