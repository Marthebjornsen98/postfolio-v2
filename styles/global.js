import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
    html {
        background-color: green;
    }

    ${media.greaterThan("huge")`
    --font-size-xl: 6rem;
    `}
    
`;

export default GlobalStyle;
