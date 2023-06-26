import React from 'react';
import ReactDOM from 'react-dom/client';
// import Button from './assets/Button.jsx';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
