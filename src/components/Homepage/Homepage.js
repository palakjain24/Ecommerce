import React from 'react';
import "./Homepage.css";
import ProductListingJson from "../../ProductListiong.json";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function Homepage() {

    // const listing = [
    //     {
    //         name: "Levis",
    //         id: 155624,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/shirt1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Team Sprit",
    //         id: 155625,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/tshirt1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Netplay",
    //         id: 155626,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/suit1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Monte Carlo",
    //         id: 155627,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/coat1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Red tape",
    //         id: 155628,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/kurta1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "BIBA",
    //         id: 155629,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/kurti1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Monte Carlo",
    //         id: 155629,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/formals1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Zara",
    //         id: 155629,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/dress1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Team Spirit",
    //         id: 155629,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/Wshirt1.jpg", "", "", ""],
    //         out_of_stock: false
    //     },
    //     {
    //         name: "Levis",
    //         id: 155629,
    //         brand_name: "",
    //         size: ["XL", "L", "M", "XS", "XXL", "XXXL", "S"],
    //         mrp: "2000",
    //         price: "1500",
    //         discount: "25%",
    //         available_piece: 10,
    //         is_visible: true,
    //         images: ["/assets/Wtshirt1.jpg", "", "", ""],
    //         out_of_stock: false
    //     }
    // ]

    return (
        <>
            <section className='homepage-section'>
                <span className='section-title'>Over 465+ million stylish clothes shipped!</span>
                <p className='section-description'>Step into a world of style and elevate your wardrobe today.</p>
            </section>

            <div className="grid-container">
                <div className="shoppy-photo">
                    <img src="/assets/photo1.jpg" alt="Shoppy-image1" loading="lazy" />
                    <p className='shoppy-photo-tittle'>5 decades of top shopping experience</p>
                    <p className='shoppy-photo-subtittle'>Our fashion designers bring high standards to</p>
                    <p className="shoppy-photo-subtittle">crafting your outfits.</p>
                </div>

                <div className="shoppy-photo">
                    <img src="/assets/photo2.jpg" alt="Shoppy-image1" loading="lazy" />
                    <p className='shoppy-photo-tittle'>Newer styles quicker</p>
                    <p className='shoppy-photo-subtittle'>80% of apparel comes directly from</p>
                    <p className='shoppy-photo-subtittle'>manufacturers.</p>
                </div>

                <div className="shoppy-photo">
                    <img src="/assets/photo3.png" alt="Shoppy-image1" loading="lazy" />
                    <p className='shoppy-photo-tittle'>You're occupied, so we're flexible </p>
                    <p className='shoppy-photo-subtittle'>Get curated clothing boxes on your schedule</p>
                    <p className='shoppy-photo-subtittle'>Skip, pause, or cancel anytime.</p>
                </div>
            </div>

            <div className='product-section'>
                <span className='product-section-title'>Unleash Your Wardrobe:</span>
                <span className='product-section-subtitle'>Discover 1000+ Exclusive Looks!</span>
            </div>


            <div className='products'>
                {ProductListingJson.slice(0, 10).map((item, index) => (
                    <div className='product_listing' key={index} onClick={() => {
                        history.push(`/product/${item.id}`);
                        window.location.reload();
                    }}>
                        <img src={item.images[0]} alt='img' loading="lazy" />
                        <h3 style={{ margin: 0,textAlign:"center" }}>{item.name}</h3>
                        <div style={{ display: "flex", gap: "0.5rem",justifyContent:"center" }}>
                            <span style={{ fontWeight:"bold",color: "#4ad54a" }}>₹{item.price}</span>
                            <span><strike>₹{item.mrp}</strike></span>
                            <p style={{ margin: 0 ,color:"red"}}>({item.discount} Off)</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='section2'>
                <a href="/listing">Explore Our Collection</a>
            </div>
        </>
    )
}

export default Homepage;