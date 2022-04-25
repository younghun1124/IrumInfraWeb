import styled from '@emotion/styled';

export const GraySpan = styled.span`
	color: #989696;
	font-size: 21px;
	font-weight: bold;
`;
export const FlexCol = styled.div`
	display: flex;

	flex-direction: column;
`;
export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
export const GrayBg = styled.div`
	background-color: #293840;
`;
export const WSimg = styled.img`
	transition: all 0.1s linear;
	z-index: 0;
	position: relative;
	align-self: center;
	&:hover {
		transform: scale(1.5);
	}
`;
export const Card = styled.div`
	width: 307px;
	display: flex;
	min-height: 160px;
	justify-content: space-around;
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
export const CardGrid = styled.div`
	width: 100%;
	display: grid;
	gap: 20px;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 310px);
`;
