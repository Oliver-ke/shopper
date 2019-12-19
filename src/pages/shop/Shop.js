import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';
import { Route } from 'react-router-dom';

const Shop = ({ match }) => {
	return (
		<div className="shop-page">
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			<Route exact path={`${match.path}`} component={CollectionOverview} />
		</div>
	);
};

export default Shop;
