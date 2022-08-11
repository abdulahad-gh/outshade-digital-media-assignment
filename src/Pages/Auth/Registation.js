import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Hooks from '../Share/Hooks';

const Registation = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const [, setUser] = Hooks()
    // console.log(setUser);


    //spinner state
    const [spinner, setSpinner] = useState(false);




    const onSubmit = async data => {
        document.getElementById('regError').innerText = ""
        setSpinner(true)


        axios.post('http://localhost:5000/user', data)
            .then(res => {
                if (res.data.success) {
                    setSpinner(false)
                    alert('Registation successfull')
                    setUser(true)


                }
                else {
                    setSpinner(false)
                    document.getElementById('regError').innerText = "your have already account please login "
                }
            })
    }

    return (
        <div className='flex justify-center items-center h-screen mt-20  md:mt-10'>


            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Sign Up</h2>

                    <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>




                        <input placeholder='Name' {...register("name", {
                            required: {
                                value: true,
                                message: 'name is Required'

                            },
                            minLength: {
                                value: 5,
                                message: 'name at least 5 character or longer'
                            }
                        })} type="text" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                            }
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                            }
                        </label>


                        <input placeholder='Email' {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Provide a Valid Email'
                            }
                        })} type="email" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                        </label>



                        <input placeholder='Password' {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'must be 6 characters or longer'
                            }
                        })}

                            type="password" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                            }
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                            }

                        </label>


                        <input placeholder='Confirm Password' {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'must be 6 characters or longer'
                            },

                        })}

                            type="password" className="input input-bordered w-full max-w-xs" />




                        <input type='submit' className='btn btn-primary w-full mt-5' value={spinner ? 'Creating acount...' : 'Sign Up'} />
                        <p id="regError" className='text-red-500'></p>
                    </form>
                    <p className='text-center'><small>already have an account? <Link className='text-primary ' to='/login'>LogIn</Link></small></p>



                </div>
            </div>

        </div>
    );
};


export default Registation;