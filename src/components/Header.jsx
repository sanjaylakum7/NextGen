import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="logo-link">
                    TrendyTrends
                </Link>
            </div>
            <div className="header-right">
                <Link to="/about" className="header-link">About</Link>
                <Link to="/services" className="header-link">Services</Link>
                <Link to="/contact" className="header-link">Contact</Link>
                <button className="header-button">Sign In</button>
            </div>
        </header>
    )
}

export default Header