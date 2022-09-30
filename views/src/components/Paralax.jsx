import React from 'react';
import ImgCode from '../assets/img/parallax.jpg';
import { FormattedMessage } from 'react-intl';

export default function Paralax() {
	return (
		<>
			<section className="parallax" id="contenedor_parallax">
				<div className="bg-paralax">
					<div>{/* <img src={ImgCode} alt="" className="parallax__imagen" /> */}</div>
					<div className="parallax__titulo">
						<h1 className="">
							<FormattedMessage id="paralax.title" defaultMessage="&#161;Hello world!" />
						</h1>
					</div>
				</div>
			</section>
		</>
	);
}
