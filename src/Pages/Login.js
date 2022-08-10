import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <h3 className='text-3xl'>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" placeholder="Password" {...register("Password", { required: true, min: 8 })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;