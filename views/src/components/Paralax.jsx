import React from 'react';
import ImgCode from '../assets/img/parallax.jpg';

export default function Paralax() {
	return (
		<>
			<section className="parallax" id="contenedor_parallax">
				<div>
					<img src={ImgCode} alt="" className="parallax__imagen" />
				</div>
				<h1 className="parallax__titulo">¡Hola Mundo!</h1>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#1f1f1f"
						fill-opacity="1"
						d="M0,128L48,154.7C96,181,192,235,288,261.3C384,288,480,288,576,261.3C672,235,768,181,864,144C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
			</section>
		</>
	);
}
