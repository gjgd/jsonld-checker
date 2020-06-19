import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

console.log(`Current commit is ${process.env.REACT_APP_CURRENT_COMMIT}`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
