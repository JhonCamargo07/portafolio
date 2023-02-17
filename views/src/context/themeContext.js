import React from 'react';

const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const changeThemeValuesRemovingClass = (nameClass, theme) => {
		document.body.classList.remove(nameClass);
		localStorage.setItem('theme', theme);
	};

	const changeThemeValuesByAddingClass = (nameClass, theme) => {
		document.body.classList.add(nameClass);
		localStorage.setItem('theme', theme);
	};

	const changeTheme = () => {
		switch (localStorage.getItem('theme')) {
			case 'dark':
				changeThemeValuesByAddingClass('light', 'light');
				break;
			case 'light':
				changeThemeValuesRemovingClass('light', 'dark');
				break;
			default:
				changeThemeValuesRemovingClass('light', 'dark');
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
		<themeContext.Provider value={{ changeTheme }}>
			{establishTheme()}
			{children}
		</themeContext.Provider>
	);
};

export { ThemeProvider, themeContext };
