import React from 'react';

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__iconos">
					<a
						href="https://www.facebook.com/jhonalex.camargo.902/"
						className="icono"
						target="_blank"
						title="Ir a Facebook">
						<i className=" fab fa-facebook-f"></i>
					</a>
					<a href="https://twitter.com/JhonCamargo21" className="icono" target="_blank" title="Ir a Twitter">
						<i className=" fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/jhon-alexander-camargo-cadena-53788a1aa/"
						className="icono"
						target="_blank"
						title="Ir a Linkedin">
						<i className=" fab fa-linkedin-in"></i>
					</a>
					<a href="https://github.com/JhonCamargo07" className="icono" target="_blank" title="Ir a Github">
						<i className=" fab fa-github"></i>
					</a>
				</div>
				<div className="footer__parrafo">
					<p>
						Portafolio{' '}
						<a href="" className="enlace__footer">
							Jhon Camargo
						</a>
					</p>
					<p>Versión 1.2 | Copyright © </p>
				</div>
				<p className="footer__parrafo">Está página fue desarrollada con html, css, javaScript y php</p>
				<div className="footer__parrafo">
					<a href="aviso-legal.php" className="enlace__footer">
						Aviso legal
					</a>
					<a href="proyectos.php" className="enlace__footer">
						Proyectos
					</a>
					<p></p>
				</div>
			</footer>
		</>
	);
}
