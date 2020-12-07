import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import DesktopCard from "./DesktopCard";
import ProductPage from './ProductPage';
export default function Home() {
    return <div>
        <Header />
        <Route path="/home/" exact >
            <ImageSlider />
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%"
            }}>
                <DesktopCard />
                <DesktopCard />
                <DesktopCard />
                <DesktopCard />
            </div>
        </Route>
        <Route path="/home/product-details/:id" exact component={ProductPage} />
        <Route path="/" exact><Redirect to="/home" /> </Route>
        <Footer />
    </div>
}