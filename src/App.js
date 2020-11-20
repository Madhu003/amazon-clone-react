import React, { useEffect, useState } from 'react';
import logo from './images/amazon-logo.png';
import cartImage from './images/130-1303615_shopping-cart-icons-amazon-shopping-cart-icon.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    let [scrolledpx, setScrollpx] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", _ => setScrollpx(window.scrollY));
    }, []);

    return (
        <div className="App">
            <header style={{
                background: "#131921",
                position: scrolledpx > 65 ? "fixed" : "absolute",
                width: "99vW"
            }} className="app-header">
                <div style={{ display: "flex", alignItems: "end" }}>
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
                <div className="hello-sign" style={{ width: "193px", position: "relative" }}>
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
                        top: "62px",
                        right: "-155px",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "4px"
                    }}>
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
                            <div  className="your-account" style={{ width: "100%", paddingLeft: "20px" }}>
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
                <div style={{ width: "98px" }}>
                    Returns
                    <br></br>
                    <b>& Orders</b>
                </div>
                <div style={{ width: "94px" }}>
                    Try
                    <br></br>
                    <b>
                        Prime&nbsp;
                        <div style={{ display: "inline" }}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </b>
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
            </header>
            {
                (new Array(100)).fill(4).map((item, index) => {
                    return <h1>{index}</h1>
                })
            }
        </div>
    );
}

export default App;