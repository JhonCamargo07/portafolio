import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error404 />} />
					<Route path="/error404" element={<Error404 />} />
					<Route path="/incomplete" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
