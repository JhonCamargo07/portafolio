import React from 'react';

const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const changeTheme = () => {
		switch (localStorage.getItem('theme')) {
			case 'dark':
				document.body.classList.add('light');
				localStorage.setItem('theme', 'light');
				break;
			case 'light':
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
				break;
			default:
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
		}
	};

	const establishTheme = () => {
		switch (localStorage.getItem('theme')) {
			case 'dark':
				document.body.classList.remove('light');
				break;
			case 'light':
				document.body.classList.add('light');
				break;
			default:
				document.body.classList.remove('light');
		}
	};

	return (
		<themeContext.Provider value={{ changeTheme: changeTheme }}>
			{establishTheme()}
			{children}
		</themeContext.Provider>
	);
};

export { ThemeProvider, themeContext };
