import React, { useEffect, useRef, useState } from 'react';

import "./PopupForProductImages.css";

export default function PopupForProductImages({ images }) {
    let modelRef = useRef();
    let contentRef = useRef();

    let [seletedIndex, setSeletedIndex] = useState(0);

    useEffect(() => {
        // modelRef.current.addEventListener("click", event => {
        //     console.log(event);
        //     modelRef.current.style.display = "none";
        // });

        // contentRef.current.addEventListener("click", event => {
        //     event.stopPropagation();
        // });


        return () => {
        }
    }, []);

    return <div className="modal popup_for_product_images" ref={modelRef} role="dialog">
        <div className="modal-dialog" role="document" style={{
            maxWidth: "80%",
            width: "80%"
        }}>
            <div className="modal-content" ref={contentRef}>
                <div className="modal-header">
                    <h5 className="modal-title">Images ({images && images.length})</h5>
                    <button type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                            modelRef.current.style.display = "none";
                        }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="popup_for_product_images__image_preview">
                        <img src={images[seletedIndex]} />
                    </div>
                    <div className="popup_for_product_images__image_list">
                        {
                            images.map((imagesUrl, index) => <img src={imagesUrl}
                                style={{
                                    borderColor: seletedIndex == index ? "#e47911" : "#e4791100"
                                }}
                                onClick={() => setSeletedIndex(index)} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}