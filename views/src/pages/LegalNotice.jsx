import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DivLegalNotice from '../components/DivLegalNotice';

export default function LegalNotice() {
	return (
		<>
			<div className="contenedor">
				{/* <Header /> */}
				<div className="informacion" id="information">
					<div className="informacion__parrafos">
						{/* <Aboutme />
						<Personal />
						<Professional /> */}
						<DivLegalNotice />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
