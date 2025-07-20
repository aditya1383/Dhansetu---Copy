import React from "react";

const Hero = () => {
    return (
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h1>Pricing</h1>
                <h5 className="text-muted mt-3">Free equity investments and flat ₹20 Intraday and F&O trades</h5>
            </div>
            <div className="row border-top p-5">
                <div className="col-4 mt-5 text-center p-3">
                    <img src="media/images/pricing0.svg" alt="" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are <br />absolute free --₹ 0 brokerage</p>
                </div>

                <div className="col-4 mt-5 text-center p-3">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat Rs, 20 or 0.03% (whichever is lower) per <br /> executed order on intaday trades across equity, <br /> currency, and commodity, trades.</p>
                </div>

                 <div className="col-4 mt-5 text-center p-3">
                    <img src="media/images/pricing0.svg" alt="" />
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolute <br /> free -- ₹ 0 commissions $ DP charges</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;