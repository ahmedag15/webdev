import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {AuthProvider} from './context/AuthProvider';



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> 
     <App />
    </AuthProvider> 
  </React.StrictMode>,  
  
  document.getElementById('root')

);


