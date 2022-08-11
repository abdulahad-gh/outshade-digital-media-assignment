import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateProduct = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [spinner, setSpinner] = useState(false);
    const [productTextError, setproductTextError] = useState(false)
    const imageStorageKeyImgbb = process.env.IMGBB_KEY;
    console.log(imageStorageKeyImgbb);



    const onSubmit = async data => {
        document.getElementById('productError').innerText = ''
        const { product, desc, price } = data


        const productObject = {
            product,
            desc,
            price,

        }

        // post req to server for save part collection of database 
        axios.post('http://localhost:5000/create-product', productObject)
            .then(res => {
                if (res.data.success) {
                    setproductTextError(false)
                    document.getElementById('productError').innerText = 'Your product added success'

                }
                else {
                    setproductTextError(true)
                    document.getElementById('productError').innerText = 'Your product already exists'
                }
            })


    }

    const handleCreateCategory = () => {
        const category = document.getElementById('category').value

        axios.put('http://localhost:5000/create-product', { category })
        .then(res => console.log(res.data))



    }





    return (
        <div className='mt-4 px-2 lg:px-5 lg:ml-20 bg-gray-200 rounded-md p-4 w-[800px] flex justify-center py-10'>
            <div>
                <h2 className=" text-2xl text-center">Add a New Product</h2>
                <div className=''>
                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("product", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.product?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="">Category</label>
                            <select
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                                {...register("category")}
                            >
                                <option value="men">men</option>

                            </select>
                            <div>
                                <input id='category' placeholder='add new category' className='input input-bordered  max-w-xs p-1' onClick={handleCreateCategory} />
                                <span onClick={handleCreateCategory} className='btn btn-xs ml-1'>Add</span>
                            </div>

                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <input
                                type="text"
                                placeholder="Product Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("desc", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label py-0">
                                {errors.desc?.type === 'required' && <span className="label-text-alt text-red-500">{errors.desc.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mt-2">
                            <input
                                type="text"
                                placeholder="Product Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        <p id='productError' className={productTextError ? 'text-red-500' : 'text-primary'}></p>


                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;