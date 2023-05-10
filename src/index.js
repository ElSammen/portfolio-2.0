import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/App.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-2.0" >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

