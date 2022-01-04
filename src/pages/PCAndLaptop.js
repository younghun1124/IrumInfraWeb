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
                <Route path='thinkCentre' element={<ThinkCentre />} />
                <Route path='thinkPad' element={<ThinkPad />} />
            </Routes>
        </>
    );
};
const ThinkCentre = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/pc.webp' />
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        우수한 성능, 탄탄한 안정성, 친환경 데스크탑 PC
                    </HeadTitle>
                    <ModelList jsonFileName={'PC.json'} />
                </div>
            </InnerContainer>
        </>
    );
};
const ThinkPad = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/thinkpad-mobile.webp' />
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        오랜전통을 자랑하는 혁명적 노트북 ThinkPad
                    </HeadTitle>

                    <ModelList jsonFileName={'Notebook.json'} />
                </div>
            </InnerContainer>
        </>
    );
};
export default WorkStation;
