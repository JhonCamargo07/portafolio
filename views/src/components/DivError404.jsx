import React from 'react';
import imgBlack from './../assets/img/simpsons-ouh_negro.png';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export default function DivError404() {
	return (
		<>
			<main className="error">
				<div className="error__container">
					<div className="error__imagen">
						<img src={imgBlack} loading="lazy" alt="Simbolo de error 403, homero simpsons" className="error__img" />
					</div>
					<div className="error__information">
						<h1 className="error__title">
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
						<Link to="/" className="">
							<button className="error__link">
								<FormattedMessage id="error404.buttom" defaultMessage="Back to main page" />
							</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
