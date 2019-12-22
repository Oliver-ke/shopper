import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.util';
import { FETCH_COLLECTION_START, FETCH_COLLECTION_FAILURE, FETCH_COLLECTION_SUCCESS } from './shopTypes';

// export const updateCollections = (collectionMap) => ({
// 	type: UPDATE_COLLECTION,
// 	payload: collectionMap,
// });

export const fetchCollectionStart = () => ({
	type: FETCH_COLLECTION_START,
});
export const fetchCollectionsSuccess = (collectionsMaps) => ({
	type: FETCH_COLLECTION_SUCCESS,
	payload: collectionsMaps,
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collectons');
		dispatch(fetchCollectionStart());
		collectionRef
			.get()
			.then((snapShot) => {
				const collectionsMaps = converCollectionSnapShotToMap(snapShot);
				dispatch(fetchCollectionsSuccess(collectionsMaps));
			})
			.catch((err) => {
				dispatch(fetchCollectionFailure(err.message));
			});
	};
};
