import React from 'react';
import './App.css';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import {Route, Routes} from "react-router-dom";



function App() {
  return(
    <div className='App'>
     <Routes>
      <Route exact path='/' element={ <Form/> } />
     </Routes>
    </div>
  )
}

export default App;
