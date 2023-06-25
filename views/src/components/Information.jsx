import React from 'react';
import Aboutme from './Aboutme';
import Personal from './Personal';
import Professional from './Professional';
import { ChangeTitle } from './Header';

export default function Information() {
	return (
		<>
			<ChangeTitle element="information" defaultMessage="About me" idJson="information.about.title" />
			<div className="informacion" id="information">
				<div className="informacion__parrafos">
					<Aboutme />
					<Personal />
					<Professional id="profesional" />
				</div>
			</div>
		</>
	);
}
