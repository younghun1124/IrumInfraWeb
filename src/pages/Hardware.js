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
                {/* <Route path='server' element={<ServerList />} /> */}
                {/* <Route path='storage' element={< />} />
                <Route path='workstation' element={< />} />
                <Route path='pc' element={< />} /> */}
            </Routes>
        </>
    );
};

export default Hardware;
//TODO: json파일을 axios로 요청하는 코드 작성

// const ServerList = () => {
//     return (
//         <ol>
//             {serverJson.models.map((model) => (
//                 <li>
//                     <img src={model.imgLink} alt={model.name} />
//                     <h3>{model.name}</h3>
//                 </li>
//             ))}
//         </ol>
//     );
// };
