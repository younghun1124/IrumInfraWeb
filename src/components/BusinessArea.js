import React from 'react';
import Fade from 'react-reveal/Fade';

import { Row, Col, Typography } from 'antd';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
const { Title, Paragraph } = Typography;

function BusinessArea() {
    return (
        <Row
            justify='space-between'
            css={css`
                width: 100%;
            `}
        >
            <Fade cascade>
                <Col css={FlexCenter}>
                    <Title level={4}>하드웨어 사업</Title>
                    <StyledImg src='/hw.jpg' alt='하드웨어 사업' />
                    <Paragraph>강력한 성능의 Rack & Tower Server</Paragraph>
                    <Paragraph>관리가 용이하고 확장이 간편한 Storage</Paragraph>
                    <Paragraph>압도적 성능과 내구성의 Workstation</Paragraph>
                </Col>
            </Fade>
            <Fade cascade>
                <Col css={FlexCenter}>
                    <Title level={4}>솔루션 사업</Title>
                    <StyledImg src='/sol2.png' alt='하드웨어 사업' />
                    <Paragraph>
                        강력한 성능의 모바일 워크스테이션 ThinkPad
                    </Paragraph>
                    <Paragraph>
                        압도적인 성능과 내구성을 지닌 ThinkStation
                    </Paragraph>
                </Col>
            </Fade>
            <Fade cascade>
                <Col css={FlexCenter}>
                    <Title level={4}>Contact us</Title>
                    <StyledImg src='/call center.png' alt='하드웨어 사업' />
                    <Paragraph>TEL. 02-8577-008 FAX. 02-8577-009</Paragraph>
                    <Paragraph>E-mail. mhjung@iruminfra.co.kr</Paragraph>
                </Col>
            </Fade>
        </Row>
    );
}
export default BusinessArea;

const FlexCenter = css`
    display: flex;
    min-width: 100px;
    min-height: 150px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const StyledImg = styled.img`
    width: 300px;
`;
