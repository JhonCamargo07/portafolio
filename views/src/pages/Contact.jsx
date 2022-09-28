import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import '../assets/js/validacion.js';

export default function Contact() {
	return (
		<>
			<div className="contenedor">
				<Header />
				<Form />
			</div>
			<Footer />
		</>
	);
}
