import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        document.getElementById('loginError').innerText = ""

        const user = {
            email: data.email,
            password: data.password
        }

        axios.post('http://localhost:5000/user', user)
            .then(res => {
                if (res.data.success) {
                    alert('login successfull')
                }
                else {
                    document.getElementById('loginError').innerText = "your email is "
                }
            })

    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">LogIn</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Provide a Valid Email'
                            }
                        })} type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                        </label>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'must be 6 characters or longer'
                            }
                        })}

                            type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                            }
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                            }

                        </label>
                        <p id="loginError" className='text-red-500'></p>


                        <p><small>forget password? <span>Reset</span></small> </p>
                        <p><small>no account? <Link to='/register'>Create Account</Link></small> </p>
                        <input type='submit' className='btn btn-primary w-full' value='LogIn' />
                    </form>



                </div>
            </div>

        </div>
    );
};

export default Login;