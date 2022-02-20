import { FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="chatContainer">
          <h3>Let´s chat</h3>
          <p className="footerDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisl
            est, aliquam faucibus varius scelerisque risus ipsum, dolor sit
            amet.
          </p>
          <p className="footerDescription">
            Nisl aliquam dictum fames tempus pretium pharetra. Vestibulum nunc
            erat proin montes, habitant phasellus crasp retium pharetr.
          </p>
          {/* NOTE: https://css-tricks.com/snippets/html/mailto-links/ */}
          <a
            href="mailto:someone@yoursite.com?subject=Hi nice to meet you"
            className="emailBtn"
          >
            Email me
          </a>
        </div>
        <div className="footerLinks">
          <div className="footerContainer">
            <h5>Contact</h5>
            <ul className="footerList">
              <li className="footerItem">
                <a href="#">+47 959 06 263</a>
              </li>
              <li className="footerItem">
                <a href="#">bjornsendesign@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="footerContainer">
            <h5>Social Media</h5>
            <ul className="footerList">
              <li className="footerItem">
                <a href="#">Instagram</a>
              </li>
              <li className="footerItem">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
