import React from 'react';
import Fade from 'react-reveal/Fade';

import { Row, Col, Typography } from 'antd';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
const { h2 } = Typography;

function BusinessArea() {
    return (
        <FlexDiv>
            <div css={FlexCenter}>
                <h2 level={4}>하드웨어 사업</h2>
                <StyledImg src='/hw.jpg' alt='하드웨어 사업' />
                <p>강력한 성능의 Rack & Tower Server</p>
                <p>관리가 용이하고 확장이 간편한 Storage</p>
                <p>압도적 성능과 내구성의 Workstation</p>
            </div>
            <div css={FlexCenter}>
                <h2 level={4}>솔루션 사업</h2>
                <StyledImg src='/sol2.png' alt='하드웨어 사업' />
                <p>강력한 성능의 모바일 워크스테이션 ThinkPad</p>
                <p>압도적인 성능과 내구성을 지닌 ThinkStation</p>
            </div>
            <div css={FlexCenter}>
                <h2 level={4}>Contact us</h2>
                <StyledImg src='/call center.png' alt='하드웨어 사업' />
                <p>TEL. 02-8577-008 FAX. 02-8577-009</p>
                <p>E-mail. mhjung@iruminfra.co.kr</p>
            </div>
        </FlexDiv>
    );
}
export default BusinessArea;

const FlexDiv = styled.div`
    display: flex;
    ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
    }
`;
const FlexCenter = css`
    display: flex;
    flex-basis: 33%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;

const StyledImg = styled.img`
    width: 100%;
`;
