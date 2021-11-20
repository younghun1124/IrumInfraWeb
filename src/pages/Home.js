import React from 'react';
import { Carousel, Typography, Divider, Row, Col, Space, Card } from 'antd';
import styled from '@emotion/styled';
import {
    QuestionCircleOutlined,
    RiseOutlined,
    SyncOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const Home = () => {
    const contentStyle = {
        height: '770px',
        color: '#fff',
        lineHeight: '770px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                {/* <CarouselUnit /> */}
            </Carousel>
            <Title level={2}>고객의 만족을 최우선으로 생각합니다</Title>
            <Divider />
            <Title level={2}>이룸인프라는</Title>
            <Row justify='space-between'>
                <Col span={6}>
                    <QuestionCircleOutlined style={IconStyle} />
                    고객을 위해 고민합니다
                </Col>
                <Col span={6}>
                    <RiseOutlined style={IconStyle} />
                    고객과 함께 성장합니다
                </Col>
                <Col span={6}>
                    <SyncOutlined style={IconStyle} />
                    고객의 믿음에 보답합니다
                </Col>
                <Col span={6}>
                    <TrophyOutlined style={IconStyle} />
                    고객과 함께 1등 하겠습니다
                </Col>
            </Row>
            <Divider />
            <Row justify='space-between'>
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
    color: '#f3cca3',
};
const CarouselUnit = ({ src }) => {
    const contentStyle = {
        height: '540px',
        color: '#fff',
        lineHeight: '540px',
        textAlign: 'center',
    };
    return (
        <div
            style={{
                ...contentStyle,
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Title level={4}>고객과 미래를 함께하는</Title>
            <Title level={2}>{`(주) 이룸인프라`}</Title>
        </div>
    );
};
export default Home;

const StyledImg = styled.img`
    width: 300px;
`;
