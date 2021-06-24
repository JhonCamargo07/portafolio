(function(){
    let parallax = document.querySelector('.parallax__imagen');
    let parallax__titulo = document.querySelector('.parallax__titulo');
    var contenedorP = document.getElementById('contenedor_parallax'),
        header = document.getElementById('header');
        altura = contenedorP.offsetTop,
        iconoSubir = document.getElementById('icono_subir'),
        icono_nav = document.getElementById('icono_nav'),
        navegador = document.querySelector('.header__nav');


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

    // icono_nav.addEventListener("click", function() {
    //     if(icono_nav.className === 'icono icono__nav fas fa-bars'){
    //         icono_nav.classList.remove("fa-bars");
    //         icono_nav.classList.add("fa-times");
    //         navegador.classList.remove('header__nav2-oculto');
    //         navegador.classList.add('header__nav2');
    //     }else{
    //         icono_nav.classList.add("fa-bars");
    //         icono_nav.classList.remove("fa-times");
    //         navegador.classList.remove('header__nav2');
    //         navegador.classList.add('header__nav2-oculto');
    //     }
    // });
}())