import React from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from "../../img/logo.png";
import useAuth from '../../hooks/useAuth.js';
import './Menu.css';

const Menu = () => {
    const { user, logOut, loading } = useAuth();
    const history = useHistory();
    if (loading) {
        return <Spinner animation="border" />
    }
    
    const handleMyOrder = () => {
        history.push(`/myOrders/${user.email}&&${user.displayName}`);
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="70"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items">
                    <li>Home</li>
                    </NavLink>
                    <NavLink to="/coachdetail" className="items">
                    <li>Coaches</li>
                    </NavLink>
                    <NavLink to="/recipes" className="items">
                    <li>Diet Recipes</li>
                    </NavLink>
                    {user.email ? 
                        <span className="item1 text-muted">Logged in {user.displayName} </span>
                        :
                        <NavLink to="/register" className="items">
                        <li>Register</li>
                        </NavLink>
                    }
                    {
                    user.email ?
                        // <button onClick={logOut} className="btn btn-outline-light">Log out</button>
                        <Dropdown className="items dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                My Profile
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleMyOrder}>My orders</Dropdown.Item>
                                <NavLink to="/manageAllOrders" className="text-decoration-none">
                                    <Dropdown.Item href="#/action-2">Manage all orders</Dropdown.Item>
                                </NavLink>
                                <NavLink to="/addService" className="text-decoration-none">
                                    <Dropdown.Item href="#/action-2">Add new orders</Dropdown.Item>
                                </NavLink>
                                <Dropdown.Item onClick={logOut} className="btn btn-outline-light">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <NavLink to="/login" className="items">Login</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;