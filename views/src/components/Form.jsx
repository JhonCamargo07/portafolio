import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Formulario() {
	const [submittedForm, setSubmittedForm] = useState(null);

	const expresions = {
		name: /^[a-zA-ZÀ-ÿ\s]{7,60}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		motive: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,100}$/,
		message: /^[a-zA-ZÀ-ÿ0-9_.,+-\s$%/¿?¡!:@?\uD800-\uDBFF\u2702-\u27B0\uF680-\uF6C0\u24C2-\uF251]{10,100000}$/,
	};

	const inputCorrect = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
	};

	const inputIncorrect = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} .formulario__input-error`).classList.add('formulario__input-error-activo');
	};

	const clearInputs = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
	};

	return (
		<>
			<div className="formulario margin-bottom mb-4" id="contact">
				<h1 className="formulario__titulo informacion__titulo">
					<FormattedMessage id="form.title" defaultMessage="Portfolio" />
				</h1>
				{/* <!--*=========================== Inicio formulario ===========================--> */}
				<Formik
					initialValues={{
						name: '',
						email: '',
						motive: '',
						message: '',
					}}
					validate={(values) => {
						let errors = {};

						// Validate name
						if (!values.name) {
							errors.name = <FormattedMessage id="form.input.name.empty" defaultMessage="Please enter your name" />;
							inputIncorrect('name');
						} else if (!expresions.name.test(values.name)) {
							errors.name = (
								<FormattedMessage
									id="form.input.name.incorrect"
									defaultMessage="The name can only contain letters and spaces"
								/>
							);
							inputIncorrect('name');
							setSubmittedForm(false);
						} else {
							inputCorrect('name');
							setSubmittedForm(null);
						}

						// Validate email
						if (!values.email) {
							errors.email = (
								<FormattedMessage id="form.input.email.empty" defaultMessage="Please enter your email address" />
							);
							inputIncorrect('email');
						} else if (!expresions.email.test(values.email)) {
							errors.email = (
								<FormattedMessage
									id="form.input.email.incorrect"
									defaultMessage="Mail can only contain letters, numbers, periods, hyphens and underscores"
								/>
							);
							inputIncorrect('email');
							setSubmittedForm(false);
						} else {
							inputCorrect('email');
							setSubmittedForm(null);
						}

						// Validate motive
						if (!values.motive) {
							errors.motive = (
								<FormattedMessage
									id="form.input.motive.empty"
									defaultMessage="Please enter the reason why you are contacting me"
								/>
							);
							inputIncorrect('motive');
						} else if (!expresions.motive.test(values.motive)) {
							errors.motive = (
								<FormattedMessage
									id="form.input.motive.incorrect"
									defaultMessage="The motif must be between 10 and 100 characters long and can only contain letters, numbers, periods, hyphens and underscoressss"
								/>
							);
							inputIncorrect('motive');
							setSubmittedForm(false);
						} else {
							inputCorrect('motive');
							setSubmittedForm(null);
						}

						// Validate message
						if (!values.message) {
							errors.message = (
								<FormattedMessage id="form.input.message.empty" defaultMessage="Please enter your message" />
							);
							inputIncorrect('message');
						} else if (!expresions.message.test(values.message)) {
							errors.message = (
								<FormattedMessage
									id="form.input.message.incorrect"
									defaultMessage="The message must be at least 10 characters long, it can only contain letters, numbers, dots, hyphens, underscores, underscores, hyphens, and underscores"
								/>
							);
							inputIncorrect('message');
						} else {
							inputCorrect('message');
							setSubmittedForm(null);
						}

						if (
							!expresions.name.test(values.name) &&
							!expresions.email.test(values.email) &&
							!expresions.motive.test(values.motive) &&
							!expresions.message.test(values.message) &&
							!values.name &&
							!values.email &&
							!values.motive &&
							!values.message
						) {
							setSubmittedForm(false);
						}

						return errors;
					}}
					onSubmit={(values, { resetForm }) => {
						resetForm();
						clearInputs('name');
						clearInputs('email');
						clearInputs('motive');
						clearInputs('message');
						setSubmittedForm(true);
						setTimeout(() => setSubmittedForm(null), 5000);
					}}
				>
					{({ errors }) => (
						// action="" method="POST"
						<Form className="formulario__form" name="formulario" id="form">
							{/* <!-- Grupo name --> */}
							<div className="formulario__grupo" id="grupo__name">
								<label htmlFor="name" className="formulario__label px-0">
									<FormattedMessage id="form.label.name" defaultMessage="Name" />
									<span className="required"> *</span>
								</label>
								<div className="formulario__grupo-input">
									<Field type="text" className="formulario__input" id="name" name="name" />
									<i className="formulario__validacion-estado fas fa-times-circle"></i>
								</div>
								<p className="formulario__input-error">
									<ErrorMessage name="name" component={() => <span>{errors.name}</span>} />
								</p>
							</div>

							{/* <!-- Grupo email --> */}
							<div className="formulario__grupo" id="grupo__email">
								<label htmlFor="email" className="formulario__label px-0">
									<FormattedMessage id="form.label.email" defaultMessage="Email" />
									<span className="required"> *</span>
								</label>
								<div className="formulario__grupo-input">
									<Field
										type="text"
										className="formulario__input"
										id="email"
										name="email"
										// placeholder="correo@correo.com"
										title="Escribe un correo electronico valida para poder contactarme contigo"
									/>
									<i className="formulario__validacion-estado fas fa-times-circle"></i>
								</div>
								<p className="formulario__input-error">
									<ErrorMessage name="email" component={() => <span>{errors.email}</span>} />
								</p>
							</div>

							{/* <!-- Grupo motive --> */}
							<div className="formulario__grupo" id="grupo__motive">
								<label htmlFor="motive" className="formulario__label px-0">
									<FormattedMessage id="form.label.motive" defaultMessage="Motive" />
									<span className="required"> *</span>
								</label>
								<div className="formulario__grupo-input">
									<Field
										type="text"
										className="formulario__input"
										id="motive"
										name="motive"
										// placeholder="Solicutud de tus servicios"
										title="Escribe el titulo o una breve descripción de tu mensaje"
									/>
									<i className="formulario__validacion-estado fas fa-times-circle"></i>
								</div>
								<p className="formulario__input-error">
									<ErrorMessage name="motive" component={() => <span>{errors.motive}</span>} />
								</p>
							</div>

							{/* <!-- Grupo message --> */}
							<div className="formulario__grupo" id="grupo__message">
								<label htmlFor="message" className="formulario__label px-0">
									<FormattedMessage id="form.label.message" defaultMessage="Message" />
									<span className="required"> *</span>
								</label>
								<div className="formulario__grupo-input">
									<Field
										as="textarea"
										name="message"
										className="formulario__textarea"
										id="message"
										rows="5"
										// placeholder=""
										title="Describe tu mensaje..."
									></Field>
									<i className="formulario__validacion-estado fas fa-times-circle"></i>
								</div>
								<p className="formulario__input-error">
									<ErrorMessage name="message" component={() => <span>{errors.message}</span>} />
								</p>
							</div>

							<div className="formulario__mensaje" id="formulario__mensaje">
								{!submittedForm && submittedForm !== null && (
									<p>
										<i className="fas fa-exclamation-triangle"></i> <b>Error: </b>
										<FormattedMessage
											id="form.message.incorrect"
											defaultMessage="Please fill in the form correctlyss"
										/>
									</p>
								)}
							</div>

							{/* <!-- Grupo boton --> */}
							<div className="formulario__grupo formulario__grupo-btn-enviar">
								<button type="submit" name="enviar" className="formulario__btn">
									<FormattedMessage id="form.buttom" defaultMessage="Send" />
								</button>
								<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">
									{submittedForm && (
										<span>
											<FormattedMessage
												id="form.message.correct"
												defaultMessage="\u00a1Form successfully submitted!"
											/>
										</span>
									)}
								</p>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
