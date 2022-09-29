import React from 'react';
import ImgProfile from '../assets/img/foto.jpeg';
import { FormattedMessage } from 'react-intl';

export default function Aboutme() {
	return (
		<>
			{/* <!--*=========================== Sobre mí ===========================--> */}
			<h1 className="informacion__titulo" id="sobre_mi">
				<FormattedMessage id="information.about.title" defaultMessage="About me" />
			</h1>
			<div className="informacion__primer--parrafo">
				<div className="informacion__principal">
					<p>
						<FormattedMessage
							id="information.about.p1"
							defaultMessage="I was born in one of the three most beautiful countries on Earth. There is an explosion of life there. Thousands of multicolored species in the seas, in the skies, in the lands... I grew up in the land of yellow butterflies and magic. This country is beautiful because it has the Amazon jungle, the Choco jungle, the waters, the Andes mountain ranges, and the oceans. I am Colombian."
						/>
					</p>

					<p>
						<FormattedMessage
							id="information.about.p2"
							defaultMessage="I was born in one of the three most beautiful countries on Earth. There is an explosion of life there. Thousands of multicolored species in the seas, in the skies, in the lands... I grew up in the land of yellow butterflies and magic. This country is beautiful because it has the Amazon jungle, the Choco jungle, the waters, the Andes mountain ranges, and the oceans. I am Colombian."
						/>
					</p>

					<p>
						<FormattedMessage
							id="information.about.p3"
							defaultMessage="I grew up in a world where technology innovated every day, I saw how we changed from the keypad cell phone to the Smartphone, I saw how technology was more and more present in our daily lives. Until today, where everything moves from it. I am glad to be part of this era and contribute with my knowledge."
						/>
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
