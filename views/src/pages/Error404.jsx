import React from 'react';
import DivError404 from '../components/DivError404';
import Header from '../components/Header';
// import './../assets/css/error.css';

export default function Error404() {
	return (
		<>
			<Header />
			<div className="contenedor">
				<DivError404 />
			</div>
		</>
	);
}
