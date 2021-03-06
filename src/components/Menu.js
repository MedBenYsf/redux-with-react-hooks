import React from 'react';
import { useSelector } from 'react-redux';

function Menu() {
	const count = useSelector((state) => state.contacts.length);
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-success mb-4">
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<h2>Redux with react hooks | {count} contacts</h2>
				</div>
			</nav>
		</div>
	);
}

export default Menu;
