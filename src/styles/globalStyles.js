import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
	--colorColorPrimary: #BF0404;
	--colorColorSecondary: #F2C288;
	--colorGrey600: #333333;
	--colorGrey300: #828282;
	--colorGrey100: #e0e0e0;
	--colorNegative: #e60000;
	--colorWarning: #ffcd07;
	--colorSucess: #168821;
	--colorInformation: #155bcb;
    --font-primary: 'Inter', sans-serif;
    }

    body {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input, textarea{
        border: 0;
        background: transparent;
    }

    .toast-sucess,
    .toast-error {
        z-index: 200;
    }

    .toast-sucess {
        background-color: var(--colorSucess);
        color: #ffffff;
        font-family: 'Inter', sans-serif;
    }

    .toast-sucess img,
    .toast-sucess svg {
        fill: #ffffff;
    }

     .toast-error {
        background-color: #e60000;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
    }

    .toast-error img,
    .toast-error svg {
        fill: #ffff;
    }
`;
