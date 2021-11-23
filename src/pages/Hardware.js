import React, { useState, useRef } from 'react';

import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import Iframe from 'react-iframe';
const { Title, Text, Paragraph } = Typography;
const Hardware = () => {
    return (
        <>
            <Routes>
                <Route path='server' element={<FrameWrapper />} />
                <Route path='storage' element={<FrameWrapper />} />
                <Route path='workstation' element={<FrameWrapper />} />
                <Route path='pc' element={<FrameWrapper />} />
            </Routes>
        </>
    );
};

export default Hardware;

function FrameWrapper() {
    const ref = useRef();
    const [height, setHeight] = useState('0px');
    const onLoad = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px');
    };
    return (
        <iframe
            title='title'
            ref={ref}
            onLoad={onLoad}
            id='myFrame'
            src='/iframe/hardware/test.htm'
            width='100%'
            height={height}
            scrolling='no'
            frameBorder='0'
            style={{
                width: '100%',
                overflow: 'auto',
            }}
        ></iframe>
    );
}
