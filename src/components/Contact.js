import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Add Contact</h2>
			<form>
				<div className="form-group">
					<label htmlFor="name">Contact Name</label>
					<input type="text" id="name" name="name" className="form-control" />
				</div>
				<button className="btn btn-success btn-block">Add</button>
			</form>
		</div>
	);
};

export default Contact;
