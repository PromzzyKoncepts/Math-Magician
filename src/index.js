import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/calculator';
import './style.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="calculator-container">
      <Calculator />
    </div>
  </React.StrictMode>,
);

reportWebVitals();
