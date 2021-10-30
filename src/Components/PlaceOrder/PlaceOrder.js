import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const {sid} = useParams();
    const [serv, setServ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServ(data));
    }, [])

    return (
        <div className="row"> 
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
                                <Card.Text>
                                    <h4 className="">Ticket Price: ${filteredServ.price}</h4>
                                    <h5>Availability: {filteredServ.date}</h5>
                                    <h5 className="">{filteredServ.desc}</h5>
                                </Card.Text>
                        </Card>
                    </div>
                    
                ))}
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">

            </div>
        </div>
    );
};

export default PlaceOrder;