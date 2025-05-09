import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle'; // ✅ si ya lo creaste
import { Link } from '@mui/material';
<Link rel="stylesheet" href=".style/HomePage.css"></Link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
