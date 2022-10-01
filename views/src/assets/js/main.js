(function() {
	// 	//*------------------------------------------------------------
	// 	//!--------------------------- Menú ---------------------------
	// 	//*------------------------------------------------------------
	const enlaces = document.getElementsByClassName('header__nav')[0];
	const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
	const menuHamburguesa = document.getElementById('hamburguesa');
	let abierto = false;
	const toggleMenu = () => {
		enlaces.classList.toggle('header__nav2');
		enlaces.style.transtion = 'transform 0.5s ease-in-out all';
	};
	menuHamburguesa.addEventListener('click', function() {
		toggleMenu();
		if (document.querySelector('.header__nav.header__nav2')) {
			abierto = true;
			menuHamburguesa.classList.remove('fa-bars');
			menuHamburguesa.classList.add('fa-times');
		} else {
			abierto = false;
			menuHamburguesa.classList.add('fa-bars');
			menuHamburguesa.classList.remove('fa-times');
		}
	});
	window.addEventListener('click', function(e) {
		if (abierto) {
			if (e.target !== menuHamburguesa && e.target !== enlaces) {
				toggleMenu();
				abierto = false;
				menuHamburguesa.classList.add('fa-bars');
				menuHamburguesa.classList.remove('fa-times');
			}
		}
	});
	window.addEventListener('resize', function() {
		if (Screen.width > 668) {
			if (abierto) {
				toggleMenu();
				enlaces.style.transtion = 'none';
				abierto = false;
				menuHamburguesa.classList.add('fa-bars');
				menuHamburguesa.classList.remove('fa-times');
			}
		}
	});
	// 	// *------------------------------------------------------------
	// 	//!--------------------------- Enlaces ---------------------------
	// 	//*------------------------------------------------------------
	var anchuraHeader = header.offsetHeight + header.clientHeight;
	let informacion = document.querySelector('.informacion'),
		habilidades = document.querySelector('.habilidades'),
		formulario = document.querySelector('.formulario');
	var informacionMarginTop = informacion.offsetTop,
		habilidadesMarginTop = habilidades.offsetTop,
		formularioMarginTop = formulario.offsetTop,
		enlace_sobre_mi = document.getElementById('sobre_mi'),
		enlace_habilidades = document.getElementById('habilidades'),
		enlace_contacto = document.getElementById('contacto');
	// 	// if(header.offsetHeight === header.clientHeight){
	// 	//     alert('Hola mundo');
	// 	// }
	// 	var direccionEnlaces = (direcion, reducir) => {
	// 		window.scrollTo({
	// 			top: direcion - reducir,
	// 			behavior: 'smooth',
	// 		});
	// 	};
	// 	enlace_sobre_mi.addEventListener('click', () => {
	// 		direccionEnlaces(informacionMarginTop, anchuraHeader);
	// 	});
	// 	enlace_habilidades.addEventListener('click', () => {
	// 		direccionEnlaces(habilidadesMarginTop, anchuraHeader);
	// 	});
	// 	enlace_contacto.addEventListener('click', () => {
	// 		direccionEnlaces(formularioMarginTop, anchuraHeader);
	// 	});
	// console.log("la altura de about es de " + informacionMarginTop);
	// console.log("la altura de habilidades es de " + habilidadesMarginTop);
	// console.log("la altura de contacto es de " + formularioMarginTop);
	// console.log("la altura del header es de " + anchuraHeader);
	// var header = document.getElementById("header"); var anchura = header.offsetHeight;console.log(anchura);
	// console.log(anchuraHeader.clientHeight);
	// window.onload = function() { console.log(anchura);}
	// header.addEventListener("click", function() { console.log(anchura);})
	// enlace_sobre_mi.addEventListener("click", () => {
	//     window.scrollTo({
	//         top: informacionMarginTop - anchura,
	//         behavior: "smooth"
	//     });
	//     console.log("Se dio click en about");
	// })
	// console.log(informacionMarginTop);
})();
