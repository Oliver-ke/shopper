import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	const handleClick = () => {
		const currentUrl = match.url;
		return history.push(`${currentUrl}${linkUrl}`);
	};
	return (
		<div className={`${size} menu-item`} onClick={handleClick}>
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
