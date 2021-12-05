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
