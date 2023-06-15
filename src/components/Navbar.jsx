import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return <nav className='nav'>
		<li><a>Profile</a></li>
		<li><a>Messages</a></li>
		<li><a>News</a></li>
		<li><a>Music</a></li>
		<li><a>Settings</a></li>
	</nav>
}

export default Navbar;