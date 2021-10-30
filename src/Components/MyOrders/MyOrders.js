import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const MyOrders = () => {
    const {email, name} = useParams();
    const [ord, setOrd] = useState([]);
    
    useEffect(() => {
        fetch('https://dry-fjord-84495.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrd(data));
    }, []);

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
            <h1 className="display-5 heading mt-3">{name}'s Dashboard</h1>
            <div className="mx-5 mb-5 d-flex justify-content-center">
                <Table striped bordered hover variant="dark" className="mx-5">
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Event Name</th>
                        <th>Status</th>
                        <th>Delete Order</th>
                        </tr>
                    </thead>
                    {ord.filter(o => o.email === email).map(filteredOrd=> (
                            
                                <tbody>
                                    <tr>
                                    <td>{filteredOrd._id}</td>
                                    <td>{filteredOrd.event}</td>
                                    <td>{filteredOrd.status}</td>
                                    <td><button onClick={() => handleDeleteUser(filteredOrd._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                </tbody>  
                                
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;