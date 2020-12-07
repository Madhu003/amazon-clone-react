import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import Home from "./Home";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

function App() {
    return <div className="App">
        <Router >
            <Switch>
                <Route path="/auth/login" exact>
                    <Login pageType="login" />
                </Route>
                <Route path="/auth/signin" exact>
                    <Login pageType="signin" />
                </Route>
                <Route path="/" component={Home}/>
                <Route path="/home" component={Home}/>

            </Switch>
        </Router>
    </div>;
}

export default App;
