import "../styles/globals.css";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      return <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
