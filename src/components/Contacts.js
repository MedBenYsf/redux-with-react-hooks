import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../actions/ContactActions';

const Contacts = () => {
	const contacts = useSelector((state) => state.contacts);
	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch(deleteContact(id));
	};
	return (
		<div>
			<h2>Contacts list</h2>
			<ul className="list-group">
				{contacts.map((contact) => (
					<li key={contact.id} className="list-group-item">
						{contact.name}
						<button
							key={contact.id}
							onClick={() => handleClick(contact.id)}
							className="btn btn-danger"
							style={{ float: 'right' }}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contacts;
