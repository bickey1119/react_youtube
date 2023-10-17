import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //StrictModeはWARNINGなどのエラーを出してくれる　renderingは画面のリロード
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


