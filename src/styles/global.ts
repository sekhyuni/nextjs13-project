import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
