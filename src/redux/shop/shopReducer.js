import shopData from '../../util/shopping-item';
const intialState = {
	collections: shopData,
};

export default (state = intialState, action) => {
	switch (action.type) {
		default:
			return intialState;
	}
};
