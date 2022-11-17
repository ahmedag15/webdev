import React from 'react';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className='App'>
   
       <Router>
        <Routes>
         <Route exact path="/" element={<Login />} />
         <Route path="/sidebar" element={<Sidebar />} />
         <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       </Router> 
    </div>
  )
}

export default App;
