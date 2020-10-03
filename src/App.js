import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Menu from './components/Menu';

function App() {
	return (
		<div className="App">
			<Menu />
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Contact />
					</div>
					<div className="col-md-6">
						<Contacts />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
