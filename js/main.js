(function(){
    let parallax = document.querySelector('.parallax__imagen');
    let parallax__titulo = document.querySelector('.parallax__titulo');
    var contenedorP = document.getElementById('contenedor_parallax'),
        header = document.getElementById('header');
        altura = contenedorP.offsetTop,
        iconoSubir = document.getElementById('icono_subir'),
        icono_nav = document.getElementById('icono_nav');


    // Función para la imagen
    function scrollParallax(){
        let scrollTop = document.documentElement.scrollTop;
        parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
        parallax__titulo.style.transform = 'translateY(' + scrollTop * 0.4 + 'px)';
    }

    window.addEventListener('scroll', scrollParallax);

    // Función para el nav
    var modificarNav = function(){
        if(document.documentElement.scrollTop > 10){
            header.classList.add('header2');
            contenedorP.style.marginTop = altura - 40 + "px";
        }else{
            header.classList.remove('header2');
            contenedorP.style.marginTop = "0px";
        }
    }

    window.addEventListener('scroll', modificarNav);

    // Función para el boton de ir arriba
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 100){
            iconoSubir.classList.remove("icono__none");
            iconoSubir.classList.add("icono__flex");
        }else{
            iconoSubir.classList.remove("icono__flex");
            iconoSubir.classList.add("icono__none");
        }
    }

    iconoSubir.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    //*--------------------------- Desplegar menú ---------------------------

    icono_nav.addEventListener("click", () => {
        if(icono_nav.className = "fa-bars"){
            icono_nav.classList.remove("icono icono__nav fas fa-bars");
            icono_nav.classList.add("icono icono__nav fasfa-times");
        }else{
            icono_nav.classList.add("icono icono__nav fas fa-bars");
            icono_nav.classList.remove("icono icono__nav fas fa-times");
        }
    });

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
    });
}())