import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // o cualquier otro componente que contenga tus rutas
import "./index.css";
import { LanguageProvider } from "../src/components/language";
import reportWebVitals from './reportWebVitals';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <Router>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Router>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
