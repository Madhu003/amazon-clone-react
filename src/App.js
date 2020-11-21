import React, { useEffect, useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div style={{height:"94px"}}>&nbsp;</div>
            {
                (new Array(10)).fill(4).map((item, index) => {
                    return <h1>{index}</h1>
                })
            }
            <Footer />
        </div>
    );
}

export default App;
