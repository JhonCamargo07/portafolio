import React, { useContext, useState } from 'react';
import logo from '../assets/img/logo_jhon_camargo.png';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../context/context.js';
import en from './../assets/img/usa.png';
import es from './../assets/img/spain.png';
import sun from './../assets/img/sun.svg';
import moon from './../assets/img/moon.svg';

export default function Header() {
	const lang = useContext(langContext);

	const [altImg, setAltImg] = useState(localStorage.getItem('lang') === 'en-US' ? 'Ingl\u00e9s' : 'Spanish');
	const [titleImg, setTitleImg] = useState(
		localStorage.getItem('lang') === 'en-US' ? 'Change language to Spanish' : 'Cambiar idioma a ingl\u00e9s'
	);
	// const [menuOpen, setMenuOpen] = useState(false);

	const changeImgLang = () => {
		const btn = document.querySelector('#btn');
		const language = localStorage.getItem('lang');
		if (language) {
			if (language === 'es-CO') {
				// setImgLang(en);
				setAltImg('Ingl\u00e9s');
				setTitleImg('Cambiar idioma a ingl\u00e9s');
				btn.classList.remove('active');
			} else if (language === 'en-US') {
				// setImgLang(es);
				setAltImg('Spanish');
				setTitleImg('Change language to Spanish');
				btn.classList.add('active');
			} else {
				// setImgLang(es);
				setAltImg('Spanish');
				btn.classList.remove('active');
				setTitleImg('Change language to Spanish');
			}
		}
	};

	const toggleMenu = () => {
		const enlaces = document.getElementsByClassName('header__nav')[0];
		enlaces.classList.toggle('header__nav2');
		enlaces.style.transtion = 'transform 0.5s ease-in-out all';
		// if (document.querySelector('.header__nav.header__nav2')) {
		// 	setMenuOpen(true);
		// } else {
		// 	setMenuOpen(false);
		// }
	};

	const goToSection = (nameSection) => {
		const aboutPosition = document.getElementById('information').offsetTop;
		const skillsPosition = document.getElementById('skills').offsetTop;
		const formPosition = document.getElementById('form').offsetTop;
		const headerHeight = document.getElementById('header').offsetHeight;
		let position = 0;
		switch (nameSection) {
			case 'aboutme':
				position = aboutPosition;
				break;
			case 'skills':
				position = skillsPosition;
				break;
			case 'form':
				position = formPosition - headerHeight;
				break;
			default:
				position = 0;
		}
		window.scrollTo({
			top: position - headerHeight,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className="container">
				<header className="header" id="header">
					<a href="http://jhoncamargo.000webhostapp.com/" className="header__enlace">
						<img src={logo} loading="lazy" alt="" className="header__logo" />
					</a>
					<p id="error__ie"></p>
					<nav className="header__nav">
						<NavLink
							to="/"
							onClick={() => {
								goToSection('aboutme');
							}}
							className="header__enlaces"
							id="sobre_mi"
						>
							<i className="icono__nav fas fa-user"></i>
							<FormattedMessage id="header.about" defaultMessage="About me" />
						</NavLink>
						<NavLink
							to="/"
							onClick={() => {
								goToSection('skills');
							}}
							className="header__enlaces"
							id="habilidades"
						>
							<i className="icono__nav fas fa-toolbox"></i>
							<FormattedMessage id="header.skills" defaultMessage="Skills" />
						</NavLink>
						<NavLink
							to="/"
							onClick={() => {
								goToSection('form');
							}}
							className="header__enlaces"
							id="contacto"
						>
							<i className="icono__nav fas fa-id-badge"></i>
							<FormattedMessage id="header.contact" defaultMessage="Contact" />
						</NavLink>
						<button
							className="lang mx-2 header__nav--btn"
							id="btn"
							title={titleImg}
							onClick={() => {
								lang.establishLanguage();
								changeImgLang();
							}}
						>
							<img src={en} alt={altImg} />
							<img src={es} alt={altImg} />
						</button>
						<button
							className="switch header__nav--btn"
							onClick={() => {
								lang.establishDark();
							}}
						>
							<img src={sun} alt="Light" title="Switch to light mode" />
							<img src={moon} alt="Dark" title="Switch to dark mode" />
						</button>
					</nav>
					<div className="hamburguesa">
						<i
							className="icono icono__hamburguesa fas fa-bars"
							onClick={() => {
								toggleMenu();
							}}
							id="hamburguesa"
						></i>
					</div>
				</header>
			</div>
		</>
	);
}
