import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

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

	return (
		<>
			<footer className="footer">
				<div className="footer__iconos">
					<a href="https://www.facebook.com/jhonalex.camargo.902/" className="icono" title="Ir a Facebook">
						<i className=" fab fa-facebook-f"></i>
					</a>
					<a href="https://twitter.com/JhonCamargo21" className="icono" title="Ir a Twitter">
						<i className=" fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/jhon-alexander-camargo-cadena-53788a1aa/"
						className="icono"
						// target="_blank"
						title="Ir a Linkedin"
					>
						<i className=" fab fa-linkedin-in"></i>
					</a>
					<a href="https://github.com/JhonCamargo07" className="icono" title="Ir a Github">
						<i className=" fab fa-github"></i>
					</a>
				</div>
				<div className="footer__parrafo">
					<p>
						<FormattedMessage id="footer.description" defaultMessage="Portfolio" />
						<a href="http://jhoncamargo.000webhostapp.com/" className="enlace__footer">
							<FormattedMessage id="footer.description.name" defaultMessage=" Jhon Camargo" />
						</a>
					</p>
					<p>
						<FormattedMessage id="footer.copyright" defaultMessage="Version 2.0 | Copyright" />
					</p>
				</div>
				<p className="footer__parrafo">
					<FormattedMessage
						id="footer.technologies"
						defaultMessage="This page was developed with React, Sass and PHP."
					/>
				</p>
				<div className="footer__parrafo">
					<a href="aviso-legal.php" className="enlace__footer">
						<FormattedMessage id="footer.notice.legal" defaultMessage="Legal notice" />
					</a>
					<a href="proyectos.php" className="enlace__footer">
						<FormattedMessage id="footer.projects" defaultMessage="Projects" />
					</a>
					<p></p>
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
