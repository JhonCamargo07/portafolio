import React from 'react';

export default function Form() {
	return (
		<>
			<div className="formulario margin-bottom mb-4" id="contacto">
				<h1 className="formulario__titulo informacion__titulo">Contáctame</h1>
				{/* <!--*=========================== Inicio formulario ===========================--> */}
				<form action="" method="POST" name="formulario" className="formulario__form" id="formulario">
					{/* <!-- Grupo nombre --> */}
					<div className="formulario__grupo" id="grupo__nombre">
						<label className="formulario__label px-0">
							Nombre <span className="required">*</span>
							<div className="formulario__grupo-input">
								<input
									type="text"
									className="formulario__input"
									id="nombre"
									name="nombre"
									placeholder="John Doe"
									title="Solo se aceptan letras"
								/>
								<i className="formulario__validacion-estado fas fa-times-circle"></i>
							</div>
						</label>
						<p className="formulario__input-error">
							El nombre debe ser de 7 a 60 caracteres, solo puede contener letras y no puede estar vac&#237;o
						</p>
					</div>

					{/* <!-- Grupo correo --> */}
					<div className="formulario__grupo" id="grupo__correo">
						<label className="formulario__label px-0">
							Correo Electr&#243;nico <span className="required">*</span>
							<div className="formulario__grupo-input">
								<input
									type="text"
									className="formulario__input"
									id="correo"
									name="correo"
									placeholder="correo@correo.com"
									title="Escribe un correo electronico valida para poder contactarme contigo"
								/>
								<i className="formulario__validacion-estado fas fa-times-circle"></i>
							</div>
						</label>
						<p className="formulario__input-error">
							El correo solo puede contener letras, n&#250;meros, puntos, guiones, guion bajo, debe ser un correo
							v&#225;lido y no puede estar vac&#237;o
						</p>
					</div>

					{/* <!-- Grupo asunto --> */}
					<div className="formulario__grupo" id="grupo__asunto">
						<label className="formulario__label px-0">
							Asunto <span className="required">*</span>
							<div className="formulario__grupo-input">
								<input
									type="text"
									className="formulario__input"
									id="asunto"
									name="asunto"
									placeholder="Solicutud de tus servicios"
									title="Escribe el titulo o una breve descripción de tu mensaje"
								/>
								<i className="formulario__validacion-estado fas fa-times-circle"></i>
							</div>
						</label>
						<p className="formulario__input-error">
							El asunto debe ser de 10 a 100 caracteres, solo puede contener letras, n&#250;meros, puntos, guiones,
							guion bajo y no puede estar vac&#237;o
						</p>
					</div>

					{/* <!-- Grupo mensaje --> */}
					<div className="formulario__grupo" id="grupo__mensaje">
						<label className="formulario__label px-0">
							Mensaje <span className="required">*</span>
							<div className="formulario__grupo-input">
								<textarea
									name="mensaje"
									className="formulario__textarea"
									id="mensaje"
									rows="5"
									placeholder="Cuentame cual es el motivo por el que me contactas"
									title="Describe tu mensaje..."></textarea>
								<i className="formulario__validacion-estado fas fa-times-circle"></i>
							</div>
						</label>
						<p className="formulario__input-error">
							El mensaje debe tener m&#237;nimo 10 caracteres, solo puede contener letras, n&#250;meros, puntos,
							guiones, guion bajo y no puede estar vac&#237;o
						</p>
					</div>

					<div className="formulario__mensaje" id="formulario__mensaje">
						<p>
							<i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario
							correctamente
						</p>
					</div>

					{/* <!-- Grupo boton --> */}
					<div className="formulario__grupo formulario__grupo-btn-enviar">
						<button type="submit" name="enviar" className="formulario__btn">
							Enviar
						</button>
						<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">
							Formulario enviado exitosamente!
						</p>
					</div>
				</form>
			</div>
		</>
	);
}
