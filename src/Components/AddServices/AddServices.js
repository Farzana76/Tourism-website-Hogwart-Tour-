import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddServices = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-50 m-auto p-3 mt-3 border rounded mb-3 add-service">
            <h1 className="text-secondary mb-3 heading">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true })} placeholder="Title" />
                {errors.title?.type === 'required' && "Title is required"}
                
                <input {...register("price", { required: true })} placeholder="Price"/>
                {errors.price && "Price is required"}

                <input {...register("img", { required: true })} placeholder="Image URL"/>
                {errors.img?.type === 'required' && "Image is required"}
                
                <textarea {...register("desc", { required: true })} placeholder="Description"/>
                {errors.desc && "Description is required"}
                
                <input type="submit" className="btn btn-primary text-light heading btn-lg" value="Add service"/>
            </form>
        </div>
    );
};

export default AddServices;