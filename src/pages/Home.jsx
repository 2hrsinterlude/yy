// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Navbar />
        </div>
    );
};

export default Home;
