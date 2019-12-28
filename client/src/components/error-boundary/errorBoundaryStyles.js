import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
	height: 70vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ErrorImageContainer = styled.div`
	display: inline-block;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	width: 40vw;
	height: 40vh;
	@media screen and (max-width: 800px) {
		width: 50vw;
		height: 30vh;
	}
`;

export const ErrorImageText = styled.h2`
	font-size: 28px;
	color: #2f8e89;
	@media screen and (max-width: 800px) {
		font-size: 19px;
	}
`;
