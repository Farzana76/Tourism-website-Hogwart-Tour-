import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {sid, title} = useParams();
    const [serv, setServ] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://dry-fjord-84495.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServ(data));
    }, [])

    const onSubmit = data =>{
        data.event = title;
        data.status = 'Pending';
        fetch('https://dry-fjord-84495.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="row body"> 
            <div className="col-lg-6 col-sm-12 col-md-12">
                {serv.filter(s => s._id === sid).map(filteredServ=> (
                    <div>
                        <Card className="m-5">
                            <Card.Img variant="top" className="rounded-3" src={filteredServ.img} />
                            <Card.ImgOverlay className="text-light">
                                <Card.Title className="overlay">
                                    <h1 className="display-5">{filteredServ.title}</h1>
                                </Card.Title>
                                </Card.ImgOverlay>
                                <Card.Text className="p-3">
                                    <h4 className="">Ticket Price: ${filteredServ.price}</h4>
                                    <h5>Availability: {filteredServ.date}</h5>
                                    <h5 className="">{filteredServ.desc}</h5>
                                </Card.Text>
                        </Card>
                    </div>
                    
                ))}
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 mt-5">
                <div className="w-75 m-auto p-3 mt-5 border rounded mb-3 add-detail">
                    <h1 className="text-secondary mb-3 heading body">Order Placing Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" className="btn btn-primary text-light heading btn-lg w-50" value="Place Order"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;