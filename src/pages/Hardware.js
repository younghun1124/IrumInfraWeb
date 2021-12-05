import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';

const { Title, Text, Paragraph } = Typography;
const Hardware = () => {
    return (
        <>
            <InnerContainer>
                <div style={{ width: '100%', padding: '2rem' }}>
                    <Routes>
                        <Route
                            path='/server'
                            element={
                                <ModelList jsonFileName={'serverList.json'} />
                            }
                        />
                        <Route
                            path='/storage'
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
