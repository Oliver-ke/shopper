import styled from 'styled-components';

export const DropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	button {
		margin-top: auto;
	}
	@media screen and (max-width: 800px) {
		font-size: 10px;
		top: 60px;
		right: 10px;
		width: 200px;
		height: 250px;
		padding: 5px;
		font-size: 10px;
	}
`;

export const CartItemContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;

export const Message = styled.span`
	font-size: 18px;
	margin: 50px auto;
	@media screen and (max-width: 800px) {
		font-size: 10px;
	}
`;
