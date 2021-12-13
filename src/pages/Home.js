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
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { InnerContainer } from '../styles/CustomStyled';

const { Title, Paragraph, Text } = Typography;
const Home = () => {
    const theme = useTheme();
    return (
        <>
            <Carousel
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
            </Carousel>

            <div
                css={css`
                    width: 100%;
                    background-color: #f5f5f5;
                `}
                justify='space-between'
            >
                <InnerContainer
                    css={css`
                        flex-direction: column;
                        min-height: 400px;
                        padding: 100px 0 100px 0;
                        justify-content: space-around;
                        min-height: 900px;
                    `}
                >
                    <Zoom>
                        <h2
                            css={css`
                                color: #037dcc;
                                text-align: center;
                                margin-bottom: 0.5em;

                                font-weight: 600;
                                font-size: 5rem;
                                line-height: 1.23;
                            `}
                            level={1}
                        >
                            이룸인프라는
                        </h2>
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
                </InnerContainer>
            </div>

            <div>
                <Divider orientation='center'>
                    <Title level={1}>Business Area</Title>
                </Divider>
                <InnerContainer
                    css={css`
                        padding-top: 60px;
                        padding-bottom: 60px;
                    `}
                >
                    <BuisnessArea />
                </InnerContainer>
            </div>
            <Divider orientation='center'>
                <Title level={1}>Business Partner</Title>
            </Divider>
            <InnerContainer>
                <div>
                    <Title level={3}>파트너들과 최선을 다하고 있습니다.</Title>
                    <Partners />
                </div>
            </InnerContainer>
        </>
    );
};
const IconStyle = {
    fontSize: '7rem',
};

const Card = styled.div`
    width: 100%;
    display: flex;
    min-height: 200px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
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

        height: 350px;
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
