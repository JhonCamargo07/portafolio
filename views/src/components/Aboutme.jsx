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
						Nac&#237; de uno de los tres pa&#237;ses m&#225;s bellos de la Tierra. All&#237; hay una explosi&#243;n de
						vida. Miles de especies multicolores en los mares, en los cielos, en las tierras... crec&#237; en la
						tierra de las mariposas amarillas y de la magia. Mi pa&#237;s es bello porque tiene la Selva
						Amaz&#243;nica, la del Choc&#243;, las aguas, las cordilleras de los Andes, y los oc&#233;anos. Soy
						Colombiano.
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
