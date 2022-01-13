import React from 'react';
import { Carousel, Typography, Divider, Row } from 'antd';
import BuisnessArea from '../components/BusinessArea';
import Partners from '../components/Partners';
import styled from '@emotion/styled';
import { GraySpan, FlexCol, GrayBg, WSimg } from './HomeElement';
import {
	QuestionCircleOutlined,
	RiseOutlined,
	SyncOutlined,
	TrophyOutlined,
} from '@ant-design/icons';
import { InnerContainer } from '../styles/CustomStyled';
/** @jsxImportSource @emotion/react */
import { jsx, css, useTheme } from '@emotion/react';
import { Fade } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import HeroSection from '../components/HeroSection';
const { Title, Paragraph, Text } = Typography;
const Home = () => {
	return (
		<>
			<Carousel
				effect='fade'
				dots={false}
				autoplay
				css={css`
					margin: auto;
				`}
			>
				<CarouselUnit
					src='/Home/Intro-idc.jpg'
					text='고객과 미래를 함께하는'
					title='(주) 이룸인프라'
				/>
				<CarouselUnit
					src='/Home/Intro-idc2.jpg'
					text='Lenovo Server Storage NetWork'
					title='ThinkSystem'
				/>
				<CarouselUnit
					src='/Home/Intro-idc3.jpg'
					text='Lenovo Workstation'
					title='ThinkStation'
				/>
			</Carousel>
			{/* <HeroSection /> */}
			<InnerContainer
				css={css`
					padding: 0;
					padding-top: 100px;
					justify-content: space-between;
				`}
			>
				<FlexCol
					css={css`
						margin-left: 30px;
					`}
				>
					<img src='/Logo.png' style={{ width: '224px' }} />
					<span
						css={css`
							font-weight: bold;
							font-size: 30px;
						`}
					>
						(주)이룸인프라
					</span>
				</FlexCol>
				<FlexCol
					css={css`
						justify-content: space-between;
						width: 550px;
					`}
				>
					<GraySpan>고객의 만족을 최우선으로 생각합니다</GraySpan>
					<GraySpan>
						(주)이룸인프라는 IT 전문회사로써 고객만족을 위해 최적의
						하드웨어와 솔루션을 고객께 제공하고 있습니다.
					</GraySpan>
				</FlexCol>
			</InnerContainer>
			<Divider></Divider>
			<div
				css={css`
					width: 100%;
				`}
				justify='space-between'
			>
				<InnerContainer
					css={css`
						flex-direction: column;
						gap: 100px;
						justify-content: space-around;
						padding-top: 100px;
						padding-bottom: 90px;
					`}
				>
					<div
						css={css`
							display: flex;
							justify-content: space-between;
							width: 100%;
							flex-wrap: wrap;
						`}
					>
						<Fade left>
							<Card>
								<QuestionCircleOutlined
									style={{ ...IconStyle, color: 'dimgray' }}
								/>
								<Span>고객을 위해 고민합니다</Span>
							</Card>
						</Fade>
						<Fade top>
							<Card>
								<RiseOutlined
									style={{ ...IconStyle, color: 'crimson' }}
								/>
								<Span>고객과 함께 성장합니다</Span>
							</Card>
						</Fade>
						<Fade bottom>
							<Card>
								<SyncOutlined
									style={{ ...IconStyle, color: 'royalblue' }}
								/>
								<Span>고객의 믿음에 보답합니다</Span>
							</Card>
						</Fade>
						<Fade right>
							<Card>
								<TrophyOutlined
									style={{ ...IconStyle, color: 'GoldenRod' }}
								/>
								<Span
									css={css`
										color: #191f28;
									`}
								>
									고객과 함께 1등 하겠습니다
								</Span>
							</Card>
						</Fade>
					</div>
				</InnerContainer>
			</div>

			<InnerContainer
				css={css`
					background-image: url('http://www.iruminfra.co.kr/irum/xd/hexBg.svg');
				`}
			>
				<div>
					<Fade right>
						<img src='/Home/ThinkSystem.svg' />
						<GraySpan
							style={{ color: '#878892', fontSize: '22px' }}
						>
							Lenovo의 ThinkSystem 서버는 ITIC의 2021년 글로벌
							서버 하드웨어 서버 OS 안정성 설문조사에서 모든 Intel
							x86 기반 플랫폼 중에서 8년 연속 최고의 안정성과 가동
							시간을 기록했습니다.
						</GraySpan>
						<img
							src='/Home/TS.svg'
							alt='thinkstation'
							style={{ maxWidth: '820px' }}
						/>
					</Fade>
				</div>
			</InnerContainer>

			<GrayBg>
				<InnerContainer>
					<Fade left>
						<img src='/Home/ThinkStation.svg' />
						<WSimg src='/Home/WS.svg' />

						<GraySpan
							style={{
								color: '#fff',
								fontWeight: 'normal',
							}}
						>
							Lenovo 워크스테이션은 고객 중심의 혁신으로 설계되어
							최고 수준의 성능, 사용 편의성 및 업계 최고의
							안정성을 제공합니다. 독창적인 ThinkStation 모듈식
							설계로 업그레이드 및 사용자 정의가 수월하고 수많은
							가능한 구성을 지원합니다. 혁신적인 디자인과 최신
							Intel® Xeon® CPU 및 NVIDIA® Quadro® GPU의 조합은
							아이디어를 현실로 만드는 최고의 사용자 경험을
							제공합니다.
						</GraySpan>
					</Fade>
				</InnerContainer>
			</GrayBg>
			<InnerContainer
				css={css`
					padding: 140px 0 140px 0;
				`}
			>
				<div>
					<Fade bottom>
						<Title
							css={css`
								margin-bottom: 50px !important;
							`}
							level={1}
						>
							Business Area
						</Title>
						<BuisnessArea />
					</Fade>
				</div>
			</InnerContainer>
			<GrayBg
				css={css`
					background-color: #d2d5dd;
					padding: 180px 0 180px 0;
				`}
			>
				<InnerContainer>
					<div>
						<Fade bottom>
							<Title level={1}>Business Partner</Title>
							<Title style={{ color: '#8b95a1' }} level={3}>
								파트너들과 최선을 다하고 있습니다.
							</Title>
							<Partners />
						</Fade>
					</div>
				</InnerContainer>
			</GrayBg>
		</>
	);
};
const IconStyle = {
	fontSize: '7rem',
};

const Card = styled.div`
	width: 307px;
	display: flex;
	min-height: 160px;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 2rem;
	background-color: white;
	border-radius: 2.6rem;
	transition: all 0.1s linear;
	box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
	&:hover {
		transform: scale(1.1);
	}
`;

const Span = styled.span`
	color: #191f28;
	width: 100%;
	font-size: 1.8rem;
`;
const FlexCenter = css`
	display: flex;

	min-height: 150px;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
`;
const CarouselUnit = ({ src, children, title, text }) => {
	const CarouselDiv = styled.div`
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 770px;
		background-image: url(${src});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		font-size: 6rem;
		${({ theme }) => theme.device.mobile} {
			font-size: 4rem;
		}
	`;

	const Text = styled.div`
		margin: 10px;
		font-size: 0.4em;
	`;
	const Title = styled.div`
		margin: 10px;
		font-size: 1em;
	`;
	return (
		<CarouselDiv>
			<div>
				<Text>{text}</Text>
				<Title
					css={css`
						font-weight: 600;
					`}
				>
					{title}
				</Title>
			</div>
		</CarouselDiv>
	);
};

export default Home;
