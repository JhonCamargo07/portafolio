import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Paralax from '../components/Paralax';
import Information from '../components/Information';

function Home() {
	return (
		<>
			<div className="contenedor">
				<Header />
				<Paralax />
			</div>
			<Information />
			<Footer />
		</>
	);
}

export default Home;
