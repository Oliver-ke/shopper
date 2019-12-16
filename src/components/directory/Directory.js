import React, { Component } from 'react';
import directoryData from '../../util/directory';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: directoryData,
		};
	}
	render() {
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map(({ id, ...restProps }) => <MenuItem key={id} {...restProps} />)}
			</div>
		);
	}
}

export default Directory;
