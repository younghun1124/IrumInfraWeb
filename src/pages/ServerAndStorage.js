import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';
import { HeadThumbnail } from '../styles/CustomStyled';
import { SubNav } from '../styles/CustomStyled';

const { Title, Text, Paragraph } = Typography;
const Hardware = () => {
    return (
        <>
            <Routes>
                <Route
                    path='server'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/server.jpg' />
                    }
                />
                <Route
                    path='storage'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/de.webp' />
                    }
                />
            </Routes>
            <InnerContainer>
                <SubNav>
                    <NavLink to='server'>서버</NavLink>
                    <NavLink to='storage'>스토리지</NavLink>
                </SubNav>
            </InnerContainer>
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <Routes>
                        <Route
                            path='server'
                            element={
                                <ModelList jsonFileName={'serverList.json'} />
                            }
                        />
                        <Route
                            path='storage'
                            element={
                                <ModelList jsonFileName={'Storage.json'} />
                            }
                        />
                    </Routes>
                </div>
            </InnerContainer>
        </>
    );
};

export default Hardware;
