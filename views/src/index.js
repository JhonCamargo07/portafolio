import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/normalize.min.css';
import './assets/css/style.css';
import Router from './router/Router';
import { LangProvider } from './context/context.js';
import './assets/js/navegador.js';

ReactDOM.render(
	<React.StrictMode>
		<LangProvider>
			<Router />
		</LangProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// ReactDOM.render(
// 	<LangProvider>
// 		<Router />
// 	</LangProvider>,
// 	document.getElementById('root')
// );
