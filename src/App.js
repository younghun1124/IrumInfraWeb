import { Home, Nav, Intro } from './pages';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Hardware from './pages/Hardware';

const { Header, Content, Footer } = Layout;
function App() {
    return (
        <>
            <Layout
            // css={css`
            //     background-color: #f9fafb;
            // `}
            >
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100vw',
                        background: 'white',
                        borderBottom: '1px solid #f0f0f0',
                    }}
                >
                    <Nav />
                </Header>
                <Content
                    css={css`
                        background-color: white;

                        margin-top: 64px;
                    `}
                >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/introduction/*' element={<Intro />} />
                        <Route path='/hardware/*' element={<Hardware />} />
                    </Routes>
                </Content>
                <Footer>
                    <p>
                        <img
                            src='/Logo.png'
                            alt='이룸인프라 로고'
                            style={{ width: '100px' }}
                        />
                        <span>
                            | TEL : 02-8577-008 | FAX : 02-8577-009 | e-Mail :
                            mhjung@iruminfra.co.kr 대표자:정명호 | 주소 : 서울시
                            구로구 디지털로 33길 12 우림 E-Biz센터 2차 707호
                        </span>
                    </p>
                    Copyright © 2020 - all rights reserved - IrumInfra
                </Footer>
            </Layout>
        </>
    );
}

export default App;
