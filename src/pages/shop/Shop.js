import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';
import shopData from '../../util/shopping-item';

export default class Shop extends Component {
	state = {
		collections: shopData,
	};
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...rest }) => {
					return <CollectionPreview key={id} {...rest} />;
				})}
			</div>
		);
	}
}
