import React from 'react'; // Official React Core Library 
import ReactDOM from 'react-dom'; // DOM Rendering Package 
import 'bootstrap/dist/css/bootstrap.css';  // bootstrap css

import './index.css'; // app wide styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
