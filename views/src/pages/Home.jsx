import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Paralax from '../components/Paralax';
import Information from '../components/Information';
import Lenguages from '../components/Lenguages';
import Form from '../components/Form';

function Home() {
	return (
		<>
			<div className="contenedor">
				<Header />
				<Paralax />
			</div>
			<Information />
			<Lenguages />
			<Form />
			<Footer />
		</>
	);
}

export default Home;
