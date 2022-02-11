import { createGlobalStyle } from "styled-components";
// import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`

    :root {
        //Primary colors:
        --primary-color: #070707;
        --secondary-color: #FFFFFF;

        // Secondary colors
        --dark-blue: #3D616B;
        --light-blue: #92CDD8;
        --dark-pink: #CC859A;
        --light-pink: #F3C4D3;
        --dark-yellow: #D69A2D;
        --light-yellow: #F4C673;

        //Weights
        --bold: 700;
        --semi-bold: 600;

        //Details
        --border-radius: 8px;
        --blue-btn-border: solid 3px var(--dark-blue);
        --black-btn-border: solid 3px var(--primary-color);
    }

    * {
        font-family: "Quicksand", Helvetica, Sans-serif;
        margin: 0px;
        padding: 0px;
        text-decoration: none;
        list-style: none;
    }

    body {
        box-sizing: border-box;
    }

    h1 {
        font-size: 6.875rem;
        z-index: 99;
        position: relative;
    }

    h2 {
        font-size: 4.5rem;
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

    p {
        font-size: 1rem;
    }

    .next-line {
        display: block;
    }
`;

export default GlobalStyle;
