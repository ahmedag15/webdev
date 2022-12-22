import {React, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import RegisterTable from './RegisterTable';

import './Register.css';


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = JSON.stringify({
  
        "name": name,
        "email": email,
        "password": password,
        "designation_id": 1
  
      });
  
      const config = {
        method: 'post',
        url: 'http://localhost:3000/user/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data : data
      };
  
      await axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setName('');
          setEmail('');
          setPassword('');
          setRegister(true);
        })
  
        .catch((error) => alert('Fill in all the fields correctly'));
    };
  

  return (
    <>
    <Sidebar />,
    <div className="main">
        <div className="col_1">
          <div className="header">
            <h1 style={{ fontSize: '3em', color: 'white' }}>Add User</h1>
          </div>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              value={name}
              required
            />

            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              required
            />
          

            <button className="btn" type="submit">Register</button>
            {
                            register ? (<p className="text-success" style={{ color: 'green' }}>Registered Successfully</p>)
                              : (<p className="text-danger" style={{ color: 'red' }} />)
                        }
          </form>
        </div>

        <div className="col_2">
          <div className="second">
            <RegisterTable />
          </div>
        </div>
      </div>
    </>
  )
}
