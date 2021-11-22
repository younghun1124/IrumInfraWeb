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
                <Route path='' element={<Server />} />
            </Routes>
        </>
    );
};

export default Hardware;

const Server = () => {
    const [scrollHeight, setScrollHeight] = useState('0px');
    const frame = useRef();

    return (
        <div>
            <iframe
                title='title'
                url='https://www.op.gg/'
                frameBorder='0'
                id='myId'
                width=' 100%'
                height={scrollHeight}
                display='initial'
                ref={frame}
                onload={() => {
                    // const obj = frame.current;
                    console.log('하이');
                    // setScrollHeight(
                    //     obj.contentWindow.document.body.scrollHeight + 'px',
                    // );
                }}
            />
        </div>
    );
};
