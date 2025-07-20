import React from "react";

const Brokerage = () => {
    return (
        <div className="container  border-top mb-5">
            <div className="row mt-5">
                <div className="col-8">
                    <h4 className="text-center mt-4 fs-5 p-2"><a href="" style={{textDecoration:"none"}}>Brokerage Calculator</a></h4>

                    <ul className="text-muted mb-4" style={{lineHeight:"2.5", fontSize:"13px"}}>
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center mt-4 fs-5 p-2"><a href="" style={{textDecoration:"none"}}>List of Charges</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Brokerage;