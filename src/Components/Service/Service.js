import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, title, price, desc, date, img} = props.service;
    const history = useHistory();
    
    const handleDetails = () => {
        history.push(`/service/${_id}`);
    }
    return (
        <div className="service">
             <Col>
             <Card>
                <Card.Img variant="top" className="rounded-3" src={img} />
                <Card.ImgOverlay className="text-light overlay">
                    <Card.Title>
                        <h1 className="h2">{title}</h1>
                    </Card.Title>
                
                <Card.Text className="p-3">
                        <h3 className="border text-light rounded">Ticket price: ${price}</h3>
                        <h4 className="fw-light">Availabilty: {date}</h4>
                        {/* <h4 className="">{desc}</h4> */}
                        <button onClick={handleDetails} className="btn btn-success mt-4">Book Ticket</button>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Col>
        </div>
    );
};

export default Service;