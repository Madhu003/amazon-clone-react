import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { getProductDetails } from "./Service";
import "./ProductPage.css";

export default function ProductPage() {
    let { id } = useParams();
    let [readMoreIsOn, setReadMoreIsOn] = useState(false);
    let product = getProductDetails(id);
    console.log("jhb")
    useEffect(() => {
        let product = getProductDetails(id);
        console.log(product)
    }, []);

    console.log(id);
    return <div className="product_page">
        <div className="product_page__product_image">
            <img src={product.images[0]} />

            <div className="product_page__product_images">
                {
                    product.images.map(imageUrl => <img src={imageUrl} />)
                }
            </div>
        </div>
        <div className="product_page__product_details">
            <p className="product_page__product_name">{product.name}</p>
            <p className="product_page__product_auther_name">
                by <button className="btn btn-link"
                    style={{
                        padding: "0px",

                    }}>
                    {product.author}
                </button>
            </p>
            {/* <Rating /> */}
            <p>
                <b>{product.description.main}</b>
            </p>

            {readMoreIsOn && <p>{product.description.more}</p>}
            <button className="btn btn-link product_page__readmore"
                onClick={() => setReadMoreIsOn(!readMoreIsOn)}>
                <small>&lt;</small> Read {readMoreIsOn ? "less" : "more"}
            </button>
        </div>
        <div className="product_page__delivery_details">
            <div className="product_page__delivery_details">
                <LocationOnOutlinedIcon /> Deliver to india
                <button className="btn btn-light">See All Buying Options</button>
            </div>
        </div>
    </div>
} 