import React from 'react';
import ReactDOM from 'react-dom/client';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

import App from './App';
import AuthContextProvider from './context/authContext';
import DarkModeContextProvider from './context/darkModeContext';
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);


