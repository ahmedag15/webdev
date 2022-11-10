import React from 'react'
import bgImg from '../assets/mainIMG.jpg';
import agImg from '../assets/signinIMG3.png';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <div className='img'>
                    <img style={{ width: 350, height: 125 }} src={agImg} alt="" />
                    </div>
                    <span>login with your credentials</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder='Username' />
                        <input type="password" {...register("password")} placeholder='Password' />
                        <button className='btn'>Login</button>
                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    )
}
