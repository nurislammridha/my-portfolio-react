//External dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

//Internal dependencies
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./assets/styles/template_style.css";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HttpsRedirect>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HttpsRedirect>
);

reportWebVitals();
