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
                <div style={{ width: '100%' }}>
                    <Routes>
                        <Route
                            path='server'
                            element={
                                <ModelList jsonFileName={'serverList.json'} />
                            }
                        />
                        {/* <Route path='storage' element={< />} />
                        <Route path='workstation' element={< />} />
                        <Route path='pc' element={< />} /> */}
                    </Routes>
                </div>
            </InnerContainer>
        </>
    );
};

export default Hardware;
