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
			</section>
		</>
	);
}
