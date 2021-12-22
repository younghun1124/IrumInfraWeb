import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import { Menu, Affix, Row, Col, Layout } from 'antd';
import { Link, NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
const Navbar = ({ toggle }) => {
    const [current, setCurret] = useState('0');
    const handleClick = (e) => {
        setCurret(e.key);
    };
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img
                            src='/Logo.png'
                            alt='이룸인프라 로고'
                            style={{ width: '100px' }}
                        />
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu
                        style={{
                            width: '100%',
                            flex: '0 0 1',
                            justifyContent: 'end',
                        }}
                        mode='horizontal'
                        selectedKeys={[current]}
                        onClick={handleClick}
                    >
                        <SubMenu key='company' title='회사소개'>
                            <Menu.Item key='setting:1'>
                                <NavLink to='/introduction/welcome'>
                                    인사말
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:2'>
                                <NavLink to='/introduction/businessArea'>
                                    사업영역
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:3'>
                                <NavLink to='/introduction/organization'>
                                    조직도
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:5'>
                                <NavLink to='/introduction/partners'>
                                    주요협력사
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:6'>
                                <NavLink to='/introduction/location'>
                                    Contact
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='server&storage' title='서버&스토리지'>
                            <Menu.Item key='setting:7'>
                                <NavLink to='/server&storage/server'>
                                    서버
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:8'>
                                <NavLink to='/server&storage/storage'>
                                    스토리지
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='workstation' title='워크스테이션'>
                            <Menu.Item key='setting:9'>
                                <NavLink to='/workstation/tower'>
                                    Tower Workstation
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:10'>
                                <NavLink to='/workstation/mobile'>
                                    Mobile WorkStation
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='PC&laptop' title='PC&노트북'>
                            <Menu.Item key='setting:11'>
                                <NavLink to='/pc&laptop/thinkCentre'>
                                    Think Centre
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:12'>
                                <NavLink to='/pc&laptop/thinkPad'>
                                    ThinkPad
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='solution' title='솔루션'>
                            <Menu.Item key='setting:13'>
                                <NavLink to='/solution/nutanix'>
                                    Nutanix
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='setting:14'>
                                <NavLink to='/solution/vmware'>Vmware</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
