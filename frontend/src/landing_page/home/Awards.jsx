import React from "react";

const Awards = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-5">
                <div className="col-5 ">
                    <img src="media/images/largestBroker.svg" alt="Broker" />
                </div>

                <div className="col-1 p-4"></div>

                <div className="col-6 p-4 mt-3">
                    <h1 className="pl-2"  style={{textAlign:"left"}}>Largest stock broker in India</h1>
                    <p className="pl-2 fs-7" style={{textAlign:"left"}}>2+ million Zerodha clients Contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>

                    <div className="row mt-5">
                        <div className="col-6" style={{textAlign:"left"}}>
                           <ul >
                            <li>Future and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                           </ul>
                        </div>
                        <div className="col-6" style={{textAlign:"left"}}>
                            <li>Stock & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="PressLogo" style={{width:"98%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Awards;