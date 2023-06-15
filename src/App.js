import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Border from './Border';
import Repository from './Repository';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Profile />
			<Border />
			<Repository />

		</div>
	);
}

export default App;