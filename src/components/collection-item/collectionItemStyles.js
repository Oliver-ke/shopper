import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	position: relative;
	align-items: center;
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`;

export const CollectionItemImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemFooter = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	background-color: #ccc;
	justify-content: space-between;
	font-size: 18px;
	padding: 2px 9px;
`;

export const CollectionItemButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	top: 255px;
  position: absolute;
  display: none;
`;

export const CollectionItemName = styled.span`
	width: 80%;
	margin-bottom: 20px;
`;
export const CollectionItemPrice = styled.span`
	width: 20%;
	font-weight: bold;
`;
