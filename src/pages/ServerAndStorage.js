import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';
import { HeadThumbnail } from '../styles/CustomStyled';
import { HeadTitle } from '../components/ModelList/ModelListElement';
const ServerAndStorage = () => {
    return (
        <>
            <Routes>
                <Route path='server' element={<Server />} />
                <Route path='storage' element={<Storage />} />
            </Routes>
        </>
    );
};

const Server = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/server.jpg' />
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        중소기업에서 엔터프라이즈 고객까지 탁월한 가치, 유연성,
                        최고의 효율성을 갖춘 ThinkSystem
                    </HeadTitle>
                    <ModelList jsonFileName={'serverList.json'} />
                </div>
            </InnerContainer>
        </>
    );
};
const Storage = () => {
    return (
        <>
            <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/de.webp' />
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <HeadTitle>
                        관리성, 확장성이 뛰어난 엔터프라이즈급 스토리지 솔루션
                    </HeadTitle>
                    <ModelList jsonFileName={'storage.json'} />
                </div>
            </InnerContainer>
        </>
    );
};

export default ServerAndStorage;
