import React from 'react'
import bgImg from '../assets/mainIMG.jpg';
import agImg from '../assets/signinIMG.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        // navigate to /Dashboard
        navigate('/dashboard');
    };


    return (
        <section className="Section">
            <div className="register">
                <div className="col-1">
                    <div className='img'>
                        <img style={{ width: 350, height: 125 }} src={agImg} alt="" />
                    </div>
                    <span>login with your credentials</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username", { required: true })} placeholder='Username' />
                        <input type="password" {...register("password", { required: true })} placeholder='Password' />
                        {errors.username?.type === "required" && "Username required /"}
                        {errors.password?.type === "required" && " Password required"}
                        <button className='btn' onClick={navigateToDashboard}>Login</button>

                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    )
}
