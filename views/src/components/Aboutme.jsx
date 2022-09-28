import React from 'react';
import ImgProfile from '../assets/img/foto.jpeg';

export default function Aboutme() {
	return (
		<>
			{/* <!--*=========================== Sobre mí ===========================--> */}
			<h1 className="informacion__titulo" id="sobre_mi">
				Sobre mí
			</h1>
			<div className="informacion__primer--parrafo">
				<div className="informacion__principal">
					<p>
						Soy Jhon Camargo, la persona que se esconde tras estas l&#237;neas y pertenezco a esa generaci&#243;n que
						llaman centennials.
					</p>

					<p>
						Nací de uno de los tres países más bellos de la Tierra. Allí hay una explosión de vida. Miles de especies
						multicolores en los mares, en los cielos, en las tierras... crecí en la tierra de las mariposas amarillas
						y de la magia. Mi país es bello porque tiene la Selva Amazónica, la del Chocó, las aguas, las cordilleras
						de los Andes, y los océanos. Soy Colombiano.
					</p>

					<p>
						Crec&#237; en un mundo en donde la tecnolog&#237;a innovaba cada d&#237;a, vi como cambiamos del celular
						de teclas al Smartphone, vi como cada vez la tecnolog&#237;a estaba m&#225;s presente en nuestro d&#237;a
						a d&#237;a. Hasta el d&#237;a de hoy, en donde todo se mueve a partir de ella. Me alegra poder ser parte
						de esta era y contribuir con mi conocimiento.
					</p>
				</div>

				{/* <!--!==============================================================-->
                                <!--!================= Imagen =================-->
                    <!--!==============================================================--> */}
				<div className="informacion__imagen">
					<img src={ImgProfile} loading="lazy" alt="Jhon Camargo, Programador" className="informacion__img" />
				</div>
			</div>
		</>
	);
}
