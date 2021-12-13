import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography, Divider } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import styled from '@emotion/styled';
import { HeadThumbnail } from '../styles/CustomStyled';

const { Title, Text, Paragraph } = Typography;
const Solution = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/vmware.png' />

            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <Routes>
                        <Route path='/nutanix' element={<Nutanix />} />
                        <Route path='/vmware' element={<Vmware />} />
                    </Routes>
                </div>
            </InnerContainer>
        </>
    );
};

function Nutanix() {
    return (
        <>
            <LogoImg src='/Intro/Partners/nutanix.png' />
            <Divider></Divider>
            <p>
                Nutanix는 서버, 스토리지, 가상화일체형의 하이퍼컨버지드를 넘어
                프라이빗 클라우드 인프라로 활용 할수 있도록 셀프서비스 포탈,
                블록/파일 스토리지서비스, 운영자동화 등의 클라우드 기술을
                지속적으로 출시하고 있습니다.
            </p>
            <ul>
                <li>구축 용이성</li>
                <li>무중단 인프라 자원</li>
                <li>효율성 관리 편의성</li>
                <li>비용 절감</li>
                <li>HCI ++</li>
                <li>인프라 관리의 단순화</li>
            </ul>
            <img
                style={{ width: '100%' }}
                src='/Solution/nutanix.png'
                alt='nutanix'
            />
        </>
    );
}
const LogoImg = styled.img`
    width: 40%;
`;
function Vmware() {
    return (
        <>
            <LogoImg src='/Intro/Partners/vmware.png' />
            <Divider></Divider>
            <p>
                VMware는 대표적인 가상화 소프트웨어 가장 폭넓고 가장 성숙한
                에코시스템을 지원합니다
            </p>
            <ul>
                <li>운영의 간편화</li>
                <li>비용 감소</li>
                <li>유연성</li>
                <li>민첩성</li>
                <li>비즈니스 가치 증대</li>
                <li>재해 복구 시간 절약</li>
                <li>인프라 관리의 단순화</li>
            </ul>
            <img
                style={{ width: '100%' }}
                src='/Solution/vmware.png'
                alt='vmware'
            />
        </>
    );
}

export default Solution;
