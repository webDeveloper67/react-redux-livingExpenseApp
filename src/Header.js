import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui text menu">
			<Link to="/" className="header item">
				Living Expenses App
			</Link>
		</div>
	);
};

export default Header;
