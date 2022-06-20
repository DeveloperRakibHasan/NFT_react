import { createBrowserHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "react-router-dom";
import './App.css';
import App from './App';


export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router history={history}>
         <App />
  </Router>
);



