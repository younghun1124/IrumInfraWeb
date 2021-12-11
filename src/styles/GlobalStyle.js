import { Global, css, useTheme } from '@emotion/react';

const GlobalStyle = () => {
    const theme = useTheme();
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
        a {
            text-decoration: none;
            color: inherit;
        }

        a[class*='active'] {
            color: ${theme.colors.antdBlue};
        }
    `;

    console.log(style);

    return <Global styles={style} />;
};
export default GlobalStyle;
