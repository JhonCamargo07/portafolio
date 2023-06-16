import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../assets/img/logo_jhon_camargo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
	const [iconActive, setIconActive] = useState(false);

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 300) {
			return setIconActive(true);
		}
		setIconActive(false);
	});

	const goUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// document.oncontextmenu = () => {
	// 	return false;
	// };

	const goToSection = () => {
		const position = document.getElementById('form').offsetTop;
		const headerHeight = document.getElementById('header').offsetHeight;
		window.scrollTo({
			top: position - headerHeight - headerHeight,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<footer>
				<div className="footer">
					<div className="footer__main">
						<a href="http://jhoncamargo.000webhostapp.com/" className="header__enlace">
							<img src={logo} loading="lazy" alt="" className="header__logo" />
						</a>
						<div className="footer__enlaces">
							<Link to="/" onClick={goToSection} className="enlace__footer">
								<FormattedMessage id="header.contact" defaultMessage="Contact" />
							</Link>
							<Link to="/incomplete" className="enlace__footer">
								<FormattedMessage id="footer.projects" defaultMessage="Projects" />
							</Link>
							<Link to="/incomplete" className="enlace__footer">
								<FormattedMessage id="footer.notice.legal" defaultMessage="Legal notice" />
							</Link>
						</div>
					</div>
					<div className="footer__secondary">
						<p>
							&#169; 2022 <FormattedMessage id="footer.description" defaultMessage="Portfolio" />
							<a href="http://jhoncamargo.000webhostapp.com/" className="enlace__footer">
								<FormattedMessage id="footer.description.name" defaultMessage=" Jhon Camargo" />
							</a>{' '}
							v3.0
						</p>
						<div className="footer__icons">
							<Link
								to="/"
								onClick={(event) => {
									event.preventDefault();
									window.open('https://github.com/JhonCamargo07');
								}}
								className="icono"
								title="Ir a Github"
							>
								<i className=" fab fa-github"></i>
							</Link>
							<Link
								to="/"
								onClick={(event) => {
									event.preventDefault();
									window.open('https://www.linkedin.com/in/jhon-alexander-camargo-cadena-53788a1aa/');
								}}
								className="icono"
								title="Ir a Linkedin"
							>
								<i className=" fab fa-linkedin-in"></i>
							</Link>
						</div>
					</div>
				</div>
			</footer>
			{iconActive && (
				<div className="icono icono__subir" onClick={goUp} id="icono_subir">
					<i className="fas fa-chevron-up"></i>
				</div>
			)}
		</>
	);
}
