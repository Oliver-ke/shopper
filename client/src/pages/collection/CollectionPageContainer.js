import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from './Collection';

// passing in a function allows you to invert the state
// withour coarcing to a boolean type;
const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionLoaded(state),
});

// state => selectIs..(state)

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
