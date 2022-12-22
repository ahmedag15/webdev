import React, { useState, useEffect } from 'react';

import axios from 'axios';
import bgImg from '../../Pictures/mainIMG.jpg';
import agImg from '../../Pictures/signinIMG.png';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email,
      password,
    });

    const config = {
      method: 'post',
      url: 'http://localhost:3000/user/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    await axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        window.location.href = '/departments';
        setEmail('');
        setPassword('');
        setUser(true);
        sessionStorage.setItem('user', response.data);
        console.log(response.data);
      })

      .catch((error) => alert('Wrong Email or Password'));
  };

  return (

    <div className="section">
      <div className="col-1">
        <div className="img">
          <img style={{ width: 350, height: 125 }} src={agImg} alt="" />
        </div>
        <span>Login with your credentials</span>
        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
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
          <button className="btn" type="submit">Login</button>
          {
                        user ? (<p className="text-success" style={{ color: 'green' }}>Logged In</p>)
                          : (<p className="text-danger" style={{ color: 'red' }} />)
                    }
        </form>
      </div>

      <div className="col-2">
        <img src={bgImg} alt="" />
      </div>
    </div>

  );
}
