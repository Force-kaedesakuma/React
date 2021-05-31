import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from './App';
import GetData from './GetData';
import FrontC from './frontC';
//import Board from './Board';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <FrontC />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
