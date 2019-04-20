import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

export async function isLogin() {
	return localStorage.getItem("session_ticket");
}

export async function beLogout() {
	await localStorage.removeItem("session_ticket");
}

export async function setSessionTicket(ticket) {
	localStorage.setItem("session_ticket", ticket);
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
