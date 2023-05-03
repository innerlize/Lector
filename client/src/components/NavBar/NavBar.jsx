import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<Navbar className='sticky w-full top-0 py-5 px-5 md:p-[25px] xl:px-[3.676vw] xl:py-[1.103vw]'>
			<Link to='/home'>
				<Navbar.Brand>
					<img
						src='https://cdn-icons-png.flaticon.com/512/201/201811.png'
						className='mr-3 h-12 md:h-20 xl:h-[4.706vw]'
						alt='Lector Logo'
					/>
					<span className='self-center whitespace-nowrap text-2xl font-semibold md:text-[32px] xl:text-[1.838vw]'>
						Lector
					</span>
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle className='toggleButton' />

			<Navbar.Collapse className='collapseList'>
				<Link
					to='/home'
					className='md:text-[23px] xl:text-[1.324vw] xl:mr-[1.324vw]'>
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
