import React from "react";
import "./FullPageLoader.css";
import { ClipLoader } from "react-spinners";

const FullPageLoader = () => {
    return (
        <>
            <div className="fullPageLoaderContainer">
                <ClipLoader
                    color="#e73c33"
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    )
}

export default FullPageLoader;