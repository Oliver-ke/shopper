import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	width: 75%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	button {
		margin-left: auto;
		margin-top: 50px;
	}
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
	@media screen and (max-width: 800px) {
		font-size: 10px;
		font-weight: bold;
	}
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;
	&:last-child {
		width: 8%;
	}
`;

export const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
	@media screen and (max-width: 800px) {
		font-size: 20px;
		font-weight: bold;
	}
`;

export const Warning = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
	@media screen and (max-width: 800px) {
		font-size: 15px;
	}
`;
