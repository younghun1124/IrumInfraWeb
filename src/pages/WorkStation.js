import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeadTitle } from '../components/ModelList/ModelListElement';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';
import { HeadThumbnail } from '../styles/CustomStyled';

const WorkStation = () => {
    return (
        <>
            <Routes>
                <Route path='tower' element={<Tower />} />
                <Route path='mobile' element={<Mobile />} />
            </Routes>
        </>
    );
};
const Tower = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/thinkstation.webp' />

            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        산업 전반의 전문가를 위한 고성능, 고가용성 ThinkStation
                    </HeadTitle>
                    <ModelList jsonFileName={'Workstation.json'} />
                </div>
            </InnerContainer>
        </>
    );
};
const Mobile = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/p17.webp' />

            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        노트북의 휴대성과 워크스테이션의 성능을 결합한 ThinkPad
                        P 시리즈 모바일 워크스테이션
                    </HeadTitle>
                    <ModelList jsonFileName={'Mobile_Workstation.json'} />
                </div>
            </InnerContainer>
        </>
    );
};
export default WorkStation;
<ModelList jsonFileName={'Mobile_Workstation.json'} />;
