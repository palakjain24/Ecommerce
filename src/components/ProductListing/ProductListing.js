import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ProductListing.css'
import ProductListingJson from "../../ProductListiong.json";
import Sidebar from "./Sidebar";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const ProductListing = () => {
    const [updateListing, setUpdateListing] = useState(ProductListingJson.length ? ProductListingJson : []);
    const [filterKey, setFilterKey] = useState({});
    const [isDeleted, setIsDeleted] = useState(false);

    const handleSelection = (key, value) => {
        if (Object.values(filterKey).length && filterKey[key]?.includes(value)) {
            let findIndexx = filterKey[key].findIndex((i) => i === value);
            filterKey[key].splice(findIndexx, 1);
            if (filterKey[key].length === 0) {
                delete filterKey[key];
            }
            setFilterKey(filterKey);
            setIsDeleted(true);
            return;
        }
        if (value) {
            setFilterKey({
                ...filterKey,
                [key]: Object.keys(filterKey[key] ?? {}).length ? [...filterKey[key], value] : [value]
            });
        }
    }

    const applyFilters = useCallback(() => {
        let filteredList = ProductListingJson;
        Object.keys(filterKey).forEach((key) => {
            const values = filterKey[key].map((i) => i.toLowerCase());
            filteredList = filteredList.filter((item) => {
                if (key === "price") {
                    for (let i = 0; i < filterKey[key].length; i++) {
                        let findIndexx = filterKey[key][i];
                        if (findIndexx) {
                            let minPrice = findIndexx.split("-")[0];
                            let maxPrice = findIndexx.split("-")[1];
                            if (item.price >= minPrice && item.price <= maxPrice) {
                                return item.price;
                            }
                        }
                    }
                    // Default return if the condition is not met
                    return false;
                } else {
                    return values.includes(item[key].toLowerCase());
                }
            });
        });
        setUpdateListing(filteredList);
        if (isDeleted === true) {
            setIsDeleted(false);
        }
    }, [filterKey, isDeleted]);

    // Whenever the filterKey state changes, reapply filters
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    return (
        <>
            <div className='productListingContainer'>
                <Navbar />
                <div className="Listingcontainer">
                    <div className='containerLeft'>
                        <Sidebar handleSelection={handleSelection} />
                    </div>
                    <div className='containerRight'>
                        {(updateListing.length ? updateListing : []).map((item, index) => (
                            <div className='listingCards' key={index} onClick={() => {
                                history.push(`/product/${item.id}`);
                                window.location.reload();
                            }}>
                                <img src={item.images[0]} alt='img' loading="lazy" />
                                <h3 style={{ margin: 0, textAlign: "center" }}>{item.name}</h3>
                                <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                                    <span style={{ fontWeight: "bold", color: "#4ad54a" }}>₹{item.price}</span>
                                    <span><strike>₹{item.mrp}</strike></span>
                                    <p style={{ margin: 0, color: "red" }}>({item.discount} Off)</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProductListing;
