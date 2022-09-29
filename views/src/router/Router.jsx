import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
