import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';
import { HeadThumbnail } from '../styles/CustomStyled';

const { Title, Text, Paragraph } = Typography;
const Solution = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/vmware.png' />
            {/* <Routes>
                <Route
                    path='/nutanix'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/vmware.png' />
                    }
                />
                <Route
                    path='/vmware'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/de.webp' />
                    }
                />
            </Routes> */}
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
            <p>
                Nutanix는 서버, 스토리지, 가상화일체형의 하이퍼컨버지드를 넘어
                프라이빗 클라우드 인프라로 활용 할수 있도록 셀프서비스 포탈,
                블록/파일 스토리지서비스, 운영자동화 등의 클라우드 기술을
                지족적으로 출시하고 있습니다.{' '}
            </p>
            <img src='/Solution/nutanix.png' alt='nutanix' />
        </>
    );
}
function Vmware() {
    return <img src='/Solution/vmware.png' alt='vmware' />;
}

export default Solution;
