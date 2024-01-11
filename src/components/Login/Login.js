import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = (props) => {
    const [formInputs, setFormInputs] = useState({
        "email": "",
        "password": ""
    });

    function handleChange(e, type) {
        e.preventDefault();
        if (type === "email") {
            setFormInputs({ ...formInputs, email: e.target.value });
        } else {
            setFormInputs({ ...formInputs, password: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formInputs.email,
                password: formInputs.password,
                expiresInMins: 60, // optional
            })
        }).then((res) => res.json()).then((response) => {
            console.log("response", response);
            localStorage.setItem("token", response.token);
            localStorage.setItem("firstName", response.firstName);
            localStorage.setItem("lastName", response.lastName);
            localStorage.setItem("email", response.email);
            props.history.push({
                pathname: "/"
            });
        });
    }

    useEffect(() => {
        let checkLogin = localStorage.getItem("token");
        if (checkLogin) {
            props.history.replace({
                pathname: "/"
            });
        }
    }, [props.history]);

    return (
        <>
            <Navbar />
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label>UserName:</label>
                        <input
                            type="text"
                            name="email_id"
                            id="email_id"
                            required={true}
                            onChange={(e) => handleChange(e, "email")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="pswd"
                            id="pswd"
                            required={true}
                            onChange={(e) => handleChange(e, "password")}
                        />
                    </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Login;
