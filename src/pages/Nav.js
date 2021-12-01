import React, { useState } from 'react';
import { Menu, Affix, Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { InnerContainer } from '../styles/CustomStyled';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
const { SubMenu } = Menu;
const Nav = () => {
    // const [current, setCurret] = useState('0');
    // const handleClick = (e) => {
    //     setCurret(e.key);
    // };
    return (
        <InnerContainer
            css={css`
                justify-content: space-between;
            `}
        >
            <div>
                <Link to='/'>
                    <img
                        src='/Logo.png'
                        alt='이룸인프라 로고'
                        style={{ width: '100px' }}
                    />
                </Link>
            </div>

            <Menu
                mode='horizontal'
                // onClick={handleClick}
                // selectedKeys={[current]}
            >
                <SubMenu key='company' title='회사소개'>
                    <Menu.Item key='setting:1'>
                        <Link to='/introduction/welcome'>인사말</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:2'>
                        <Link to='/introduction/businessArea'>사업영역</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:3'>
                        <Link to='introduction/organization'>조직도</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:5'>
                        <Link to='introduction/partners'>주요협력사</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:6'>
                        <Link to='introduction/location'>찾아오시는 길</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='business' title='H/W 사업'>
                    <Menu.Item key='setting:7'>
                        <Link to='hardware/server'>Server</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:8'>
                        <Link to='hardware/storage'>Storage</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:9'>
                        <Link to='hardware/workstation'>Workstation</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:10'>
                        <Link to='hardware/GPUPlatform'>GPU Platform</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='solution' title='솔루션 사업'>
                    <Menu.Item key='setting:11'>
                        <Link to='solution/Nutanix'>Nutanix</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:12'>
                        <Link to='solution/Vmware'>Vmware</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key='service' title='서비스 사업'>
                    <Menu.Item key='setting:13'>
                        <Link to='service/maintenance'>IT유지보수</Link>
                    </Menu.Item>
                    <Menu.Item key='setting:14'>
                        <Link to='service/transfer'>IT장비이전</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </InnerContainer>
    );
};
export default Nav;
