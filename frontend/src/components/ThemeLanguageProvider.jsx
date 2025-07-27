import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// For clarity, we can rename the context, but AppContext is also fine.
export const AppContext = createContext();

const ThemeLanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  // Initialize theme from localStorage, or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // This effect runs when the theme changes to update the browser and save the choice
  useEffect(() => {
    // Set the data-theme attribute on the <html> element for CSS to use
    document.documentElement.setAttribute('data-theme', theme);
    // Save the theme choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Function to toggle the language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  // The value provided to all child components
  const value = {
    theme,
    toggleTheme,
    language: i18n.language,
    toggleLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default ThemeLanguageProvider;