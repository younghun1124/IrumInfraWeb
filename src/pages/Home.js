import React from 'react';
import { Carousel, Typography, Divider, Row, Col, Space, Card } from 'antd';
import BuisnessArea from '../components/BusinessArea';
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
                    title='㈜ 이룸인프라'
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

            <Row style={{ height: '400px' }} justify='center' align='middle'>
                <Title level={2}>
                    <Fade cascade right big>
                        고객의 만족을 최우선으로 생각합니다
                    </Fade>
                </Title>
            </Row>

            <Divider />

            <InnerContainer>
                <Slide bottom cascade>
                    <Title style={{ textAlign: 'center' }} level={2}>
                        이룸인프라는
                    </Title>
                    <Row wrap={true} justify='space-between'>
                        <Col css={FlexCenter} span={6}>
                            <QuestionCircleOutlined style={IconStyle} />
                            <p>고객을 위해 고민합니다</p>
                        </Col>
                        <Col css={FlexCenter} span={6}>
                            <RiseOutlined style={IconStyle} />
                            <p>고객과 함께 성장합니다</p>
                        </Col>
                        <Col css={FlexCenter} span={6}>
                            <SyncOutlined style={IconStyle} />
                            <p>고객의 믿음에 보답합니다</p>
                        </Col>
                        <Col css={FlexCenter} span={6}>
                            <TrophyOutlined style={IconStyle} />
                            <p>고객과 함께 1등 하겠습니다</p>
                        </Col>
                        <Divider />
                    </Row>
                </Slide>
            </InnerContainer>

            <InnerContainer>
                <BuisnessArea />
            </InnerContainer>
            <Divider />
            <InnerContainer>
                <Title level={2}>Business Partner</Title>
                <Paragraph>파트너들과 최선을 다하고 있습니다.</Paragraph>
            </InnerContainer>
        </>
    );
};
const IconStyle = {
    fontSize: '50px',
};

const ContainerDiv = styled.div`
    margin: auto;
    max-width: 1140px;
`;

const CarouselUnit = ({ src, children, title, text }) => {
    const CarouselDiv = styled.div`
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 540px;
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Text = styled.div`
        margin: 10px;
        font-size: 20px;
    `;
    const Title = styled.div`
        margin: 10px;
        font-size: 70px;
    `;
    return (
        <CarouselDiv>
            <div>
                <Text>{text}</Text>
                <Title>{title}</Title>
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
`;
export default Home;
