import { Home, Nav } from './pages';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function App() {
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                        background: 'white',
                    }}
                >
                    <Nav />
                </Header>
                <Content style={{ background: 'white', padding: '16px' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Content>
                <Footer>
                    <p>
                        <img
                            src='Logo.png'
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
