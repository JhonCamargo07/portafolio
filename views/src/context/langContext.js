import React, { useState } from 'react';
import MessageEnglish from './../lang/en-US.json';
import MessageSpanish from './../lang/es-CO.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
	let localeDefault;
	let messageDefault;
	const lang = localStorage.getItem('lang');

	if (lang) {
		localeDefault = lang;
		if (lang === 'es-CO') {
			messageDefault = MessageSpanish;
		} else if (lang === 'en-US') {
			messageDefault = MessageEnglish;
		} else {
			localeDefault = 'en-US';
			messageDefault = MessageEnglish;
		}
	}

	const [message, setMessage] = useState(messageDefault);
	const [locale, setLocale] = useState(localeDefault);

	const establishLanguage = (language) => {
		switch (language) {
			case 'es-CO':
				setMessage(MessageSpanish);
				setLocale('es-CO');
				localStorage.setItem('lang', 'es-CO');
				break;
			case 'en-US':
				setMessage(MessageEnglish);
				setLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				setMessage(MessageEnglish);
				setLocale('en-US');
				localStorage.setItem('lang', 'en-US');
		}
	};

	return (
		<langContext.Provider value={{ establishLanguage: establishLanguage }}>
			<IntlProvider locale={locale} messages={message}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
};

export { LangProvider, langContext };
