import React from 'react';
import ReactDOM from 'react-dom/client';
import { LangProvider } from './context/context.js';
import Router from './router/Router';
import './assets/css/style.css';
import './assets/css/normalize.min.css';
import './assets/js/navegador.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<LangProvider>
			<Router />
		</LangProvider>
	</React.StrictMode>
);
