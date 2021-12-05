import React from 'react';
import { Carousel, Typography, Divider, Row, Col, Space, Card } from 'antd';
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
import { jsx, css } from '@emotion/react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { InnerContainer } from '../styles/CustomStyled';

const { Title, Paragraph, Text } = Typography;
const Home = () => {
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
                    src='Home/Intro-idc.jpg'
                    text='고객과 미래를 함께하는'
                    title='(주) 이룸인프라'
                />

                <CarouselUnit
                    src='Home/Intro-idc2.jpg'
                    text='Lenovo Server Storage NetWork'
                    title='ThinkSystem'
                />

                <CarouselUnit
                    src='Home/Intro-idc3.jpg'
                    text='Lenovo Workstation'
                    title='ThinkStation'
                />
            </Carousel>
            <Row
                css={css`
                    min-height: 200px;
                    background-color: #f9fafb;
                `}
                justify='center'
                align='middle'
            >
                <Title level={2}>
                    <Fade cascade right>
                        고객의 만족을 최우선으로 생각합니다
                    </Fade>
                </Title>
            </Row>
            <InnerContainer
                css={css`
                    flex-direction: column;
                    min-height: 400px;
                `}
            >
                <Zoom>
                    <Title
                        css={css`
                            text-align: center;
                        `}
                        level={1}
                    >
                        이룸인프라는
                    </Title>
                </Zoom>
                <Row
                    wrap={true}
                    css={css`
                        width: 100%;
                        margin-top: 100px;
                    `}
                    justify='space-between'
                >
                    <Fade left>
                        <Col css={FlexCenter}>
                            <QuestionCircleOutlined
                                style={{ ...IconStyle, color: 'dimgray' }}
                            />
                            <Span>고객을 위해 고민합니다</Span>
                        </Col>
                    </Fade>
                    <Fade top>
                        <Col css={FlexCenter}>
                            <RiseOutlined
                                style={{ ...IconStyle, color: 'crimson' }}
                            />
                            <Span>고객과 함께 성장합니다</Span>
                        </Col>
                    </Fade>
                    <Fade bottom>
                        <Col css={FlexCenter}>
                            <SyncOutlined
                                style={{ ...IconStyle, color: 'royalblue' }}
                            />
                            <Span>고객의 믿음에 보답합니다</Span>
                        </Col>
                    </Fade>
                    <Fade right>
                        <Col css={FlexCenter}>
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
                        </Col>
                    </Fade>
                </Row>
            </InnerContainer>

            <div>
                <Divider orientation='center'>
                    <Title level={3}>Business Area</Title>
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
                <Title level={3}>Business Partner</Title>
            </Divider>
            <InnerContainer>
                <div>
                    <Paragraph>파트너들과 최선을 다하고 있습니다.</Paragraph>
                    <Partners />
                </div>
            </InnerContainer>
        </>
    );
};
const IconStyle = {
    fontSize: '50px',
};

const Span = styled.span`
    color: #191f28;

    font-size: 1.8rem;
`;

const CarouselUnit = ({ src, children, title, text }) => {
    const CarouselDiv = styled.div`
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

const FlexCenter = css`
    display: flex;
    min-width: 100px;
    min-height: 150px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;
export default Home;
