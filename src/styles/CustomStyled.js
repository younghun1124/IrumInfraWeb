import styled from '@emotion/styled';
import theme from './theme';

export const InnerContainer = styled.div`
    ${theme.common.flexCenter}
    max-width: 1140px;
    margin: auto;
`;

export function HeadThumbnail({ src }) {
    const Div = styled.div`
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 325px;
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        font-size: 6rem;
    `;
    return <Div></Div>;
}

export const SubNav = styled.div`
    /* position: relative; */
    bottom: 50px;
    height: 50px;
    background-color: #f2f2f2;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;
