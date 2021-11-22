import React, { useState } from 'react';
import { Menu, Affix, Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const Nav = () => {
    const [current, setCurret] = useState('mail');
    const handleClick = (e) => {
        setCurret(e.key);
    };
    return (
        <>
            <Row>
                <Col>
                    <Link to='/'>
                        <img
                            src='Logo.png'
                            alt='이룸인프라 로고'
                            style={{ width: '100px' }}
                        />
                    </Link>
                </Col>

                <Col>
                    <Menu
                        onClick={handleClick}
                        selectedKeys={[current]}
                        mode='horizontal'
                    >
                        <SubMenu key='company' title='회사소개'>
                            <Menu.Item key='setting:1'>
                                <Link to='/introduction/welcome'>인사말</Link>
                            </Menu.Item>
                            <Menu.Item key='setting:2'>
                                <Link to='/introduction/welcome'>사업영역</Link>
                            </Menu.Item>
                            <Menu.Item key='setting:3'>조직도</Menu.Item>
                            <Menu.Item key='setting:5'>주요협력사</Menu.Item>
                            <Menu.Item key='setting:6'>찾아오시는 길</Menu.Item>
                        </SubMenu>
                        <SubMenu key='business' title='H/W 사업'>
                            <Menu.Item key='setting:7'>
                                <Link to='hardware'>Server</Link>
                            </Menu.Item>
                            <Menu.Item key='setting:8'>Storage</Menu.Item>
                            <Menu.Item key='setting:9'>Workstation</Menu.Item>
                            <Menu.Item key='setting:10'>PC</Menu.Item>
                        </SubMenu>
                        <SubMenu key='solution' title='솔루션 사업'>
                            <Menu.Item key='setting:11'>Nutanix</Menu.Item>
                            <Menu.Item key='setting:12'>Vmware</Menu.Item>
                        </SubMenu>

                        <SubMenu key='service' title='서비스 사업'>
                            <Menu.Item key='setting:13'>IT유지보수</Menu.Item>
                            <Menu.Item key='setting:14'>IT장비이전</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
            </Row>
        </>
    );
};
export default Nav;
