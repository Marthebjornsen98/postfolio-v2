import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
    :root {
        //Primary colors:
        --primary-color: #070707;
        --secondary-color: #FFFFFF;

        //Weights
        --bold: 700;
        --semi-bold: 600;

        //Details
        --border-radius: 8px;
        --white-btn-border: solid 2px var(--secondary-color);
    }

    * {
        font-family: 'Quicksand', Helvetica, Sans-serif;
        margin: 0px;
        padding: 0px;
        text-decoration: none;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        box-sizing: border-box;
    }

    h1 {
        font-size: 5rem;
        z-index: 99;
        position: relative;
    }

    h2 {
        font-size: 4rem;
    }

    h3 {
        font-size: 3rem;
    }

    h4 {
        font-size: 2.25rem;
    }

    h5 {
        font-size: 1.5rem
    }

    ${media.lessThan("large")`
        h1 {
            font-size: 5rem;
        }

        h2 {
            font-size: 3.5rem;
        }

        h3 {
            font-size: 2.5rem;
        }
    `}


    ${media.lessThan("991px")`
        h2 {
            font-size: 2.5rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1.25rem
        }

        h5 {
            font-size: 1.125rem;
        }
    `}

    ${media.lessThan("medium")`

        h1 {
            font-size: 4.125rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h5 {
            font-size: 1.125rem;
        }
    `}

    ${media.lessThan("small")`

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.125rem;
    }
`}

    p {
        font-size: 1rem;
    }

    a {
        color: var(--secondary-color);
    }

    .next-line {
        display: block;
    }
`;

export default GlobalStyle;
