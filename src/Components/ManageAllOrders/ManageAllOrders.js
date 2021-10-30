import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [ord, setOrd] = useState([]);

    useEffect(() => {
        fetch('https://dry-fjord-84495.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrd(data));
    }, [])

    // DELETE a order
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            const url = `https://dry-fjord-84495.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrders = ord.filter(order => order._id !== id);
                        setOrd(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <h1 className="display-5 heading mt-3">All Orders</h1>
            <div className="mx-5 mb-5 d-flex justify-content-center">
                <Table striped bordered hover variant="dark" className="mx-5">
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Client's Email</th>
                        <th>Client's Name</th>
                        <th>Client's Number</th>
                        <th>Client's Address</th>
                        <th>Client's City</th>
                        <th>Event Name</th>
                        <th>Status</th>
                        <th>Approval</th>
                        <th>Delete Order</th>
                        </tr>
                    </thead>
                    {ord.map(o => (
                                <tbody>
                                    <tr>
                                    <td>{o._id}</td>
                                    <td>{o.email}</td>
                                    <td>{o.name}</td>
                                    <td>{o.phone}</td>
                                    <td>{o.address}</td>
                                    <td>{o.city}</td>
                                    <td>{o.event}</td>
                                    <td>{o.status}</td>
                                    <td><button className="btn btn-primary">Approve</button></td>
                                    <td><button onClick={() => handleDeleteUser(o._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                </tbody>  
                                
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;