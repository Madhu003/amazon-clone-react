import React, { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import Header from "./Header";
import Footer from "./Footer";
import DesktopCard from "./DesktopCard";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const images = [
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Chhalaang/nobranding/1500x600_Hero-Tall_p._CB415559680_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/SH_Desktop1X._CB417289332_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/SH_Desktop1X._CB417289332_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/November/GW/1500x600_Shutterbug_fest_Nov._CB415529971_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/November2020/hero/HSBCset1_1500x600_GW._CB415623222_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/BTF/Nov/GW_PC_BUNK-1500-x-600._CB415678352_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/Nov/Rewards-for-Prime_1500x600_V2._CB416907378_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_1287794_1483639_IN_in_sa_la_wintercarnival_in_en_3546749_1500x600_1X_en_IN._CB415355060_.jpg" }
    ];

    function setSliderButtonsPotion(){
        let buttons = Array.from(document.querySelectorAll(".slider button"));
        buttons.forEach(item => {
            item.style.top = "30%";
        });
    }
    useEffect(() => {
        setSliderButtonsPotion()
    }, []);

    return (
        <div className="App">
            <Header />
            <div style={{ height: "94px" }}>&nbsp;</div>
            <div className="slider">
                <SimpleImageSlider
                    width={"100%"}
                    height={504}
                    images={images}
                    showNavs={true}
                    onStartSlide={setSliderButtonsPotion}
                    onCompleteSlide={setSliderButtonsPotion}
                />
                <div className="desktop-card-grid">
                    <DesktopCard />
                    <DesktopCard />
                    <DesktopCard />
                    <DesktopCard />
                </div>
            </div>

            <div style={{ height: "94px" }}>&nbsp;</div>
            {
                (new Array(0)).fill(4).map((item, index) => {
                    return <h1>{index}</h1>
                })
            }
            <Footer />
        </div>
    );
}

export default App;
