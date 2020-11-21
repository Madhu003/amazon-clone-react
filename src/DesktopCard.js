import React, { useEffect, useState } from 'react';

import "./desktopCard.css"
const DesktopCard = () => {

    let images = [
        {
            url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg",
            title: "Dishwashers"
        },
        {
            url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg",
            title: "Washing machines"
        },
        {
            url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/MSO/DCQC_TV_186x116_5._SY116_CB434051404_.jpg",
            title: "Televisions"
        },
        {
            url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Ref_graphic_desktop_QC_186x116._SY116_CB429411324_.png",
            title: "Refrigerators"
        }
    ]

    return <div className="desktop-card">
        <div className="heading">
            Top picks for your home
        </div>
        <div className="images-grid">
            {
                images.map(item => {
                    return <div className="image">
                        <img src={item.url} />
                        <span style={{ fontSize: "11px", marginTop: "2px" }}>{item.title}</span>
                    </div>
                })
            }
        </div>
        <div className="see-more">See More</div>
    </div >
}

export default DesktopCard;