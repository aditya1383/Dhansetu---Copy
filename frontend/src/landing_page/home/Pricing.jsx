import React from "react";

const Pricing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 ">
                    <h1 className="fs-2">Unbeatable Price</h1>
                    <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                    <a href="">See Pricing</a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border">
                            <h1 className="mb-3 mt-4">₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col border">
                            <h1 className="mb-3 mt-4">₹20</h1>
                            <p>IntraDay and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;