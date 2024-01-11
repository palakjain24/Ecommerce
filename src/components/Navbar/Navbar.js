import React from 'react';
import "./Navbar.css";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function logout(){
  localStorage.clear();
}

function Navbar() {

  var isLoggedIn = localStorage.getItem("token");


  return (
    <>
      <div className='container'>
        <ul className="nav-bar">
          <li><a href='/'><img className='logo-img' src="/assets/logo.png" alt="Shoppy" loading="lazy" /></a></li>
          <li className="nav-button-home"><a href='/'>Home</a></li>
          <li className="nav-button-services"><a href='/'>Services</a></li>
          <li className="nav-button-products"><a href='/listing'>Products</a></li>
          {isLoggedIn?.length ? null : <li className='nav-button-login'><a href="/login">LOGIN</a></li>}
          {/* <li className='nav-button-signup'><a href="/signup">SIGN UP</a></li> */}
          <li className='nav-button-cart'><a href="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart</a></li>

          {isLoggedIn?.length ? (
            <div className="dropdown">
              <button onClick={() => myFunction()} className="dropbtn">
                <i className="fa-solid fa-user-tie"></i> Welcome user!
              </button>
              <div id="myDropdown" className="dropdown-content">
                {/* <a href="#"><i class="fa-solid fa-user"></i> Profile</a> */}
                <a href="/" onClick={() => logout()}><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
              </div>
            </div>
          ) : null}


          
        </ul>
      </div>
    </>
  )
}

export default Navbar;
