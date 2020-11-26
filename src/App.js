import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import DesktopCard from "./DesktopCard";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

function App() {
    return <div className="App">
        <Router >
            <Switch>
                <Route path="/" exact>
                    <Header />
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
                    <Footer />
                </Route>
                <Route path="/login">
                    <Login pageType="login" />
                </Route>
                <Route path="/signin">
                    <Login pageType="signin" />
                </Route>
            </Switch>
        </Router>
    </div>;
}

export default App;
