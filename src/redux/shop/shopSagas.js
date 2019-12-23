import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, converCollectionSnapShotToMap } from '../../firebase/firebase.util';

import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shopActions';
import { FETCH_COLLECTION_START } from './shopTypes';

// takeEvery => this is an effect that listens for every action of a specific type

export function* fetchCollectionsStartAsync() {
	// making asynchronous calls, just like with async await
	try {
		const collectionRef = firestore.collection('collectons');
		const snapShot = yield collectionRef.get();
		const collectionsMap = yield call(converCollectionSnapShotToMap, snapShot);
		// call => is the effect that invokes functions to be called with yield
		// they take the function and subsiquant argument you want to pass to the function

		yield put(fetchCollectionsSuccess(collectionsMap));
		// put is the sage's function for dispatching an action
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}

	// ;
	// dispatch(fetchCollectionStart());
	// collectionRef
	//   .get()
	//   .then((snapShot) => {
	//     const collectionsMaps = converCollectionSnapShotToMap(snapShot);
	//     dispatch(fetchCollectionsSuccess(collectionsMaps));
	//   })
	//   .catch((err) => {
	//     dispatch(fetchCollectionFailure(err.message));
	//   });
}

export function* fetchCollectionStart() {
	// takes in the action type to listen
	// and handler function that get called for that action
	yield takeLatest(FETCH_COLLECTION_START, fetchCollectionsStartAsync);
}
