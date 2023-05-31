import React, { useEffect, useState } from 'react';
import NodeGeocoder from 'node-geocoder';
import {useHistory} from 'react-router-dom';
import logo from './images/amazon-logo.png';
import cartImage from './images/130-1303615_shopping-cart-icons-amazon-shopping-cart-icon.png'
import primeAddImage from "./images/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg"
import locationImage from "./images/location-icon.png";
import gameImage from "./images/gaming-swm._CB430661085_.jpg";

import "./Header.css";

const Header = () => {
    let history = useHistory();
    let [scrolledpx, setScrollpx] = useState(0);
    let [isMouseOnAccounts, setIsMouseOnAccounts] = useState(false);
    let [isMouseOnPrime, setIsOnPrime] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", _ => setScrollpx(window.scrollY));

        const NodeGeocoder = require('node-geocoder');

        const options = {
            provider: 'google',

            // Optional depending on the providers
            // fetch: customFetchImplementation,
            apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
            formatter: null // 'gpx', 'string', ...
        };

        // const geocoder = NodeGeocoder(options);
        // geocoder.reverse({ lat: 45.767, lon: 4.833 })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }, []);

    return <>
        <header style={{
            background: "#131921",
            position: scrolledpx > 65 ? "fixed" : "absolute",
            width: "99vW"
        }} >
            <div className="app-header">
                <div style={{ display: "flex", alignItems: "end", cursor: "pointer" }}
                onClick={() => history.push("/home")}>
                    <img src={logo} style={{
                        height: "28px"
                    }} />
                    <span>.in</span>
                </div>
                <div className="input-group" style={{ paddingLeft: "20px" }}>
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="search-button btn btn-outline-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hello-sign header__menu-item"
                    style={{ width: "193px", position: "relative" }}
                    // onMouseOver={e => console.log(e)}
                    onMouseOver={() => setIsMouseOnAccounts(true)}
                    onMouseOut={() => setIsMouseOnAccounts(false)}>
                    Hello, Sign In
            <br></br>
                    <b>
                        Accounts & List&nbsp;
                <div style={{ display: "inline" }}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </b>
                    <div className="hello-sign-drop-down" style={{
                        width: "470px",
                        position: "absolute",
                        top: "43px",
                        right: "-155px",
                        color: "black",
                        border: "1px solid #bbb",
                        borderRadius: "4px",
                        display: isMouseOnAccounts ? "block" : "none",
                        background: "#ffffff"
                    }} 
                    onMouseOver={() => setIsMouseOnAccounts(true)}
                    onMouseOut={() => setIsMouseOnAccounts(false)}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            borderBottom: "1px solid #eee",
                            padding: 10
                        }}>
                            <button className="btn">Sign in</button>
                            <span style={{ fontSize: "11px" }}>
                                New Customer? <a href="#">Start Here.</a>
                            </span>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 10
                        }}>
                            <div className="your-list" style={{ borderRight: "1px solid #eee", width: "100%" }}>
                                <h6><b>Your List</b></h6>
                                <div>Create a Wish List</div>
                                <div> Find a Wish List</div>
                                <div> Wish from Any Website</div>
                                <div> Baby Wish List</div>
                                <div>Discover Your Style</div>
                                <div> Explore Showroom</div>
                            </div>
                            <div className="your-account" style={{ width: "100%", paddingLeft: "20px" }}>
                                <h6><b>Your Account</b></h6>
                                <div>Your Orders</div>
                                <div>Your Wish List</div>
                                <div>Your Recommendations</div>
                                <div>Your Prime Membership</div>
                                <div>Your Prime Video</div>
                                <div>Your Subscribe & Save Items</div>
                                <div>Memberships & Subscriptions</div>
                                <div>Your Amazon Business Account</div>
                                <div>Your Seller Account</div>
                                <div>Manage Your Content and Devices</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__menu-item" style={{ width: "98px" }}>
                    Returns
                    <br></br>
                    <b>& Orders</b>
                </div>
                <div className="header__menu-item" style={{ width: "94px", position: "relative" }}
                    onMouseOver={() => setIsOnPrime(true)}
                    onMouseOut={() => setIsOnPrime(false)}
                >
                    Try
            <       br></br>
                    <b>
                        Prime&nbsp;
                <div style={{ display: "inline" }}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </b>
                    <div className="hello-sign-drop-down" style={{
                        position: "absolute",
                        top: "43px",
                        right: "-30px",
                        color: "black",
                        border: "1px solid #bbb",
                        display: isMouseOnPrime ? "block" : "none",
                        borderRadius: "4px",
                        padding: 10,
                        background: "#ffffff"
                    }} 
                    onMouseOver={() => setIsOnPrime(true)}
                    onMouseOut={() => setIsOnPrime(false)}>
                        <img src={primeAddImage} style={{ width: 300, height: 300 }} />
                    </div>
                </div>
                <div style={{
                    width: "86px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                }}>
                    <img style={{
                        width: "30px", height: "30px",
                        "-webkit-transform": "scaleX(-1)",
                        transform: "scaleX(-1)"
                    }} src={cartImage} />
                    <b> Cart</b>
                    <div style={{
                        position: "absolute",
                        top: "-3px",
                        left: "14px",
                        fontWeight: "bold",
                        fontSize: "17px",
                        color: "#f08804"
                    }}>0</div>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: 40,
                background: "#232f3e",
                display: scrolledpx > 65 ? "none" : "flex",
                color: "white",
                justifyContent: "space-between",
                // padding: "3px"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                }}
                    className="header__menu-item">
                    <div>
                        <img src={locationImage} />
                    </div>
                    <div>
                        Hello
                    <br></br>
                        <b>Select your address</b>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "14px",
                    alignItems: "center",
                    width: "50%",
                    justifyContent: "space-around"
                }}>
                    <span className="header__menu-item">Mobile</span>
                    <span className="header__menu-item">Best Sellers</span>
                    <span className="header__menu-item">Today's Deals</span>
                    <span className="header__menu-item">New Releases</span>
                    <span className="header__menu-item">Computer</span>
                    <span className="header__menu-item">Customer Services</span>
                </div>
                <img src={gameImage} />
            </div>
        </header>
        <div style={{ height: "94px" }}>&nbsp;</div>
    </>;
};

export default Header;