import React from 'react';
import DivError404 from '../components/errors/DivError404';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Error404() {
	return (
		<>
			<Header />
			<div className="contenedor">
				<DivError404 />
				<Footer />
			</div>
		</>
	);
}
