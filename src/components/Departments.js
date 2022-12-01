import React from 'react'
import Sidebar from './Sidebar'
import { Button, Popover, Typography, Select, FormControl,InputLabel,handleChange,MenuItem, age } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import { useState } from "react";
import RegistrationForm from './RegistrationForm';
import { Form } from 'react-router-dom';


export default function Departments() {
    const { handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    };

    const [age,setAge] = React.useState();
function handleChange(e){
   setAge(e.currentTarget.value);
}




    return (
        <>
            <Sidebar></Sidebar>
            <div className="department">
                <div className="container-1">
                    <h1>Sub Departments</h1>
                    <button className='btn1'>View</button>
                </div>



                <div className="container-2">
                    <h1>Users and Access</h1>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" placeholder='Add User'>Add User</InputLabel>
                        <Select>
                           <RegistrationForm></RegistrationForm> 
                           
                        </Select>
                        </FormControl>

                </div>
            </div>


        </>

    )
}
