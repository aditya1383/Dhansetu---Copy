import React from "react";

const Education = () => {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 mt-5">
                    <img src="media/images/education.svg" alt="varsity" style={{width:"75%"}}/>
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col-6 mt-5">
                    <h1 className="fs-2 mt-4">Free and Open market education</h1>
                    <p className="mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in india for all your market related queries</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;