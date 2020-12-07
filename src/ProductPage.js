import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { getProductDetails } from "./Service";
import "./ProductPage.css";
import PopupForProductImages from "./PopupForProductImages";

export default function ProductPage() {
    let { id } = useParams();
    let [readMoreIsOn, setReadMoreIsOn] = useState(false);
    let product = getProductDetails(id);
    console.log("jhb")
    useEffect(() => {
        let product = getProductDetails(id);
        console.log(product)
    }, []);

    let handleSeeAllImages =() => {
        let model = document.querySelector(".product_page .modal");
        model.style.display = "flex";

    }

    console.log(id);
    return <div className="product_page">
        <PopupForProductImages images={product.images}/>
        <div className="product_page__product_image">
            <img src={product.images[0]} />

            <div className="product_page__product_images">
                {
                    product.images.slice(0, 3).map(imageUrl => <img src={imageUrl} />)
                }
            </div>
            <button className="btn btn-link" 
            onClick={handleSeeAllImages}>
                See all {product.images.length} images
            </button>
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
                {
                    readMoreIsOn
                        ?
                        <span>
                            <small>&gt;</small>
                            &nbsp;Read Less
                        </span>
                        :
                        <span>
                            <small>&lt;</small>
                            &nbsp;Read More
                        </span>
                }
            </button>
        </div>
        <div className="product_page__delivery_details">
            <div className="product_page__delivery_details__address">

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                }}>
                    <LocationOnOutlinedIcon style={{ fontSize: "18px" }} />
                    <span style={{
                        fontSize: "12px",
                        textAlign: "left",
                        marginBottom: "5px"
                    }}>
                        Deliver to india
                    </span>
                </div>
                <button className="btn btn-light">
                    See All Buying Options
                </button>
                <hr></hr>
                <button className="btn btn-light" style={{ textAlign: "left" }}>
                    Add to List
                </button>
            </div>
        </div>
    </div>
} 