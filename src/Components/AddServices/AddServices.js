import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddServices = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-fjord-84495.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="w-50 m-auto p-3 mt-3 border rounded mb-3 add-service">
            <h1 className="text-secondary mb-3 heading">Please add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true })} placeholder="Title" />
                {errors.title?.type === 'required' && "Title is required"}
                
                <input {...register("price", { required: true })} placeholder="Price"/>
                {errors.price && "Price is required"}

                <input {...register("img", { required: true })} placeholder="Image URL"/>
                {errors.img?.type === 'required' && "Image is required"}

                <input {...register("date", { required: true })} placeholder="Available dates"/>
                {errors.date?.type === 'required' && "Date is required"}
                
                <textarea {...register("desc", { required: true })} placeholder="Description"/>
                {errors.desc && "Description is required"}
                
                <input type="submit" className="btn btn-primary text-light heading btn-lg" value="Add service"/>
            </form>
        </div>
    );
};

export default AddServices;