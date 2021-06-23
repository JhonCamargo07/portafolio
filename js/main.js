let parallax = document.querySelector('.parallax__imagen');
let parallax__titulo = document.querySelector('.parallax__titulo');
var contenedorP = document.getElementById('contenedor_parallax'),
    header = document.getElementById('header');
    altura = contenedorP.offsetTop,
    iconoSubir = document.getElementById('icono_subir'),
    icono_nav = document.getElementById('icono_nav');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
    parallax__titulo.style.transform = 'translateY(' + scrollTop * 0.4 + 'px)';
}

window.addEventListener('scroll', scrollParallax);

var modificarNav = function(){
    if(document.documentElement.scrollTop > 10){
        header.classList.add('header2');
        contenedorP.style.marginTop = altura - 40 + "px";
        iconoSubir.classList.remove("icono__none");
        iconoSubir.classList.add("icono__flex");
    }else{
        header.classList.remove('header2');
        contenedorP.style.marginTop = "0px";
        iconoSubir.classList.remove("icono__flex");
        iconoSubir.classList.add("icono__none");
    }
}

window.addEventListener('scroll', modificarNav);
