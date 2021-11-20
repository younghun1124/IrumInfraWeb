import React from 'react';
import { Carousel, Typography, Divider, Row, Col, Space, Card } from 'antd';
import styled from '@emotion/styled';
import {
    QuestionCircleOutlined,
    RiseOutlined,
    SyncOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const Home = () => {
    return (
        <>
            <Carousel autoplay>
                {/* <CarouselUnit src='Home/Intro-idc.jpg'></CarouselUnit> */}

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

            <Title level={2}>고객의 만족을 최우선으로 생각합니다</Title>
            <Divider />
            <Title level={2}>이룸인프라는</Title>
            <Row justify='space-between'>
                <Col span={6}>
                    <QuestionCircleOutlined style={IconStyle} />

                    <p>고객을 위해 고민합니다</p>
                </Col>
                <Col span={6}>
                    <RiseOutlined style={IconStyle} />
                    <p>고객과 함께 성장합니다</p>
                </Col>
                <Col span={6}>
                    <SyncOutlined style={IconStyle} />
                    <p>고객의 믿음에 보답합니다</p>
                </Col>
                <Col span={6}>
                    <TrophyOutlined style={IconStyle} />
                    <p>고객과 함께 1등 하겠습니다</p>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16} justify='space-between'>
                <Col span={8}>
                    <Title level={4}>하드웨어 사업</Title>
                    <StyledImg src='hw.jpg' alt='하드웨어 사업' />
                    <Paragraph>
                        강력한 성능의 Rack & Tower Server 관리가 용이하고 확장이
                        간편한 Storage 압도적 성능과 내구성의 Workstation
                    </Paragraph>
                </Col>
                <Col span={8}>
                    <Title level={4}>솔루션 사업</Title>
                    <StyledImg src='sol2.png' alt='하드웨어 사업' />
                    <Paragraph>
                        강력한 성능의 모바일 워크스테이션 ThinkPad 압도적인
                        성능과 내구성을 지닌 ThinkStation
                    </Paragraph>
                </Col>

                <Col span={8}>
                    <Title level={4}>Contact us</Title>
                    <StyledImg src='call center.png' alt='하드웨어 사업' />
                    <Paragraph>
                        TEL. 02-8577-008 FAX. 02-8577-009 E-mail.
                        mhjung@iruminfra.co.kr
                    </Paragraph>
                </Col>
            </Row>
            <Divider />
            <Title level={2}>Business Partner</Title>
            <Paragraph>파트너들과 최선을 다하고 있습니다.</Paragraph>
        </>
    );
};
const IconStyle = {
    fontSize: '50px',
};

const CarouselUnit = ({ src, children, title, text }) => {
    console.log(children);
    const CarouselDiv = styled.div`
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 540px;
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: fit;
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
export default Home;

const StyledImg = styled.img`
    width: 300px;
`;
