import React from 'react';
import Aboutme from './Aboutme';
import Personal from './Personal';
import Professional from './Professional';

export default function Information() {
	return (
		<>
			<div className="informacion" id="informacion">
				<div className="informacion__parrafos">
					<Aboutme />
					<Personal />
					<Professional />
				</div>
			</div>
		</>
	);
}
