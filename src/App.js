import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {

  var isLoggedin = false;

  return (
    <div className='App'>

      {isLoggedin ? <Sidebar /> : <></>}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/sidebar" element={ } /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
