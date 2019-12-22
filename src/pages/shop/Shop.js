import React, { Component } from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.util';
import { Route } from 'react-router-dom';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
	state = {
		loading: true,
	};
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collectons');

		// using firebase observables and creating a subscription

		// collectionRef.onSnapshot(async (snapShot) => {
		// 	const collectionMap = converCollectionSnapShotToMap(snapShot);
		// 	console.log(collectionMap);
		// 	updateCollections(collectionMap);
		// 	this.setState({ loading: false });
		// });

		// using promises and chaining a .then
		collectionRef.get().then((snapShot) => {
			const collectionMap = converCollectionSnapShotToMap(snapShot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
