import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Switch from './pages/components/themeSwitch';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch  />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
