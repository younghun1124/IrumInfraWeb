import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col, Typography } from 'antd';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
const { h2 } = Typography;

function BusinessArea() {
    return (
        <>
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
                    <StyledImg src='/sol.png' alt='하드웨어 사업' />
                    <p>서버, 스토리지, 가상화일체형의 하이퍼컨버지드 Nutanix</p>
                    <p>대표적인 가상화 소프트웨어 Vmware</p>
                </div>
                <div css={FlexCenter}>
                    <h2 level={4}>Contact us</h2>
                    <StyledImg src='/call center.png' alt='하드웨어 사업' />
                    <p>TEL. 02-857-7008 FAX. 02-857-7009</p>
                    <p>E-mail. mhjung@iruminfra.co.kr</p>
                </div>
            </FlexDiv>
        </>
    );
}
export default BusinessArea;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-around;
    ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
    }
`;
const FlexCenter = css`
    display: flex;
    flex-basis: 30%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    ${'' /* border: 1px solid gray; */}
    border-radius: 2rem;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
`;

const StyledImg = styled.img`
    width: 100%;
`;
