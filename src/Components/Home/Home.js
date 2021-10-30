import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    // const [coaches, setCoaches] = useState([]);

    // loading service data
    useEffect(() => {
        fetch('https://dry-fjord-84495.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    // // loading coach data
    // useEffect(() => {
    //     fetch('./coach.json')
    //     .then(res => res.json())
    //     .then(data => setCoaches(data))
    // }, [])

    return (
        <div className="home">
            <Header></Header>
            {/* passing data of services */}
            <div className="services2">
                    <h1 className="heading mt-3">Our Services</h1>
                <Row xs={1} md={2} lg={3} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        services.map(service => <Service
                            key = {service.id}
                            service={service}
                            ></Service>)
                    }
                </Row> 
            </div>
            {/* <div className="services2">
                    <h1 className="heading mt-3">Our Coaches</h1>
                <Row xs={1} md={2} lg={4} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        coaches.slice(0, 4).map(coach => <Coach 
                            key = {coach.name}
                            coach={coach}
                            ></Coach>)
                    }
                </Row> 
            </div>
            <div id="text-center">
                <h1 className="heading mt-3">
                    Diet Tips
                </h1>
                <h5 className="mb-2 px-5 pb-3">
                    It’s easy to wonder which foods are healthiest.

                    A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein, and other whole foods, you’ll have meals that are colorful, versatile, and good for you.
                </h5>
            </div>
            <section className="healthy-foods img-fluid mx-auto">
                <div className="healthy-flex-display">
                    <div className="half-width healthy-section">
                        <h3>Fruits and berries</h3>
                        <p>
                            These sweet, nutritious foods are very easy to incorporate into your diet because they require little to no preparation.
                        </p>
                    </div>
                    <div className="half-width healthy-section">
                        <h3>Eggs</h3>
                        <p>
                            They were previously demonized for being high in cholesterol, but new studies show that they’re perfectly safe and healthy.
                        </p>
                    </div>
                </div>
                <div className="healthy-flex-display">
                    <div className="half-width healthy-section">
                        <h3>Meats</h3>
                        <p>
                            Unprocessed, gently cooked meat is one of the most nutritious foods you can eat.
                        </p>
                    </div>
                    <div className="half-width healthy-section">
                        <h3>Nuts and seeds</h3>
                        <p>
                            Despite being high in fat and calories, nuts and seeds may help you lose weight.
                        </p>
                    </div>
                </div>
                <div className="healthy-flex-display">
                    <div className="half-width healthy-section">
                        <h3>Vegetables</h3>
                        <p>
                            Calorie for calorie, vegetables are among the world’s most concentrated sources of nutrients.
                        </p>
                    </div>
                    <div className="half-width healthy-section">
                        <h3>Fish and seafood</h3>
                        <p>
                            They’re especially rich in omega-3 fatty acids and iodine, two nutrients in which most people are deficient.
                        </p>
                    </div>
                </div>
                <div className="healthy-flex-display mb-5">
                    <div className="half-width healthy-section">
                        <h3>Grains</h3>
                        <p>
                            Although grains have gotten a bad rap in recent years, some types are very healthy.
                        </p>
                    </div>
                    <div className="half-width healthy-section">
                        <h3>Breads</h3>
                        <p>
                            For those trying to adopt a healthier diet, it can be extremely challenging to find healthy breads.
                        </p>
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default Home;