import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import GlobalStyle from './globalStyles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    {/* <GlobalStyle/> */}
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
