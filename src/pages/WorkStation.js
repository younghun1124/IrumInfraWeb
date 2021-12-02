import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import { InnerContainer } from '../styles/CustomStyled';
import ModelList from '../components/ModelList';

const { Title, Text, Paragraph } = Typography;
const WorkStation = () => {
    return (
        <>
            <InnerContainer>
                <div style={{ width: '100%' }}>
                    <Routes>
                        <Route
                            path='towerWorkstation'
                            element={
                                <ModelList jsonFileName={'WorkStation.json'} />
                            }
                        />
                        <Route
                            path='mobileWorkStation'
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
