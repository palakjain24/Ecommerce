import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Signup.css';

const Signup = () => {
  return (
    <>
      <Navbar />
            <div className="signup-container">
                <form className="signup-form">
                    <h2>Signup</h2>
                    <div className="signupform-group">
                        <label>Name:</label>
                        <input type="text" name="" id="" required/>
                    </div>
                    <div className="signupform-group">
                        <label>Email:</label>
                        <input type="email" name="" id="" required />
                    </div>
                    <div className="signupform-group">
                        <label>Password:</label>
                        <input type="password" name="" id="" required />
                    </div>
                    <div className="signupform-group">
                        <label>Contact no.</label>
                        <input type="tel" name="" id="" required/>
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>

            <Footer />
    </>
  )
}

export default Signup