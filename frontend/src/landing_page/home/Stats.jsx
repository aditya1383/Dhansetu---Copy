import React from "react";

const Stats = () => {
    return(
        <div className="container p-3">
            <div className="row mt-5 p-5">
                <div className="col-6 pt-5">
                    <h2 className="mb-5">Trust With Confidence</h2>

                    <h3 className="fs-4 mt-2">Customer-first always</h3>
                    <p className="text-muted">That's why 1.3+ crore customers trust zerodha with Rs3.5+ lakh crores worth of equity investments</p>

                    <h3 className="fs-4 mt-2">No spam or gimmicks</h3>
                    <p className="text-muted">No gimmicks spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

                    <h3 className="fs-4 mt-2">The Zerodha universe</h3>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>

                    <h3 className="fs-4 mt-2">Do better with moneys</h3>
                    <p className="text-muted">With initiatives like Nudge and kill switch, we dont ust facilitate transactions, but actively help ypu do better with your money</p>
                </div>

                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="Ecosystem"  style={{width:"98%"}}/>
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our Products</a>
                    <a href="" style={{textDecoration:"none"}}>Try kite Demo</a>
                </div>
            </div>
        </div>
    )
}

export default Stats;