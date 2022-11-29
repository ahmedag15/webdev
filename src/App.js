import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Departments from './components/Departments';
import Assets from './components/Assets';
import EmployeeRecords from './components/EmployeeRecords';
 
function App() {

  return (
    <div className='App'>

      <Router>
        <Routes>

          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/employeerecords" element={<EmployeeRecords />} />
        

        </Routes>
      </Router>

    </div>
  )
}

export default App;
