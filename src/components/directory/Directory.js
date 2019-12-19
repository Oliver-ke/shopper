import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createDirectorySection } from '../../redux/directory/directorySelector';
import './directory.scss';

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">{sections.map(({ id, ...restProps }) => <MenuItem key={id} {...restProps} />)}</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: createDirectorySection,
});
export default connect(mapStateToProps)(Directory);
