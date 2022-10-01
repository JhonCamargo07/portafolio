import React, { useState } from 'react';
import imgBlack from './../assets/img/simpsons-ouh_negro.png';
import imgWhite from './../assets/img/simpsons-ouh_blanco.png';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './../assets/css/error.css';

export default function DivError404() {
	const [imgError, setImgError] = useState(imgBlack);

	window.addEventListener('click', () => {
		changeImgError();
	});
	window.addEventListener('load', () => {
		changeImgError();
	});

	const changeImgError = () => {
		switch (localStorage.getItem('dark')) {
			case 'dark':
				setImgError(imgWhite);
				break;
			case 'light':
				setImgError(imgBlack);
				break;
			default:
				setImgError(imgWhite);
				break;
		}
	};

	return (
		<>
			<main className="error">
				<div className="error__imagen">
					<img src={imgError} loading="lazy" alt="Simbolo de error 403, homero simpsons" className="error__img" />
				</div>
				<div className="error__informacion">
					<h1 className="error__titulo">
						<FormattedMessage id="error404.title" defaultMessage="Sorry, page not found" />
					</h1>
					<p>
						<FormattedMessage id="error404.p1" defaultMessage="But don't worry, it's just a 404 error!" />
					</p>
					<p>
						<FormattedMessage
							id="error404.p2"
							defaultMessage="It is possible that what you are looking for no longer exists or the link is misspelled."
						/>
					</p>
					<Link to="/" className="error__enlace error__enlace2">
						<FormattedMessage id="error404.buttom" defaultMessage="Back to main page" />
					</Link>
				</div>
			</main>
		</>
	);
}
