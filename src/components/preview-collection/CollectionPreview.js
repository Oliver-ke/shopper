import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collectionPriview.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.filter((item, idx) => idx < 4).map(({ id, ...rest }) => {
					return <CollectionItem key={id} {...rest} />;
				})}
			</div>
		</div>
	);
};

export default CollectionPreview;
