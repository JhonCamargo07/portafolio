(function() {
	if (!localStorage.getItem('lang')) {
		localStorage.setItem('lang', 'en-US');
	}
	if (!localStorage.getItem('theme')) {
		localStorage.setItem('theme', 'dark');
	}
	function navegador() {
		const agente = navigator.userAgent;
		const navegadores = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Trident', 'MSIE', 'Edge'];

		for (let i in navegadores) {
			if (agente.indexOf(navegadores[i]) !== -1) return navegadores[i];
		}
	}

	const browser = navegador();
	if (browser === 'Trident') {
		alert(
			'¿Estás en Internet Explorer? Este navegador no es compatible con la página, intenta usar otro como Firefox, Chrome o cualquier otro.'
		);
		const IE = document.getElementById('error__ie');

		IE.innerHTML =
			'Si estás en Internet Explorer, intenta usar otro navegador como Firefox, Chrome o cualquier otro, ya que Internet Explorer NO es compatible con la página. Esto sucede porque Internet Explorer no soporta las nuevas tecnologías.';
		IE.classList.add('error__ie');
	}
})();
