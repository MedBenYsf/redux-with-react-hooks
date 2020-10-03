import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/ContactActions';

const Contact = () => {
	const [ contact, setContact ] = useState({
		id: 0,
		name: ''
	});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setContact({ ...contact, name: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		contact.id = Math.random() * 100;
		dispatch(addContact(contact));
		setContact({ ...contact, name: '' });
	};
	return (
		<div>
			<h2>Add Contact</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Contact Name</label>
					<input
						value={contact.name}
						onChange={handleChange}
						type="text"
						id="name"
						name="name"
						className="form-control"
					/>
				</div>
				<button className="btn btn-success btn-block">Add</button>
			</form>
		</div>
	);
};

export default Contact;
