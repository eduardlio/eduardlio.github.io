import React from 'react';
import { Link } from 'gatsby';
export default props => (
	<li style={{
		textDecoration: "none",
		display: 'inline-block',
		marginRight: '0.3rem'
	}}>
		<Link to={props.to}>{props.children}</Link>
	</li>
)