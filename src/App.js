import React from 'react';
import './App.css';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import {Route, Routes} from "react-router-dom";



function App() {
  return(
    <div className='App'>
     <Routes>
      <Route exact path="/" element={ <Form/> } />
      <Route path="/sidebar" element={<Sidebar/>}/>
     </Routes>
    </div>
  )
}

export default App;
