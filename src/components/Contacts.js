import React, { useState } from 'react';

const Contacts = () => {
	const myContacts = [ { id: 1, name: 'Med' }, { id: 2, name: 'Mouna' }, { id: 3, name: 'Yassine' } ];
	const [ contacts, setContacts ] = useState(myContacts);
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
