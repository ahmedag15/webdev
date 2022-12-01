import React from 'react'
import { SidebarData } from './SidebarData';


export default function Sidebar() {

  return (
    <div className="Sidebar">
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => (

          <li

            className='row'
            id={window.location.href === val.link ? "active" : ""}
            key={key} onClick={() => {
              window.location.href = val.link

            }}>

            <div id="icon">{val.icon}</div>{" "}
            <div id="title">{val.title}</div>{" "}

          </li>


        )

        )
        }
      </ul>
    </div>
  )
}
