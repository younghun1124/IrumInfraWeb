import React from 'react';
import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';

export function SubNav() {
    const SubNavDiv = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-around;
    `;

    return (
        <SubNavDiv>
            <NavLink to='welcome'>인사말</NavLink>
            <NavLink to='businessArea'>사업영역</NavLink>
            <NavLink to='organization'>조직도</NavLink>
            <NavLink to='partners'>주요협력사</NavLink>
            <NavLink to='location'>찾아오시는 길</NavLink>
        </SubNavDiv>
    );
}
export const NavLink = styled(BaseNavLink)`
    text-decoration: ${(props) => {
        console.log(props.style);
        return props.style
            ? (isActive) => (isActive ? 'underline' : 'none')
            : 'none';
    }};
    &:hover {
        text-decoration: underline;
    }
    &[class*='active'] {
        color: ;
    }
`;
