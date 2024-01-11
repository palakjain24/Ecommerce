import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./Cart.css";

const Cart = (props) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("tempCart")) || []);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem("tempCart", JSON.stringify(updatedCart));
    };

    function handleBuyItem(){
        window.location.href = "https://paytm.com/";
    }

    return (
        <>
            <Navbar />
            <div className="cart">
                {cartItems.map((item, index) => (
                    <div className="cart-row" key={index}>
                        <div className="cart-item cart-item-img">
                            <img src={item.images[0]} alt="item" />
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-size">Size: {item.selectedSize}</div>
                                <div className="cart-item-price">Price: ₹{item.price}</div>
                                <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-remove">
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                            <div className="cart-item-proceed">
                                <button onClick={() => handleBuyItem()}>Proceed to Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
