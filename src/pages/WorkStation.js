import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';
import { HeadThumbnail } from '../styles/CustomStyled';

const { Title, Text, Paragraph } = Typography;
const WorkStation = () => {
    return (
        <>
            <Routes>
                <Route
                    path='tower'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/thinkstation.webp' />
                    }
                />
                <Route
                    path='mobile'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/p17.webp' />
                    }
                />
            </Routes>
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <Routes>
                        <Route
                            path='tower'
                            element={
                                <ModelList jsonFileName={'Workstation.json'} />
                            }
                        />
                        <Route
                            path='mobile'
                            element={
                                <ModelList
                                    jsonFileName={'Mobile_Workstation.json'}
                                />
                            }
                        />
                    </Routes>
                </div>
            </InnerContainer>
        </>
    );
};

export default WorkStation;
