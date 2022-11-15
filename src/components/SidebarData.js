import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


export const SidebarData = [
   {
    title: "Dashboard",
    icon:  <DashboardIcon/>,
    link:  "/dashboard"
   },

   {
    title: "Departments",
    icon:  <AccountTreeIcon/>,
    link:  "/departments"
   },

   {
    title: "Assets",
    icon:  <BusinessIcon/>,
    link:  "/assets"
   },

   {
    title: "Employee Records",
    icon:  <PeopleIcon/>,
    link:  "/employeerecords"
   },

   {
    title: "Logout",
    icon:  <PowerSettingsNewIcon/>,
    link:  "/logout"
   }
]
  
