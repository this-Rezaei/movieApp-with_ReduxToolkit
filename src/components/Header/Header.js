import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user">
                <FaUserCircle className="logoIcon" />
            </div>
        </div>
    );
};

export default Header;
