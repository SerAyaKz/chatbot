import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxB5nlUYD1oWklOhL7cMHNh6X-Lp0nlnk",
  authDomain: "chatbot-68f8b.firebaseapp.com",
  databaseURL: "https://chatbot-68f8b-default-rtdb.firebaseio.com",
  projectId: "chatbot-68f8b",
  storageBucket: "chatbot-68f8b.appspot.com",
  messagingSenderId: "471440043946",
  appId: "1:471440043946:web:fdf0e8925978448a4445d3",
  measurementId: "G-H4LL8GGKB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();