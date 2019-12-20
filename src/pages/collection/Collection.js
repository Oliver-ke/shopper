import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { CollectionPageContainer, Title, ItemsContainer } from './collectionStyles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<Title>{title}</Title>
			<ItemsContainer>{items.map((item) => <CollectionItem key={item.key} item={item} />)}</ItemsContainer>
		</CollectionPageContainer>
	);
};

// match is prop passed by react-router-dom and available to connect
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
