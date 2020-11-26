import React, { useEffect, useState } from 'react';
import amazonLogo from "./images/amazon-logo.png"
import "./Footer.css";

const Footer = () => {
    return <div className="footer">
        <div
            className="signin-section">
            <span style={{ fontSize: "11px" }}>
                See personalized recommendations
            </span>
            <button className="btn">Sign in</button>
            <span style={{ fontSize: "11px" }}>
                New Customer? <a href="#">Start Here.</a>
            </span>
        </div>
        <div className="back-to-top"
        onClick={() => window.scrollTo(0, 0)}>
            Back to top
        </div>
        <div className="menu">
            <div className="menu-item-list">
                <div className="menu-item-head">Get to Know Us</div>
                <div className="menu-item"> About Us</div>
                <div className="menu-item"> Careers</div>
                <div className="menu-item">Press Releases</div>
                <div className="menu-item"> Amazon Cares</div>
                <div className="menu-item"> Gift a Smile</div>
            </div>
            <div className="menu-item-list">
                <div className="menu-item-head">Connect with Us</div>
                <div className="menu-item">Facebook</div>
                <div className="menu-item">Twitter</div>
                <div className="menu-item">Instagram</div>
            </div>
            <div className="menu-item-list">
                <div className="menu-item-head">Make Money with Us</div>
                <div className="menu-item">Sell on Amazon</div>
                <div className="menu-item">Sell under Amazon Accelerator</div>
                <div className="menu-item">Become an Affiliate</div>
                <div className="menu-item">Fulfilment by Amazon</div>
                <div className="menu-item"> Advertise Your Products</div>
                <div className="menu-item"> Amazon Pay on Merchants</div>
            </div>
            <div className="menu-item-list">
                <div className="menu-item-head">Let Us Help You</div>
                <div className="menu-item">COVID-19 and Amazon</div>
                <div className="menu-item"> Your Account</div>
                <div className="menu-item"> Returns Centre</div>
                <div className="menu-item"> 100% Purchase Protection</div>
                <div className="menu-item"> Amazon App Download</div>
                <div className="menu-item"> Amazon Assistant Download</div>
                <div className="menu-item"> Help</div>
            </div>
        </div>
        <div className="amazon-logo">
            <img src={amazonLogo} />
        </div>
    </div>
}

export default Footer;