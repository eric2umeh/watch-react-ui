import { createGlobalStyle } from "styled-components";

const breakpoints = {
    desktop: '1200px',
    laptop: '1024px',
    tablet: '768px',
    mobileL: '480px',
    mobileS: '319px',
}

export const lightTheme = {
    firstColor: "#FFB566",
    buttonColor: "#2B2B2B",
    buttonColorAlt: "#363636",
    buttonHover: "#A1A1A1",
    titleColor: "#262626",
    textColor: "#BFBFBF",
    textColorLight: "#8C8C8C",
    bodyColor: "#FCFCFC",
    containerColor: "#FFF",
    borderColor: "#F0F0F0",
    darkNav: "#262626",
    scrollColor: "#BDBDBD",
};

export const darkTheme = {
    firstColor: "#EFBE8A",
    buttonColor: "#3D3D3D",
    buttonColorAlt: "#474747",
    titleColor: "#F2F2F2",
    textColor: "#BFBFBF", 
    bodyColor: "#1F1F1F",
    containerColor: "#292929",
    borderColor: "#333333",
    darkBoxShadow: "#0A0A0A",
    scrollColor: "#4D4D4D",
};


const GlobalStyle = createGlobalStyle`

    :root {
        --header-height: 3.5rem;

        /*========== Colors ==========*/
        --first-color: hsl(31, 100%, 70%);
        --button-color: hsl(0, 0%, 17%);
        --button-color-alt: hsl(0, 0%, 21%);
        --title-color: hsl(0, 0%, 15%);
        --text-color: hsl(0, 0%, 35%);
        --text-color-light: hsl(0, 0%, 55%);
        --body-color: hsl(0, 0%, 99%);
        --container-color: #FFF;
        --border-color: hsl(0, 0%, 94%);


        --scroll-thumb: hsl(0, 0%, 17%); /* #2B2B2B */

        /*========== Font and typography ==========*/
        --ralewaysans-font: 'Raleway', sans-serif;
        --calibri-font: 'Calibri';
        --roboto-font: 'Roboto', sans-serif;

        --body-font: var(--roboto-font);
        --biggest-font-size: 2rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;

        /*========== Font weight ==========*/
        --font-medium: 500;
        --font-bold: 700;

        /*========== Margenes Bottom ==========*/
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
        --mb-3: 3rem;

        /*========== z index ==========*/
        --z-tooltip: 10;
        --z-fixed: 100;
    }

    @media screen and (min-width: 968px) {
        --biggest-font-size: 2.5rem;
        --h1-font-size: 2.25rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
    
    }
    
    /*=============== BASE ===============*/
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            width: .6rem;
            background: ${(props) => props.theme.scrollColor};
        }
        
        ::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background: #2B2B2B;
        }
    }

    body,
    button,
    input {
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
    }

    body {
        margin: 0;
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.bodyColor};    
        transition: .4s; /*For animation dark mode*/
    }

    h1, h2, h3, h4 {
        color: ${(props) => props.theme.titleColor};
        font-weight: var(--font-medium);
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }


/*=============== REUSABLE CSS CLASSES ===============*/
    .container {
        max-width: 1024px;
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);

        @media screen and (min-width: 1024px) {
            margin-left: auto;
            margin-right: auto;
        }
        @media screen and (max-width: 320px) {
            margin-left: var(--mb-1);
            margin-right: var(--mb-1);
        }
    }

    .grid {
        display: grid;
    }

    .section {
        padding: 4rem 0 1rem;

        @media screen and (min-width: 767px) {
            padding: 0rem 0 0rem;
        }
    }

    .section__title {
        position: relative;
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-3);
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;

        @media screen and (min-width: 992px) {
            font-size: var(--h2-font-size);
        }
    }

    .section__title::before {
    content: '';
        position: absolute;
        top: -1rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 67px;
        height: 1px;
        background-color: ${(props) => props.theme.firstColor};
    }

    .cart, 
    .cart.action {
        background-color:  ${(props) => props.theme.bodyColor};
    }


    /*=============== BUTTONS ===============*/
    .button {
        display: inline-block;
        background-color: ${(props) => props.theme.buttonColor};
        color: #FFF;
        padding: 1.25rem 2rem;
        font-weight: var(--font-medium);
        transition: .3s;
    }

    .button:hover {
        background-color: ${(props) => props.theme.buttonColorAlt};
    }

    .button--gray {
        background-color: ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.titleColor};
    }

    .button--gray:hover {
        background-color: ${(props) => props.theme.buttonHover};
    }

    .button--small {
        padding: 1rem 1.5rem;
    }



    /*=============== THEME ===============*/
    /*========== Variables Dark theme ==========*/
    .dark-theme {
        --first-color: hsl(31, 76%, 74%);
        --button-color: hsl(0, 0%, 24%);
        --button-color-alt: hsl(0, 0%, 28%);
        --title-color: hsl(0, 0%, 95%);
        --text-color: hsl(0, 0%, 75%);
        --body-color: hsl(0, 0%, 12%);
        --container-color: hsl(0, 0%, 16%);
        --border-color: hsl(0, 0%, 20%);
    }

    /*========== Button Dark/Light ==========*/
    .change-theme {
        color: ${(props) => props.theme.titleColor};
        font-size: 1.25rem;
        cursor: pointer;
    }

    /*========== 
        Color changes in some parts of 
        the website, in dark theme 
    ==========*/
    .dark-theme .change-theme,
    .dark-theme .nav__toggle,
    .dark-theme .nav__shop,
    .dark-theme .button--gray {
        color: ${(props) => props.theme.darkNav};
    }

    .dark-theme .scroll-header {
        box-shadow: 0 1px 4px ${(props) => props.theme.darkBoxShadow};
    }

    .scroll-header .change-theme,
    .scroll-header .nav__toggle,
    .scroll-header .nav__shop {
        color: ${(props) => props.theme.titleColor};
    }
`;

export default GlobalStyle;

export { breakpoints };