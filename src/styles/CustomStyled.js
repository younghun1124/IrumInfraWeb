import styled from '@emotion/styled';
import theme from './theme';
import { NavLink } from 'react-router-dom';

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
        height: 700px;
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 6rem;
    `;
    return <Div></Div>;
}

export const NavLinkStyle = styled(NavLink)`
    display: inline;
    color: white;
    &:hover {
        color: #cfad65;
    }
`;

const activeStyle = {
    color: '#cfad65',
};
