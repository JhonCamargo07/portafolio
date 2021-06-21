let parallax = document.querySelector('.parallax__imagen');
let parallax__titulo = document.querySelector('.parallax__titulo');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
    parallax__titulo.style.transform = 'translateY(' + scrollTop * 0.4 + 'px)';
}

window.addEventListener('scroll', scrollParallax);