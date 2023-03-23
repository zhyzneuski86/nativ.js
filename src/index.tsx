import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWorlds} from "./01-hello-tests/01";

// const sentense = "Hello my friend!"
// const result = splitIntoWorlds(sentense)
// console.log(result[0]==="Hello")
// console.log(result[1]==="my")
// console.log(result[2]==="friend")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <App />

);

// ReactDOM.render (<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
