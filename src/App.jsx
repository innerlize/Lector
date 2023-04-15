import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home.jsx';
import Add from './pages/Add.jsx';
import Update from './pages/Update.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/book/add' element={<Add />} />
					<Route path='/book/update/:id' element={<Update />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
