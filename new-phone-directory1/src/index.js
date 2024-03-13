import React from 'react';
import ReactDOM from 'react-dom/client';
import './ShowSubscribers.css';
import './common/common1.css';
import reportWebVitals from './reportWebVitals';
import PhoneDirectory from './PhoneDirectory';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PhoneDirectory/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
