import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';

export default function Projects() {
	return (
		<>
			<div className="contenedor">
				<Header />
				<MyProjects />
				<Footer />
			</div>
		</>
	);
}
