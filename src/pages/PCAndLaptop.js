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
                    path='thinkCentre'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/pc.webp' />
                    }
                />
                <Route
                    path='thinkPad'
                    element={
                        <HeadThumbnail src='http://www.iruminfra.co.kr/irum/top/thinkpad-mobile.webp' />
                    }
                />
            </Routes>
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <Routes>
                        <Route
                            path='thinkCentre'
                            element={<ModelList jsonFileName={'PC.json'} />}
                        />
                        <Route
                            path='thinkPad'
                            element={
                                <ModelList jsonFileName={'Notebook.json'} />
                            }
                        />
                    </Routes>
                </div>
            </InnerContainer>
        </>
    );
};

export default WorkStation;
