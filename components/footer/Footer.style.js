import styled from "styled-components";

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
`;
