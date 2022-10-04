import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../assets/img/logo_jhon_camargo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
	const [iconActive, setIconActive] = useState(false);

	window.addEventListener('scroll', () => {
		// console.log(document.documentElement.scrollTop > 300);
		if (document.documentElement.scrollTop > 300) {
			setIconActive(true);
		} else {
			setIconActive(false);
		}
	});

	const goUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	document.oncontextmenu = () => {
		return false;
	};
	// document.oncopy = () => {
	// 	return false;
	// };
	// document.oncut = () => {
	// 	return false;
	// };
	// document.onpaste = () => {
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
							{/* <p>
								<FormattedMessage id="footer.copyright" defaultMessage="Version 2.0 | Copyright" />
							</p>
							<p className="footer__parrafo">
								<FormattedMessage
									id="footer.technologies"
									defaultMessage="This page was developed with React, Sass and PHP."
								/>
							</p> */}
							<Link to="/" onClick={goToSection} className="enlace__footer">
								<FormattedMessage id="header.contact" defaultMessage="Contact" />
							</Link>
							<a href="proyectos.php" className="enlace__footer">
								<FormattedMessage id="footer.projects" defaultMessage="Projects" />
							</a>
							<a href="aviso-legal.php" className="enlace__footer">
								<FormattedMessage id="footer.notice.legal" defaultMessage="Legal notice" />
							</a>
						</div>
					</div>
					<div className="footer__secondary">
						<p>
							&#169; {new Date().getFullYear() + ''}{' '}
							<FormattedMessage id="footer.description" defaultMessage="Portfolio" />
							<a href="http://jhoncamargo.000webhostapp.com/" className="enlace__footer">
								<FormattedMessage id="footer.description.name" defaultMessage=" Jhon Camargo" />
							</a>
						</p>
						<div className="footer__icons">
							<Link
								to="/"
								onClick={(event) => {
									event.preventDefault();
									window.open('https://www.facebook.com/jhonalex.camargo.902/');
								}}
								className="icono"
								title="Ir a Facebook"
							>
								<i className=" fab fa-facebook-f"></i>
							</Link>
							<Link
								to="/"
								onClick={(event) => {
									event.preventDefault();
									window.open('https://twitter.com/JhonCamargo21');
								}}
								className="icono"
								title="Ir a Twitter"
							>
								<i className=" fab fa-twitter"></i>
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
