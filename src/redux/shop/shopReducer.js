import { UPDATE_COLLECTION } from './shopTypes';
const intialState = {
	collections: null,
};

export default (state = intialState, action) => {
	switch (action.type) {
		case UPDATE_COLLECTION:
			return {
				...state,
				collections: action.payload,
			};
		default:
			return state;
	}
};
