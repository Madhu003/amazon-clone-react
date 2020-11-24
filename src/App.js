import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

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
                    <Footer />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </div>;
}

export default App;
