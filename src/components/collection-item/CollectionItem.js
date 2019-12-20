import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cartAction';
import { connect } from 'react-redux';
import {
	CollectionItemButton,
	CollectionItemFooter,
	CollectionItemImage,
	CollectionItemName,
	CollectionItemPrice,
	CollectionItemContainer,
} from './collectionItemStyles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<CollectionItemImage className="image" imageUrl={imageUrl} />
			<CollectionItemFooter>
				<CollectionItemName>{name}</CollectionItemName>
				<CollectionItemPrice>${price}</CollectionItemPrice>
			</CollectionItemFooter>
			<CollectionItemButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CollectionItemButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
