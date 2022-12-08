import React from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Select, FormControl, InputLabel } from "@material-ui/core";
import Sidebar from '../Sidebar/Sidebar';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Departments.css';



export default function Departments() {
    const { handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const [anchor, setAnchor] = useState(null);

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
