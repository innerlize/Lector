import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar className='sticky top-0 py-5'>
			<Link to='/home'>
				<Navbar.Brand>
					<img
						src='https://cdn-icons-png.flaticon.com/512/201/201811.png'
						className='mr-3 h-6 sm:h-9'
						alt='Lector Logo'
					/>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						Lector
					</span>
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle />

			<Navbar.Collapse>
				<Link to='/home' className='self-center'>
					<Navbar.Link>Home</Navbar.Link>
				</Link>
				<Link to='/book/add'>
					<Button>Add Book</Button>
				</Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
export default NavBar;
