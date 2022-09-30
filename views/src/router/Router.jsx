import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Error404 />} />
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
