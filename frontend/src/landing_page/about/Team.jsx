import React from "react";

const Team = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-5 border-top p-3">
                <h1 className=" text-center">People</h1>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col text-muted text-center p-5">
                    <img src="media/images/nithinKamath.jpg" alt="Founder" className="mb-5" style={{borderRadius:"100%", width:"48%"}}/>
                    <h3 className="fs-4">Nithin Kamath</h3>
                    <h6 className="mt-3 mb-5">Founder, CEO</h6>
                </div>

                <div className="col text-muted mt-2 p-5" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p className="mb-5">Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
                        <a href="" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team;