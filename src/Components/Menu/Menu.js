import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import useAuth from '../../hooks/useAuth.js';
import './Menu.css';

const Menu = () => {
    const { user, logOut, loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" />
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
                    <NavLink to="/register" className="items">
                    <li>Register</li>
                    </NavLink>
                    {user.email && <span className="item1 text-muted">Logged in {user.displayName} </span>}
                    {
                    user.email ?
                        <button onClick={logOut} className="btn btn-outline-light">Log out</button>
                        :
                        <NavLink to="/login" className="items">Login</NavLink>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;