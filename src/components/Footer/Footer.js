import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter footer-i "></i></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f footer-i"></i></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram footer-i"></i></a>
        <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F1%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F1%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope footer-i"></i></a>
        <p>© Copyright Build With Innovation Private Limited. All Rights Reserved  |<a href="tel:9999999999" className="footer-i" target="_blank" rel="noopener noreferrer">Contact Us: +91 9999999999</a></p>
      </footer>
    </>
  );
}
