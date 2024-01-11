import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./Product.css";
import ProductListingJson from "../../ProductListiong.json";

function Product(props) {
  const path = props?.match?.params?.productId ? Number(props?.match?.params?.productId) : "";
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (path) {
      let val = ProductListingJson.find((i) => i.id === path);
      setProductData(val);
    }
  }, [path]);

  useEffect(() => {
    if (!localStorage.getItem("tempCart")) {
      localStorage.setItem("tempCart", JSON.stringify([]));
    } else {
      if (productData?.id) {
        let product = JSON.parse(localStorage.getItem("tempCart")).length ? JSON.parse(localStorage.getItem("tempCart")) : [];
        if (product) {
          let val = product.find((i) => i?.id === productData?.id);
          if (val) {
            setProductData(val);
            setQuantity(val.quantity);
            setSelectedSize(val.selectedSize);
          }
        }
      }
    }
  }, [productData]);

  useEffect(() => {
    let fetchJsonFromLocal = JSON.parse(localStorage.getItem("tempCart"));
    if (fetchJsonFromLocal && productData && fetchJsonFromLocal.id === productData.id) {
      setProductData({
        ...productData,
        quantity: fetchJsonFromLocal.quantity,
      });
      setQuantity(fetchJsonFromLocal.quantity);
    }
  }, [productData]);

  function handleSizeSelection(size) {
    setSelectedSize(size);
    setProductData({
      ...productData,
      selectedSize: size,
    });
    let cart = JSON.parse(localStorage.getItem("tempCart"));
    if (cart && cart?.find((i) => i.id === productData.id)) {
      localStorage.setItem("tempCart", JSON.stringify([{ ...productData, selectedSize: size, quantity: quantity }]));
    }
  }  
  

  function handleQuantity(productData, quantity, type) {
    // Check if the user is logged in
    let isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn?.length) {
      // Redirect to login if not logged in
      props.history.push({
        pathname: "/login"
      });
    } else {
      // User is logged in, handle quantity based on type
      if (type === "add") {
        let q = quantity + 1;
        setQuantity(q);

        let cart = JSON.parse(localStorage.getItem("tempCart")) || [];
        let productInCart = cart.find(item => item.id === productData.id);

        if (productInCart) {
          // Update quantity if product is already in the cart
          productInCart.quantity = q;
        } else {
          // Add the product to the cart with the new quantity
          cart.push({ ...productData, quantity: q });
        }

        localStorage.setItem("tempCart", JSON.stringify(cart));
      }

      if (type === "minus") {
        let q = quantity - 1;

        if (q === 0) {
          // If quantity becomes zero, remove the product from the cart
          let cart = JSON.parse(localStorage.getItem("tempCart"));
          let findIndexx = cart.findIndex((item) => item.id === productData.id);

          if (findIndexx !== -1) {
            cart.splice(findIndexx, 1);
            localStorage.setItem("tempCart", JSON.stringify(cart));
          }
        } else {
          // Update quantity if it's greater than zero
          setQuantity(q);
          localStorage.setItem("tempCart", JSON.stringify([{ ...productData, quantity: q, selectedSize: selectedSize }]));
        }
      }
    }
  }

  function handleBuyNow(){
    let isLoggedIn=localStorage.getItem("token");
    if(!isLoggedIn?.length){
      props.history.push({
        pathname: "/login"
      });
    } else{
      props.history.push({
        pathname: "/cart"
      });
    }
  }


  return (
    <>
      <div className="productContainer">
        <Navbar />
        <div className='container-prodsection'>
          <div className="container-prodsection-left">
            <div className="prodsection-left-image">
              <img src={productData?.images[0]} alt="this is an images" />
            </div>
            <div className="prodsection-left-button">
              {quantity > 0 ? <button>
                <span onClick={() => handleQuantity(productData, quantity, "minus")}>-</span>
                <span>{quantity}</span>
                <span onClick={() => handleQuantity(productData, quantity, "add")}>+</span>
              </button> : <button onClick={() => handleQuantity(productData, quantity, "add")} >Add to Cart</button>}
              <button onClick={()=>handleBuyNow()}>Buy Now</button>
            </div>
          </div>
          <div className="container-prodsection-right">
            <div className="prodsection-tittle">{productData?.name}</div>
            <div className="prod-section-price">
              <span style={{ fontWeight: "bold", color: "#4ad54a" }}>₹{productData?.price}</span>
              <span><strike>₹{productData?.mrp}</strike></span>
              <p style={{ margin: 0, color: "red" }}>({productData?.discount} Off)</p>
            </div>

            <div className="prod-description">{productData?.description}</div>
            <div className="prod-size">
              {productData?.size?.map((size, index) => (
                <button key={index} onClick={() => handleSizeSelection(size)} className={selectedSize === size ? "selectedStar" : ""} > {size}</button>
              ))}
            </div>
            <div className="prod-available">{productData?.available_piece} items left</div>
            <div className="prod-rating">
              {Array(productData?.rating).fill().map((i, index) => (
                <span key={`star_` + index}>{"★"}</span>
              ))}
              <span style={{ fontSize: '15px' }}> ({productData?.reviews} reviews)</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Product;