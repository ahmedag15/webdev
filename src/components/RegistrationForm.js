import React, { useState, setState } from 'react';
import { Button, Popover, Typography, Select, FormControl,InputLabel,handleChange,MenuItem, age } from "@material-ui/core";
import './Style.css'


export default function RegistrationForm() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "username") {
            setUsername(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }

    }
    const handleSubmit = () => {
        console.log(username, email, password);
    }


    return (
        <div className="Registeration-form">
            <div className="Registration-form-body">
                <div><h1>Add User</h1></div>
                <div className="username">
                    <input className="username" type="text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="Username" />
                </div>
                <div className="email">
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <input className="password" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
            </div>
            <div class="footer">
                
                <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" placeholder='Add User'>Access Rights</InputLabel>
                        <Select>
                         
                           
                        </Select>
                        </FormControl>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" placeholder='Add User'>Department</InputLabel>
                        <Select>
                         
                           
                        </Select>
                        </FormControl>
                        <button onClick={() => handleSubmit()} type="submit" class="btn">Confirm</button>
            </div>
        </div>

    )
}

