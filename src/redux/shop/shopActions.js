import { FETCH_COLLECTION_START, FETCH_COLLECTION_FAILURE, FETCH_COLLECTION_SUCCESS } from './shopTypes';

export const fetchCollectionStart = () => ({
	type: FETCH_COLLECTION_START,
});
export const fetchCollectionsSuccess = (collectionsMaps) => ({
	type: FETCH_COLLECTION_SUCCESS,
	payload: collectionsMaps,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});
