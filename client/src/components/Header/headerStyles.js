import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const AnchorStyle = css`
	color: black;
	text-decoration: none;
`;

const OptionStyles = css`
	padding: 10px 15px;
	cursor: pointer;
	${AnchorStyle};
	@media screen and (max-width: 800px) {
		padding: 5px 5px;
	}
`;

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	@media screen and (max-width: 800px) {
		height: 60px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 10px;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

// this illustrates the process of sharing styles

export const OptionLink = styled(Link)`
 ${OptionStyles}
`;

export const OptionDiv = styled.div`${OptionStyles};`;

// you can also use the as attribute on the component to render it as a perticuler componenent base
