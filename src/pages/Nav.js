import React, { useState } from 'react';
import { Menu, Affix, Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const Nav = () => {
    const [current, setCurret] = useState('mail');
    const handleClick = (e) => {
        console.log('click ', e);
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
                            <Menu.Item key='setting:1'>인사말</Menu.Item>
                            <Menu.Item key='setting:2'>사업영역</Menu.Item>
                            <Menu.Item key='setting:3'>조직도</Menu.Item>
                            <Menu.Item key='setting:4'>회사비전</Menu.Item>
                            <Menu.Item key='setting:5'>주요협력사</Menu.Item>
                            <Menu.Item key='setting:6'>찾아오시는 길</Menu.Item>
                        </SubMenu>
                        <SubMenu key='business' title='사업소개'>
                            <Menu.ItemGroup title='하드웨어 사업'>
                                <Menu.Item key='setting:7'>Server</Menu.Item>
                                <Menu.Item key='setting:8'>Storage</Menu.Item>
                                <Menu.Item key='setting:9'>
                                    Workstation
                                </Menu.Item>
                            </Menu.ItemGroup>

                            <Menu.Item key='setting:4'>솔루션 사업</Menu.Item>
                        </SubMenu>

                        <SubMenu key='service' title='서비스'>
                            <Menu.Item key='setting:10'>IT 유지보수</Menu.Item>
                            <Menu.Item key='setting:11'>IT 인력파견</Menu.Item>
                            <Menu.Item key='setting:12'>
                                IT 장비 이전 설치
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
            </Row>
        </>
    );
};
export default Nav;
