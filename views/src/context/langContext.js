import React, { useState } from 'react';
import MessageEnglish from '../lang/en-US.json';
import MessageSpanish from '../lang/es-CO.json';
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

	const changeValuesOfLenguages = (messageLanguage, prefixLanguages) => {
		setMessage(messageLanguage);
		setLocale(prefixLanguages);
		localStorage.setItem('lang', prefixLanguages);
	};

	const establishLanguage = () => {
		switch (localStorage.getItem('lang')) {
			case 'es-CO':
				changeValuesOfLenguages(MessageEnglish, 'en-US');
				break;
			case 'en-US':
				changeValuesOfLenguages(MessageSpanish, 'es-CO');
				break;
			default:
				changeValuesOfLenguages(MessageEnglish, 'en-US');
		}
	};

	return (
		<langContext.Provider value={{ establishLanguage }}>
			<IntlProvider locale={locale} messages={message}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
};

export { LangProvider, langContext };
