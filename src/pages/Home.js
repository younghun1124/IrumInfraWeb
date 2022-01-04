import React from 'react';
import { Carousel, Typography, Divider, Row } from 'antd';
import BuisnessArea from '../components/BusinessArea';
import Partners from '../components/Partners';
import styled from '@emotion/styled';
import {
    QuestionCircleOutlined,
    RiseOutlined,
    SyncOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
/** @jsxImportSource @emotion/react */
import { jsx, css, useTheme } from '@emotion/react';
import { Fade } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { InnerContainer, InnerPaddingContainer } from '../styles/CustomStyled';
import HeroSection from '../components/HeroSection';
const { Title, Paragraph, Text } = Typography;
const Home = () => {
    return (
        <>
            {/* <Carousel
                effect='fade'
                dots={false}
                autoplay
                css={css`
                    margin: auto;
                `}
            >
                <CarouselUnit
                    src='/Home/Intro-idc.jpg'
                    text='고객과 미래를 함께하는'
                    title='(주) 이룸인프라'
                />
                <CarouselUnit
                    src='/Home/Intro-idc2.jpg'
                    text='Lenovo Server Storage NetWork'
                    title='ThinkSystem'
                />
                <CarouselUnit
                    src='/Home/Intro-idc3.jpg'
                    text='Lenovo Workstation'
                    title='ThinkStation'
                />
            </Carousel> */}
            <HeroSection />

            <div
                css={css`
                    width: 100%;
                    background-color: #f5f5f5;
                `}
                justify='space-between'
            >
                <InnerPaddingContainer
                    css={css`
                        flex-direction: column;
                        min-height: 400px;
                        gap: 100px;
                        justify-content: space-around;
                        min-height: 900px;
                    `}
                >
                    <Zoom>
                        <Title
                            css={css`
                                color: #037dcc !important;
                                text-align: center;
                            `}
                            level={1}
                        >
                            이룸인프라는
                        </Title>
                    </Zoom>
                    <Title level={2}>
                        <Fade cascade right>
                            고객의 만족을 최우선으로 생각합니다
                        </Fade>
                    </Title>
                    <div
                        css={css`
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            flex-wrap: wrap;
                        `}
                    >
                        <Fade left>
                            <Card>
                                <QuestionCircleOutlined
                                    style={{ ...IconStyle, color: 'dimgray' }}
                                />
                                <Span>고객을 위해 고민합니다</Span>
                            </Card>
                        </Fade>
                        <Fade top>
                            <Card>
                                <RiseOutlined
                                    style={{ ...IconStyle, color: 'crimson' }}
                                />
                                <Span>고객과 함께 성장합니다</Span>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card>
                                <SyncOutlined
                                    style={{ ...IconStyle, color: 'royalblue' }}
                                />
                                <Span>고객의 믿음에 보답합니다</Span>
                            </Card>
                        </Fade>
                        <Fade right>
                            <Card>
                                <TrophyOutlined
                                    style={{ ...IconStyle, color: 'GoldenRod' }}
                                />
                                <Span
                                    css={css`
                                        color: #191f28;
                                    `}
                                >
                                    고객과 함께 1등 하겠습니다
                                </Span>
                            </Card>
                        </Fade>
                    </div>
                </InnerPaddingContainer>
            </div>

            <GradientBg>
                <InnerPaddingContainer>
                    <div>
                        <Fade bottom>
                            <Title level={1}>Business Area</Title>
                            <BuisnessArea />
                        </Fade>
                    </div>
                </InnerPaddingContainer>
                <InnerPaddingContainer>
                    <div>
                        <Fade bottom>
                            <Title level={1}>Business Partner</Title>
                            <Title style={{ color: '#8b95a1' }} level={3}>
                                파트너들과 최선을 다하고 있습니다.
                            </Title>
                            <Partners />
                        </Fade>
                    </div>
                </InnerPaddingContainer>
            </GradientBg>
        </>
    );
};
const IconStyle = {
    fontSize: '7rem',
};

const GradientBg = styled.div``;

const Card = styled.div`
    width: 270px;
    display: flex;
    min-height: 200px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 2.6rem;
    transition: all 0.1s linear;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
    &:hover {
        transform: scale(1.1);
    }
`;

const Span = styled.span`
    color: #191f28;
    width: 100%;
    font-size: 1.8rem;
`;
const FlexCenter = css`
    display: flex;

    min-height: 150px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;
const CarouselUnit = ({ src, children, title, text }) => {
    const CarouselDiv = styled.div`
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 770px;
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 6rem;
        ${({ theme }) => theme.device.mobile} {
            font-size: 4rem;
        }
    `;

    const Text = styled.div`
        margin: 10px;
        font-size: 0.4em;
    `;
    const Title = styled.div`
        margin: 10px;
        font-size: 1em;
    `;
    return (
        <CarouselDiv>
            <div>
                <Text>{text}</Text>
                <Title
                    css={css`
                        font-weight: 600;
                    `}
                >
                    {title}
                </Title>
            </div>
        </CarouselDiv>
    );
};

export default Home;
