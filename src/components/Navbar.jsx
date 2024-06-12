// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import BorderLeft from "./BorderLeft";
import BorderRight from "./BorderRight";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-section navbar-name">
                <BorderLeft />
                Yaroslav Uglov
                <BorderRight />
            </div>
            <div className="navbar-section navbar-quote">
                <BorderLeft />
                I Believe I Can Do Anything, That's why I'm the best.
                <BorderRight />
            </div>
            <div className="navbar-section navbar-menu">
                <BorderLeft />
                <BorderLeft />
                <Link to="/portfolio" className="navbar-menu-item">
                    Portfolio
                </Link>
                <Link to="/blog" className="navbar-menu-item disabled">
                    Blog
                </Link>
                <Link to="/colorful" className="navbar-menu-item disabled">
                    Colorful
                </Link>
                <Link to="/archive" className="navbar-menu-item disabled">
                    Archive
                </Link>
                <Link to="/wow" className="navbar-menu-item disabled">
                    WOW
                </Link>
                <BorderRight />
            </div>
        </nav>
    );
};

export default Navbar;
