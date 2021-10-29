import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css';

const Register = () => {
    const { error, getName, getEmail, userRegistration, getPassword } = useAuth();
   
    return (

        <div className="w-50 m-auto p-3 mt-3 border rounded mb-3">
            <h1 className="text-secondary mb-3 heading">Please Register</h1>
            <div className="text-danger" style={{ height: "50px" }}>
                {error}
            </div>
            <form>
                <input
                onChange={getName}
                className="form-control mb-3"
                type="text"
                name=""
                id=""
                placeholder="Name"
                />
                <input
                onChange={getEmail}
                className="form-control mb-3"
                type="email"
                name=""
                id=""
                placeholder="E-mail"
                />
                <input
                onChange={getPassword}
                className="form-control mb-3"
                type="password"
                name=""
                id=""
                placeholder="Password"
                />
                <input
                onClick={userRegistration}
                className="btn btn-primary text-light heading btn-lg"
                type="submit"
                value="Register"
                />
            </form>
            <p className="mt-3">
                Already registered? <Link to="/login">Log in</Link> here{" "}
            </p>
        </div>
    );
};

export default Register;