import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shopActions';
import { Route } from 'react-router-dom';

import Spinner from '../../components/Spinner/Spinner';

const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));
const CollectionOverviewContainer = lazy(() =>
	import('../../components/collection-overview/CollectionOverviewContainer'),
);

const Shop = ({ fetchCollectionStart, match }) => {
	useEffect(
		() => {
			fetchCollectionStart();
		},
		[ fetchCollectionStart ],
	);
	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
