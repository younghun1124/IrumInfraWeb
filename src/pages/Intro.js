import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;
const Intro = () => {
    return (
        <>
            <MainImg />
            <Routes>
                <Route path='welcome' element={<Welcome />} />
            </Routes>
        </>
    );
};
export default Intro;

const MainImg = styled.div`
    background-image: url(/Intro/building2.png);
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Welcome = () => {
    return (
        <FlexCenterDiv>
            <div>
                <Title style={{ textAlign: 'center' }} level={2}>
                    "고객의 만족을 최우선으로 생각 합니다"
                </Title>
                <Paragraph>
                    ㈜이룸인프라 홈페이지를 방문해 주셔서 감사합니다.
                </Paragraph>
                <Paragraph>
                    당사는 풍부한 경험과 기술력을 바탕으로 고객의 비즈니스
                    요구에 최적화된 IT인프라를 제공하고 있습니다.
                </Paragraph>
                <Paragraph>
                    도전과 열정으로 IT의 미래를 함께 하도록 노력하겠습니다.
                </Paragraph>
                <Paragraph style={{ textAlign: 'right' }}>
                    ㈜이룸인프라 임직원 일동
                </Paragraph>
            </div>
        </FlexCenterDiv>
    );
};
const FlexCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;
