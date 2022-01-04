import styled from '@emotion/styled';
import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

export const A = styled.a`
    color: #e31d1a;
`;

export const LinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const StyledLi = styled.li`
    height: 100%;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.cardGray};
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, auto));

    gap: 1rem;
`;
export const ModelImg = styled.img`
    width: 100%;
`;
export const ModelCard = styled.div`
    padding: 10%;
`;
export const HeadTitle = styled(Title)`
    text-align: center;
`;
