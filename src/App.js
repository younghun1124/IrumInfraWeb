import {
	Home,
	Intro,
	ServerAndStorage,
	WorkStation,
	PCAndLaptop,
	Solution,
} from './pages';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { InnerContainer } from './styles/CustomStyled';
import Nav from './components/Navbar/Nav.js';
import Sidebar from './components/Sidebar';
const { Header, Content, Footer } = Layout;
function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	const [navCurrent, setNavCurret] = useState('0');
	const handleNavClick = (e) => {
		setNavCurret(e.key);
	};
	const handleSideBarClick = (e) => {
		setNavCurret(e.key);
		toggle();
	};

	return (
		<>
			<BackTop />

			<Sidebar
				isOpen={isOpen}
				toggle={toggle}
				current={navCurrent}
				handleClick={handleSideBarClick}
			/>

			<Navbar
				toggle={toggle}
				current={navCurrent}
				handleClick={handleNavClick}
			/>

			<div
				css={css`
					display: flex;
					flex-direction: column;
					height: 100%;
					flex: 1 0 auto;
				`}
			>
				<Content
					css={css`
						background-color: white;
						flex: 1 0 auto;
						min-height: 100vh; //footer 바닥고정을 위한 속성
					`}
				>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/introduction/*' element={<Intro />} />
						<Route
							path='/server&storage/*'
							element={<ServerAndStorage />}
						/>
						<Route
							path='/workstation/*'
							element={<WorkStation />}
						/>
						<Route path='/pc&laptop/*' element={<PCAndLaptop />} />
						<Route path='/solution/*' element={<Solution />} />
					</Routes>
				</Content>
				<Footer
					css={(theme) => css`
						color: ${theme.colors.footerGray};
						background-color: ${theme.colors.footerDark};
						width: 100%;
						flex-shrink: 0;
						z-index: 1;
					`}
				>
					<InnerContainer
						css={css`
							flex-direction: row;
							justify-content: space-between;
						`}
					>
						<div>
							<p>
								<strong
									css={css`
										font-size: 1.5rem;
									`}
								>
									(주)이룸인프라
								</strong>
							</p>
							<p>
								Copyright © 2020-2021 - all rights reserved -
								IrumInfra
							</p>
						</div>
						<address
							css={css`
								font-size: 1.3rem;
							`}
						>
							<a href='tel:02-8577-008'>TEL : 02-857-7008</a>
							<br />
							FAX : 02-857-7009
							<br />
							<a href='mailto:mhjung@iruminfra.co.kr'>
								e-Mail : mhjung@iruminfra.co.kr
							</a>
							<br />
							대표 : 정명호 <br />
							<a
								target='_blank'
								rel='noreferrer'
								href='https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C%2033%EA%B8%B8%2012%20%EC%9A%B0%EB%A6%BC%20E-Biz%EC%84%BC%ED%84%B0%202%EC%B0%A8%20707%ED%98%B8/address/14126015.89255784,4507147.929730302,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C33%EA%B8%B8%2012,new?c=14125951.9283784,4507137.7306574,18,0,0,0,dh'
							>
								주소 : 서울시 구로구 디지털로 33길 12 우림
								E-Biz센터 2차 612호
							</a>
						</address>
					</InnerContainer>
				</Footer>
			</div>
		</>
	);
}

export default App;
