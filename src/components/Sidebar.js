import React from 'react'
import {SidebarData} from './SidebarData'; 


export default function Sidebar(){
  return (
    <div className="Sidebar">
      <ul className='SidebarList'>
       {SidebarData.map((val, key) => {
      return(<li
                className='row' 
                key= {key} onClick={()=>{window.location.pathname = val.link
                
                }}>

        <div id="icon">{val.icon}</div>{" "}
        <div id="title">{val.title}</div>{" "}

        </li>
      
      )})}
    </ul>
    </div>
  );
}
