import React, { useState, useEffect } from 'react';

import { SidebarData } from './SidebarData';
import './Sidebar.css';

export default function Sidebar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    setUser({});
    setEmail('');
    setPassword('');
    sessionStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (

          <li

            className="row"
            id={window.location.href === val.link ? 'active' : ' '}
            key={key}
            onClick={() => {
              window.location.href = val.link;
            }}
          >

            <div id="icon">{val.icon}</div>
            {' '}
            <div id="title">{val.title}</div>
            {' '}

          </li>

        ))}
      </ul>

      <button className="btn-logout" variant="danger" onClick={handleLogout}>logout</button>

    </div>
  );
}
