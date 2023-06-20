import React from 'react';
import imgBlack from './../assets/img/homero.png';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export default function DivError403() {
	return (
		<>
			<main className="error">
				<div className="error__container">
					<div className="error__imagen">
						<img src={imgBlack} loading="lazy" alt="Simbolo de error 403, homero simpsons" className="error__img" />
					</div>
					<div className="error__information">
						<h1 className="error__title">
							<FormattedMessage id="error403.title" defaultMessage="Sorry, access denied" />
						</h1>
						<p>
							<FormattedMessage id="error403.p1" defaultMessage="But don't worry, it's just a 403 error!" />
						</p>
						<p>
							<FormattedMessage
								id="error403.p2"
								defaultMessage="It is possible that the link is misspelled or that you do not have privileges to access this content."
							/>
						</p>
						<Link to="/" className="">
							<button className="error__link">
								<FormattedMessage id="error403.buttom" defaultMessage="Back to main page" />
							</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
