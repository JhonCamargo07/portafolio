
    //*------------------------------------------------------------
    //!--------------------------- Validacion del formulario ---------------------------
    //*------------------------------------------------------------

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input, textarea');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,50}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-ZÀ-ÿ0-9_.+-\s/¿?!:@?]{1,10000}$/
    }

    const campos = {
        nombre: false,
        correo: false,
        mensaje: false
    }

    const validarFormulario = (e) => {
        switch(e.target.name){
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;

            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
            break;

            case "mensaje":
                if(expresiones.mensaje.test(e.target.value)){
                    document.getElementById('grupo__mensaje').classList.remove('formulario__grupo-textarea-incorrecto');
                    document.getElementById('grupo__mensaje').classList.add('formulario__grupo-textarea-correcto');
                    document.querySelector('#grupo__mensaje i').classList.add('fa-check-circle');
                    document.querySelector('#grupo__mensaje i').classList.remove('fa-times-circle');
                    document.querySelector('#grupo__mensaje .formulario__input-error').classList.remove('formulario__input-error-activo');
                }else{
                    document.getElementById('grupo__mensaje').classList.add('formulario__grupo-textarea-incorrecto');
                    document.getElementById('grupo__mensaje').classList.remove('formulario__grupo-textarea-correcto');
                    document.querySelector('#grupo__mensaje i').classList.add('fa-times-circle');
                    document.querySelector('#grupo__mensaje i').classList.remove('fa-check-circle');
                    document.querySelector('#grupo__mensaje .formulario__input-error').classList.add('formulario__input-error-activo');
                }
            break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        }else{
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if(campos.nombre && campos.correo && campos.mensaje){
            formulario.reset();
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            
            setTimeout( () => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            // document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            //     icono.classList.remove('formulario__grupo-correcto');
		    // });
            
        }else{
            // document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });

    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        if(campos.nombre && campos.correo && campos.mensaje){
            formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
