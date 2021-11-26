import React from 'react';
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';
const Partners = () => {
    return (
        <Row wrap={true} gutter={16} justify='space-between'>
            <Fade bottom cascade>
                <Col css={FlexCenter} span={8}>
                    <Title level={4}>하드웨어 사업</Title>
                    <StyledImg src='/hw.jpg' alt='하드웨어 사업' />
                    <Paragraph>
                        강력한 성능의 Rack & Tower Server 관리가 용이하고 확장이
                        간편한 Storage 압도적 성능과 내구성의 Workstation
                    </Paragraph>
                </Col>
            </Fade>
            <Fade bottom cascade>
                <Col css={FlexCenter} span={8}>
                    <Title level={4}>솔루션 사업</Title>
                    <StyledImg src='/sol2.png' alt='하드웨어 사업' />
                    <Paragraph>
                        강력한 성능의 모바일 워크스테이션 ThinkPad 압도적인
                        성능과 내구성을 지닌 ThinkStation
                    </Paragraph>
                </Col>
            </Fade>
            <Fade bottom cascade>
                <Col css={FlexCenter} span={8}>
                    <Title level={4}>Contact us</Title>
                    <StyledImg src='/call center.png' alt='하드웨어 사업' />
                    <Paragraph>
                        TEL. 02-8577-008 FAX. 02-8577-009 E-mail.
                        mhjung@iruminfra.co.kr
                    </Paragraph>
                </Col>
            </Fade>
        </Row>
    );
};
export default Partners;
