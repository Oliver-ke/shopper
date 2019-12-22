import { UPDATE_COLLECTION } from './shopTypes';

export const updateCollections = (collectionMap) => ({
	type: UPDATE_COLLECTION,
	payload: collectionMap,
});
