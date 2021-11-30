import React, { useState } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { Routes, Route } from 'react-router-dom';
import { Typography, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import BusinessArea from '../components/BusinessArea';
import { InnerContainer } from '../styles/CustomStyled';
const { Title, Text, Paragraph } = Typography;
const Intro = () => {
    return (
        <>
            <MainImg />
            <Divider />
            <InnerContainer>
                <SubNav />
            </InnerContainer>
            <Divider />
            <InnerContainer>
                <Routes>
                    <Route path='welcome' element={<Welcome />} />
                    <Route path='businessArea' element={<BusinessArea />} />
                    <Route path='organization' element={<Organization />} />
                </Routes>
            </InnerContainer>
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

const SubNav = () => {
    const SubNavDiv = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-around;
    `;
    return (
        <SubNavDiv>
            <NavLink
                className={({ isActive }) =>
                    'nav-link' + (isActive ? ' activated' : '')
                }
                to='welcome'
            >
                인사말
            </NavLink>
            <NavLink to='businessArea'>사업영역</NavLink>
            <NavLink to='organization'>조직도</NavLink>
            <NavLink to='partners'>주요협력사</NavLink>
            <NavLink to='location'>찾아오시는 길</NavLink>
        </SubNavDiv>
    );
};

const Organization = () => {
    return (
        <FlexCenterDiv>
            <Fade bottom cascade>
                <div>
                    <Title
                        style={{ textAlign: 'center', marginBottom: '50px' }}
                        level={2}
                    >
                        "영업, 기술 조직의 신속한 협력으로 고객 만족에 최선을
                        다하고 있습니다."
                    </Title>
                    <img src='/Intro/Organization.png' alt='조직도' />
                </div>
            </Fade>
        </FlexCenterDiv>
    );
};
const Welcome = () => {
    return (
        <FlexCenterDiv>
            <Fade bottom cascade>
                <div>
                    <Title
                        style={{ textAlign: 'center', marginBottom: '50px' }}
                        level={2}
                    >
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
            </Fade>
        </FlexCenterDiv>
    );
};
const FlexCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 100px;
    line-height: 50px;
`;
