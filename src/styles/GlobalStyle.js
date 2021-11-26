import { Global, css } from '@emotion/react';

const style = css`
    * {
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-size: 1.6rem;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
