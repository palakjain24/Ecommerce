import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = (props) => {
    const [formInputs, setFormInputs] = useState({
        "username": "",
        "password": ""
    });

    const [errorMessage, setErrorMessage] = useState(""); // New state for error message

    function handleChange(e, type) {
        e.preventDefault();
        if (type === "username") {
            setFormInputs({ ...formInputs, username: e.target.value });
        } else {
            setFormInputs({ ...formInputs, password: e.target.value });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formInputs.username,
                    password: formInputs.password,
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Check for a token or any other relevant information in the response
            // and handle it accordingly

            // For example, you might want to save the token to localStorage
            if (data.token) {
                localStorage.setItem("token", data.token);
                props.history.push({
                    pathname: "/"
                });
            } else {
                setErrorMessage("Invalid login details. Please try again.");
            }
        } catch (error) {
            console.error("Invalid login details. Please try again.", error);
            setErrorMessage("Invalid login details. Please try again.");
        }
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
                    {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required={true}
                            onChange={(e) => handleChange(e, "username")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
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
