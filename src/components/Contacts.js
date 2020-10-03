import React from 'react';
import { useSelector } from 'react-redux';

const Contacts = () => {
	const contacts = useSelector((state) => state.contacts);
	return (
		<div>
			<h2>Contacts list</h2>
			<ul className="list-group">
				{contacts.map((contact) => (
					<li key={contact.id} className="list-group-item">
						{contact.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contacts;
