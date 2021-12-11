import React, { useState } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import BusinessArea from '../components/BusinessArea';
import Partners from '../components/Partners';
import { InnerContainer } from '../styles/CustomStyled';
import { SubNav, HeadThumbnail } from '../styles/CustomStyled';

const { Title, Paragraph } = Typography;
const Intro = () => {
    return (
        <>
            <InnerContainer>
                <HeadThumbnail src='/Intro/serverRoom.jpg' />
            </InnerContainer>

            <InnerContainer>
                <SubNav>
                    <NavLink to='welcome'>인사말</NavLink>
                    <NavLink to='businessArea'>사업영역</NavLink>
                    <NavLink to='organization'>조직도</NavLink>
                    <NavLink to='partners'>주요협력사</NavLink>
                    <NavLink to='location'>찾아오시는 길</NavLink>
                </SubNav>
            </InnerContainer>

            <InnerContainer>
                <Routes>
                    <Route path='welcome' element={<Welcome />} />
                    <Route path='businessArea' element={<BusinessArea />} />
                    <Route path='organization' element={<Organization />} />
                    <Route path='partners' element={<Partners />} />
                    <Route path='location' element={<Location />} />
                </Routes>
            </InnerContainer>
        </>
    );
};
export default Intro;

const MainImg = styled.div`
    background-image: url(/Intro/serverRoom.jpg);
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
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

const Location = () => {
    return (
        <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1582.9524392867781!2d126.896063!3d37.486571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x182a672f4f7a36d2!2z7Jqw66a8ZWJpeuyEvO2EsDLssKg!5e0!3m2!1sko!2skr!4v1638255985007!5m2!1sko!2skr'
            width='100%'
            height='450'
            style={{ border: 0, margin: '10px' }}
            allowfullscreen=''
            loading='lazy'
        ></iframe>
    );
};
const FlexCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-top: 50px;
    line-height: 50px;
`;
