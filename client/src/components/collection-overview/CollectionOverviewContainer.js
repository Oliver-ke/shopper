import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

// automatically withSpinner is aware of isLoading props, because it is the
// same as the expected props to be passed in, so redux passes it in
// this will evaluate from the inside out

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

// in order to make things easier to read we can use compose
// here we pass all HOC as args and pass the base component executor
const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);

export default CollectionOverviewContainer;
