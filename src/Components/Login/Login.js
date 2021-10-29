import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInWithEmail, userEmail, userPassword, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (

        <div className="w-50 m-auto p-3 mt-3 border rounded mb-3">
            <h1 className="text-secondary mb-3 heading">Please Log in</h1>
            <div className="text-danger" style={{ height: "50px" }}>
                {error}
            </div>
            <form>
                <input
                onChange={userEmail}
                className="form-control mb-3"
                type="email"
                name=""
                id=""
                placeholder="E-mail"
                />
                <input
                onChange={userPassword}
                className="form-control mb-3"
                type="password"
                name=""
                id=""
                placeholder="Password"
                />
                <input
                onClick={signInWithEmail}
                className="btn btn-primary mb-3 heading btn-lg"
                type="submit"
                value="Login"
                />
            </form>
            <p>Or</p>
            <button onClick={handleGoogleLogin} className="btn btn-success me-2 heading">
                Sign in with Google
            </button>
            <p className="mt-3">
                New user? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;