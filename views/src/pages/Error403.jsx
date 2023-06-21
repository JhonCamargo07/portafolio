import React from 'react';
import DivError403 from '../components/errors/DivError403';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Error403() {
	return (
		<>
			<Header />
			<div className="contenedor">
				<DivError403 />
				<Footer />
			</div>
		</>
	);
}
