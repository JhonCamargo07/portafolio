import React from 'react';
import logo from '../assets/img/logo_jhon_camargo.png';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Header() {
	return (
		<>
			<header className="header" id="header">
				<a href="http://jhoncamargo.000webhostapp.com/" className="header__enlace">
					<img src={logo} loading="lazy" alt="" className="header__logo" />
				</a>
				<p id="error__ie"></p>
				<nav className="header__nav">
					<NavLink to="/" className="header__enlaces" id="sobre_mi">
						<i className="icono__nav fas fa-user"></i>
						<FormattedMessage id="header.about" defaultMessage="About me" />
					</NavLink>
					<NavLink to="/skills" className="header__enlaces" id="habilidades">
						<i className="icono__nav fas fa-toolbox"></i>
						<FormattedMessage id="header.skills" defaultMessage="Skills" />
					</NavLink>
					<NavLink to="/contact" className="header__enlaces" id="contacto">
						<i className="icono__nav fas fa-id-badge"></i>
						<FormattedMessage id="header.contact" defaultMessage="Contact" />
					</NavLink>
				</nav>
				<nav className="header__nav">
					<NavLink to="/contact" className="header__enlaces" id="contacto">
						<i className="icono__nav fas fa-id-badge"></i>Lang
					</NavLink>
				</nav>
				<div className="hamburguesa">
					<i className="icono icono__hamburguesa fas fa-bars" id="hamburguesa"></i>
				</div>
			</header>
		</>
	);
}
