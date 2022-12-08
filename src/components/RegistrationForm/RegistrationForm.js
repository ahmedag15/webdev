import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import './RegistrationFormDropdown.css';



export default function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        var data = JSON.stringify({
            "name": username,
            "email": email,
            "password": password,
            "designation_id": 1
        });

        var config = {
            method: 'post',
            url: 'http://localhost:3000/user/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Registeration-form">
            <div className="Registration-form-body">
                <div><h1>Add User</h1></div>

                <div className="username">
                    <input className="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        placeholder="Username"
                        required />
                </div>
                <div className="email">
                    <input
                        type="email"
                        id="email"
                        className="Registration-form__input"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required />
                </div>
                <div className="password">
                    <input className="password"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required />
                </div>
            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">Confirm</button>

            </div>
        </div>

    )
}
