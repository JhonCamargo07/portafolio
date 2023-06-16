import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Error404 from '../pages/Error404';

export default function Router() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<Error404 />} />
					<Route path="/incomplete" element={<Error404 />} />
				</Routes>
			</HashRouter>
		</>
	);
}
