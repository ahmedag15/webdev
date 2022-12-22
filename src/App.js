import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Departments from './components/Departments/Departments';
import Assets from './components/Assets/Assets';
import EmployeeRecords from './components/EmployeeRecords/EmployeeRecords';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route exact path="/" element={<Login />} />
          <Route exact path="/departments" element={<Departments />} />
          <Route exact path="/assets" element={<Assets />} />
          <Route exact path="/employeerecords" element={<EmployeeRecords />} />
          <Route exact path="/Register" element={<Register />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
