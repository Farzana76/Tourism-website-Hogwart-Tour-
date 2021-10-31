import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img6 from '../../img/e1.jpg';
import img7 from '../../img/e2.jpg';
import img8 from '../../img/e3.jpg';
import img9 from '../../img/e4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const element2 = <FontAwesomeIcon icon={faArrowAltCircleRight} />
const Events = () => {
    return (
        <div className="mx-5 mb-5 mt-3">
            <h1 className="heading mb-5">Upcoming Events</h1>
            <CardGroup>
                <Card className="me-3 bg-transparent border-0">
                    <div className="row">
                        <div className="col-6">
                            <Card.Img variant="top" className="rounded-3" src={img6} />  
                        </div>
                        <div className="col-6">
                            <Card.Title>
                                <h1 className="heading">Yule Ball dance</h1>
                            </Card.Title>
                            <Card.Text className="pe-3">
                            <h3 className="text-danger">{element} On 11 November, 2021</h3>
                            <h4>Single Day Event</h4>
                            <h5 className="">Over your heads an area of lawn right in front of the castle will be transformed into a sort of grotto full of fairy lights. You'll get lost in the moment with your partner</h5>
                        </Card.Text>
                        </div>
                    </div>
                </Card>
                <Card className="me-3 bg-transparent border-0">
                    <div className="row">
                        <div className="col-6">
                            <Card.Img variant="top" className="rounded-3" src={img7} />  
                        </div>
                        <div className="col-6 mt-2">
                            <Card.Title>
                                <h1 className="heading">Gringotts Bank</h1>
                            </Card.Title>
                            <Card.Text className="pe-3">
                            <h3 className="text-danger">{element} From 15 November, 2021</h3>
                            <h4>Whole Week Event</h4>
                            <h5 className="">Wanna deposit your money in a secret wizardly bank? Then don't miss the chance!</h5>
                        </Card.Text>
                        </div>
                    </div>
                </Card>
            </CardGroup>
            <CardGroup className="mt-5">
                <Card className="me-3 bg-transparent border-0">
                    <div className="row">
                        <div className="col-6 mt-2">
                            <Card.Title>
                                <h1 className="heading">Potion Making</h1>
                            </Card.Title>
                            <Card.Text className="ps-3">
                            <h3 className="text-danger">From 23 November, 2021 {element2}</h3>
                            <h4>Three Days Event</h4>
                            <h5 className="">Want to learn how to make potions to appear in disguise? But don't do mistake like Harmione!</h5>
                        </Card.Text>
                        </div>
                        <div className="col-6">
                            <Card.Img variant="top" className="rounded-3" src={img8} />  
                        </div>
                    </div>
                </Card>
                <Card className="me-3 bg-transparent border-0">
                    <div className="row">
                        <div className="col-6 mt-2">
                            <Card.Title>
                                <h1 className="heading">Dark Art</h1>
                            </Card.Title>
                            <Card.Text className="ps-3">
                            <h3 className="text-danger">From 1 December, 2021 {element2}</h3>
                            <h4>Whole Week Event</h4>
                            <h5 className="">Want to be like Severus Snape? Then don't miss the chance!</h5>
                        </Card.Text>
                        </div>
                        <div className="col-6">
                            <Card.Img variant="top" className="rounded-3" src={img9} />  
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Events;