import React from 'react';
import CollectionPreview from '../preview-collection/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shopSelector';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collectionOverview.scss';

export const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...rest }) => {
				return <CollectionPreview key={id} {...rest} />;
			})}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
