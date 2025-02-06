import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import AppRoutes from './routes/AppRoutes.tsx';
import App from './App.tsx';


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
