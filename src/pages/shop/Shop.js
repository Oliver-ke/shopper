import React, { useEffect } from 'react';
import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shopActions';
import { Route } from 'react-router-dom';

const Shop = ({ fetchCollectionStart, match }) => {
	useEffect(
		() => {
			fetchCollectionStart();
		},
		[ fetchCollectionStart ],
	);
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
