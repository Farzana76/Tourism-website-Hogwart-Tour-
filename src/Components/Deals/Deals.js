import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img6 from '../../img/d1.jpg';
import img7 from '../../img/d2.png';
import img8 from '../../img/d3.jpg';

const Deals = () => {
    return (
        <div className="mx-5 mb-5 mt-3">
            <h1 className="heading mb-5">Hot Deals</h1>
            <CardGroup>
                <Card className="mx-4">
                    <Card.Img variant="top" className="rounded-3" src={img6} />
                    <Card.ImgOverlay className="text-light overlay">
                        <Card.Title>
                            <h1 className="h2">Gift Voucher</h1>
                        </Card.Title>
                    
                    <Card.Text className="p-3">
                            <h3 className="border text-light rounded">Ticket price: $100</h3>
                            <h4 className="fw-light">Duration: 1 year</h4>
                            {/* <h4 className="">{desc}</h4> */}
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="mx-4">
                    <Card.Img variant="top" className="rounded-3" src={img7} />
                    <Card.ImgOverlay className="text-light overlay">
                        <Card.Title>
                            <h1 className="h2">Buy for Family and Save Money!</h1>
                        </Card.Title>
                    
                    <Card.Text className="p-3">
                            <h3 className="border text-light rounded">$250 for 3 (save $50)</h3>
                            <h4 className="fw-light">Duration: 1 month</h4>
                            {/* <h4 className="">{desc}</h4> */}
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="mx-4">
                    <Card.Img variant="top" className="rounded-3" src={img8} />
                    <Card.ImgOverlay className="text-light overlay">
                        <Card.Title>
                            <h1 className="h2">Sale on 11.11</h1>
                        </Card.Title>
                    
                    <Card.Text className="p-3">
                            <h3 className="border text-light rounded">10% off on all services</h3>
                            <h4 className="fw-light">Duration: 3 days</h4>
                            {/* <h4 className="">{desc}</h4> */}
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
            
        </div>
    );
};

export default Deals;