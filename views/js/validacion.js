//*------------------------------------------------------------
//!--------------------------- Validacion del formulario ---------------------------
//*------------------------------------------------------------

(function () {

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input, textarea');
    const form = document.getElementById('formulario');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{7,60}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        asunto: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,100}$/,
        mensaje: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,100000}$/
    }

    const campos = {
        nombre: false,
        correo: false,
        asunto: false,
        mensaje: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;

            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
                break;

            case "asunto":
                validarCampo(expresiones.asunto, e.target, 'asunto');
                break;

            case "mensaje":
                if (expresiones.mensaje.test(mensaje.value)) {
                    inputMsgCorrecto();
                    campos.mensaje = true;
                } else {
                    inputMsgIncorrecto();
                    campos.mensaje = false;
                }
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            inputCorrecto(campo);
            campos[campo] = true;
        } else {
            inputIncorrecto(campo);
            campos[campo] = false;
        }
    }

    const inputCorrecto = (nameInput) => {
        document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${nameInput} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }

    const inputIncorrecto = (nameInput) => {
        document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${nameInput} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }

    const inputMsgCorrecto = () => {
        document.getElementById('grupo__mensaje').classList.remove('formulario__grupo-textarea-incorrecto');
        document.getElementById('grupo__mensaje').classList.add('formulario__grupo-textarea-correcto');
        document.querySelector('#grupo__mensaje i').classList.add('fa-check-circle');
        document.querySelector('#grupo__mensaje i').classList.remove('fa-times-circle');
        document.querySelector('#grupo__mensaje .formulario__input-error').classList.remove('formulario__input-error-activo');
    }

    const inputMsgIncorrecto = () => {
        document.getElementById('grupo__mensaje').classList.add('formulario__grupo-textarea-incorrecto');
        document.getElementById('grupo__mensaje').classList.remove('formulario__grupo-textarea-correcto');
        document.querySelector('#grupo__mensaje i').classList.add('fa-times-circle');
        document.querySelector('#grupo__mensaje i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__mensaje .formulario__input-error').classList.add('formulario__input-error-activo');
    }


    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        if (campos.nombre && campos.correo && campos.asunto && campos.mensaje) {

            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            document.getElementById('grupo__mensaje').classList.remove('formulario__grupo-textarea-correcto');
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });

            campos[nombre] = false;
            campos[correo] = false;
            campos[asunto] = false;
            campos[mensaje] = false;

        } else {
            e.preventDefault();
            inputs.forEach((input) => {
                if (input.value == '') {
                    if (input.name === "mensaje") {
                        inputMsgIncorrecto();
                    } else {
                        inputIncorrecto(input.name);
                    }
                }
            });
        }
    });

}())