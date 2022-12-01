import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import bgImg from '../assets/mainIMG.jpg';
import agImg from '../assets/signinIMG.png';


export default function Login() {

    const { handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    const navigateToDashboard = () => {

        var data = JSON.stringify({
            "Email": "tru@gmail.com",
            "Password": "12345678"
        });

        var config = {
            method: 'post',
            url: 'http://localhost:3000/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                window.location.href = '/dashboard'
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    return (

        <div className="section">
            <div className="col-1">
                <div className='img'>
                    <img style={{ width: 350, height: 125 }} src={agImg} alt="" />
                </div>

                <span>login with your credentials</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder='Username'
                        required
                    />
                    <input
                        type="Password"
                        placeholder='Password'
                        required />
                    <button className='btn' onClick={navigateToDashboard}>Login</button>
                </form>
            </div>

            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>

    )
}
